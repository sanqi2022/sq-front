<template>
  <sq-card height="80%" :title="'销售数据'">
    <template slot="right">
      <sq-choose-date @setDate="setDate"></sq-choose-date>
    </template>
    <div class="card-body pabel-container">
      <div class="list-cards">
        <sq-sub-title class="title" :title="'销售情况'"></sq-sub-title>
        <div class="datas">
          <div class="md">
            <sq-icontext-mv :data="cd1" class="lc"> </sq-icontext-mv>
          </div>
          <div class="md">
            <sq-icontext-mv :data="cd2" class="lc">
              <template slot="image">
                <img src="@/assets/images/icons/money.png" />
              </template>
            </sq-icontext-mv>
          </div>
          <div class="md">
            <sq-icontext-mv :data="cd3" class="lc">
              <template slot="image">
                <img src="@/assets/images/icons/crash.png" />
              </template>
            </sq-icontext-mv>
          </div>

          <div class="md">
            <sq-icontext-mv :data="cd4" class="lc"> </sq-icontext-mv>
          </div>
          <div class="md">
            <sq-icontext-mv :data="cd5" class="lc">
              <template slot="image">
                <img src="@/assets/images/icons/money.png" />
              </template>
            </sq-icontext-mv>
          </div>
          <div class="md">
            <sq-icontext-mv :data="cd6" class="lc">
              <template slot="image">
                <img src="@/assets/images/icons/crash.png" />
              </template>
            </sq-icontext-mv>
          </div>

          <div class="md">
            <sq-icontext-mv :data="cd7" class="lc"> </sq-icontext-mv>
          </div>
          <div class="md">
            <sq-icontext-mv :data="cd8" class="lc">
              <template slot="image">
                <img src="@/assets/images/icons/money.png" />
              </template>
            </sq-icontext-mv>
          </div>
          <div class="md">
            <sq-icontext-mv :data="cd9" class="lc">
              <template slot="image">
                <img src="@/assets/images/icons/crash.png" />
              </template>
            </sq-icontext-mv>
          </div>
        </div>
      </div>

      <div class="img-con">
        <div class="lf">
          <sq-sub-title class="title" :title="'销售情况'"></sq-sub-title>
          <sq-sale-panel :date="chooseDate" :typedw="dataType"></sq-sale-panel>
        </div>
        <div class="rg">
          <sq-sub-title :simple="true" class="title" :title="'去年与今年销售额对比'"></sq-sub-title>
          <div class="chart">
            <sq-gauge v-if="chdata" :data="chdata" :typedw="dataType"></sq-gauge>
          </div>
        </div>
      </div>

      <div class="chart-con" style="margin-top: 40px">
        <sq-sub-title :simple="true" class="title" :title="'销量趋势'"></sq-sub-title>
        <div class="chart">
          <sq-line v-if="ldata1" :data="ldata1" :xdata="xdata1" :showtl="true"></sq-line>
        </div>
      </div>

      <div class="chart-con">
        <sq-sub-title :simple="true" class="title" :title="'销售额趋势'"></sq-sub-title>
        <div class="chart">
          <sq-line v-if="ldata2" :data="ldata2" :xdata="xdata2" :showtl="true"></sq-line>
        </div>
      </div>
    </div>
  </sq-card>
</template>
<script>
import SqCard from "@/components/Card/index.vue";
import SqChooseDate from "@/components/ChooseDate/index.vue";
import SqSubTitle from "@/components/sub-title/index.vue";
import SqIcontextMv from "@/components/icon-text/indexmv.vue";
import SqSalePanel from "@/components/sale-panel/index.vue";
import SqGauge from "@/components/Charts/Gauge.vue";
import SqLine from "@/components/Charts/Line.vue";
import {
  GetMarketSalesList,
  GetMarketSalesCompareStatics,
  GetMarketSalesTrendStatics,
  GetMarketSalesAmountTrendStatics,
  GetMarketSalesStatics,
  GetSaleQS, GetSaleEQS,
  GetSaleNumTrendList,
  GetSaleTrendList
} from "@/api/person";
export default {
  components: {
    SqCard,
    SqChooseDate,
    SqSubTitle,
    SqIcontextMv,
    SqSalePanel,
    SqGauge,
    SqLine,
  },
  data() {
    return {
      chooseDate: "",
      cd1: { title: "", dw: "", val: 0 },
      cd2: { title: "", dw: "", val: 0 },
      cd3: { title: "", dw: "", val: 0 },
      cd4: { title: "", dw: "", val: 0 },
      cd5: { title: "", dw: "", val: 0 },
      cd6: { title: "", dw: "", val: 0 },
      cd7: { title: "", dw: "", val: 0 },
      cd8: { title: "", dw: "", val: 0 },
      cd9: { title: "", dw: "", val: 0 },

      dataType: '',

      chdata: [
        { name: "去年", namelen: "去年销售额", value: 80, dw: "亿元" },
        { name: "今年", namelen: "今年销售额", value: 50, dw: "亿元" },
      ],

      ldata1: [
        { name: "销售额目标", data: [] },
        { name: "实际销售额", data: [] },
        { name: "同期销售额", data: [] },
        { name: "环比销售额", data: [] },
      ],
      xdata1: [],
      ldata2: [],
      xdata2: [],
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    async init() {
      let d = [{ name: '去年', namelen: '去年销售额', value: 0, dw: '亿元' }, { name: '今年', namelen: '今年销售额', value: 0, dw: '亿元' }]

      let type = 'year'
      if (this.chooseDate.indexOf('-') >= 0) {
        type = 'month'
        let arr = this.chooseDate.split('-')
        let year = parseInt(arr[0]), month = parseInt(arr[1])
        let lastmonth = month - 1
        let lastyear = year
        if (lastmonth <= 0) {
          lastmonth = 12
          lastyear = lastyear - 1
        }
        let where = `?where=(year,eq,${year})~and(month,eq,${month})~and(istotal,eq,0)`
        let where2 = `?where=(year,eq,${lastyear})~and(month,eq,${lastmonth})~and(istotal,eq,0)`
        let jnobj = await GetMarketSalesStatics(where)
        let qnobj = await GetMarketSalesStatics(where2)

        let s1 = 0, s2 = 0
        for (let l of jnobj.list) {
          s1 += Number(l.number / 10000)
        }
        for (let l of qnobj.list) {
          s2 += Number(l.number / 10000)
        }

        d[0].name = '上月'
        d[0].namelen = '上月销售额'
        d[0].value = s2.toFixed(1)
        d[1].name = '本月'
        d[1].namelen = '本月销售额'
        d[1].value = s1.toFixed(1)
        this.chdata = d
        ///////////////
        let k1 = `?where=(year,eq,${year})~and(month,eq,${month})~and(istotal,eq,0)&sort=Id`
        this.initXLQS(k1, '日', 'day')
        this.__initXSE(k1, '日', 'day')
        this.dataType = '万'

      } else {
        type = 'year'
        let year = this.chooseDate
        let lastyear = Number(year) - 1
        let where = `?where=(year,eq,${year})`, where2 = `?where=(year,eq,${lastyear})`
        let jnobj = await GetMarketSalesStatics(where)
        let qnobj = await GetMarketSalesStatics(where2)

        let s1 = 0, s2 = 0
        for (let l of jnobj.list) {
          if (l.istotal == 1 && l.month == 13) {
            s1 += Number(l.number / 1000000)
          }
        }
        for (let l of qnobj.list) {
          if (l.istotal == 1 && l.month == 13) {
            s2 += Number(l.number / 1000000)
          }
        }
        d[0].value = s2.toFixed(1)
        d[1].value = s1.toFixed(1)
        this.chdata = d

        let k1 = `?where=(year,eq,${year})~not(month,eq,13)~and(istotal,eq,1)`
        this.initXLQS(k1, '月', 'month')
        this.__initXSE(k1, '月', 'month')

        this.dataType = '百万'
      }

      GetMarketSalesList().then((res) => {
        for (let i in res.list) {
          this["cd" + (Number(i) + 1)]["title"] = res.list[i].name;
          this["cd" + (Number(i) + 1)]["val"] = res.list[i].number;
          this["cd" + (Number(i) + 1)]["dw"] = "单位：" + res.list[i].unit;
        }
      });

      // this.chdata = false;
      // GetMarketSalesCompareStatics().then((res) => {
      //   console.log(res.list);
      //   let data = [];
      //   res.list.forEach((item) => {
      //     data.push({
      //       name: item.name,
      //       namelen: item.name + "销售额",
      //       value: item.number,
      //       dw: item.unit,
      //     });
      //   });
      //   this.chdata = data;
      // });


      // this.ldata1 = false;
      // GetMarketSalesTrendStatics({ limit: 1000 }).then((res) => {
      //   let xData = [];
      //   let yData = [
      //     { name: "销售额目标", data: [] },
      //     { name: "实际销售额", data: [] },
      //     { name: "同期销售额", data: [] },
      //     { name: "环比销售额", data: [] },
      //   ];
      //   res.list.forEach((item) => {
      //     if (xData.indexOf(item.time) == -1) {
      //       xData.push(item.time);
      //     }
      //     yData.forEach((item1) => {
      //       if (item1.name == item.name) {
      //         item1.data.push(item.number);
      //       }
      //     });
      //   });
      //   this.xdata1 = xData;
      //   this.ldata1 = yData;
      // });
      // this.ldata2 = false;
      // GetMarketSalesAmountTrendStatics({ limit: 1000 }).then((res) => {
      //   console.log(res)
      //   let xData = [];
      //   let yData = [
      //     { name: "销售额目标", data: [] },
      //     { name: "实际销售额", data: [] },
      //     { name: "同期销售额", data: [] },
      //     { name: "环比销售额", data: [] },
      //   ];
      //   res.list.forEach((item) => {
      //     if (xData.indexOf(item.time) == -1) {
      //       xData.push(item.time);
      //     }
      //     yData.forEach((item1) => {
      //       if (item1.name == item.name) {
      //         item1.data.push(item.number);
      //       }
      //     });
      //   });
      //   this.xdata2 = xData;
      //   this.ldata2 = yData;
      // });
    },
    async initXLQS(str, dw, indexname) {
      // let obj = await GetSaleQS(str)
      // let lens = {}
      // let xz = [], ses = []
      // for (let l of obj.list) {
      //   if (!lens[l.name]) {
      //     lens[l.name] = []
      //   }
      //   let bl = indexname == 'month' ? 1000000 : 10000
      //   let num = Number(l.num) / bl
      //   lens[l.name].push({ x: l[indexname] + dw, y: num.toFixed(1) })
      // }
      // for (let k in lens) {
      //   xz = []
      //   let dat = []
      //   for (let o of lens[k]) {
      //     xz.push(o.x)
      //     dat.push(o.y)
      //   }
      //   ses.push({ name: k, data: dat })
      // }
      let ses = [
        {
          name: '同期',
          data: []
        },
        {
          name: '环比',
          data: []
        },
        {
          name: '当期',
          data: []
        }
      ], xz = []
      // nameList = ['同比', '环比', '当期']
      // console.log(ses, xz, str, dw, indexname, this.chooseDate)
      let startTime = "", endTime = "", type = ""
      if (indexname == "day") {
        startTime = this.chooseDate + "-01"
        endTime = this.chooseDate + "-31"
        type = "day"
      }
      if (indexname == "month") {
        startTime = this.chooseDate + "-01-01"
        endTime = this.chooseDate + "-12-31"
        type = "month"
      }
      const obj = await GetSaleNumTrendList({
        startTime: startTime,
        endTime: endTime,
        type: type
      })
      for (let i of obj.result) {
        ses[0].data.push(i.yearBasis)
        ses[1].data.push(i.relativeRatio)
        ses[2].data.push(i.thisNumber)
        if (type == "month") {
          let time = i.date.split("-")
          xz.push(time[1] + "月")
        }
        if (type == "day") {
          xz.push(i.date)
        }
      }
      this.ldata1 = ses
      this.xdata1 = xz
    },

    async __initXSE(str, dw, indexname) {
      // let obj = await GetSaleEQS(str)
      // let lens = {}
      // let xz = [], ses = []
      // for (let l of obj.list) {
      //   if (!lens[l.name]) {
      //     lens[l.name] = []
      //   }
      //   let bl = indexname == 'month' ? 1000000 : 10000
      //   let num = Number(l.num) / bl
      //   lens[l.name].push({ x: l[indexname] + dw, y: num })
      // }
      // for (let k in lens) {
      //   xz = []
      //   let dat = []
      //   for (let o of lens[k]) {
      //     xz.push(o.x)
      //     dat.push(o.y)
      //   }
      //   ses.push({ name: k, data: dat })
      // }
      let ses = [
        {
          name: '同期',
          data: []
        },
        {
          name: '环比',
          data: []
        },
        {
          name: '当期',
          data: []
        }
      ], xz = []
      // nameList = ['同比', '环比', '当期']
      // console.log(ses, xz, str, dw, indexname, this.chooseDate)
      let startTime = "", endTime = "", type = ""
      if (indexname == "day") {
        startTime = this.chooseDate + "-01"
        endTime = this.chooseDate + "-31"
        type = "day"
      }
      if (indexname == "month") {
        startTime = this.chooseDate + "-01-01"
        endTime = this.chooseDate + "-12-31"
        type = "month"
      }
      const obj = await GetSaleTrendList({
        startTime: startTime,
        endTime: endTime,
        type: type
      })
      for (let i of obj.result) {
        ses[0].data.push(i.yearBasis)
        ses[1].data.push(i.relativeRatio)
        ses[2].data.push(i.thisNumber)
        if (type == "month") {
          let time = i.date.split("-")
          xz.push(time[1] + "月")
        }
        if (type == "day") {
          xz.push(i.date)
        }
      }
      this.ldata2 = ses
      this.xdata2 = xz
    },
    setDate(date) {
      this.chooseDate = date;
      console.log(date)
      this.init();
    }
  },
};
</script>
<style lang="scss" scoped>
.pabel-container {
  display: block;

  .list-cards {
    height: 220px;

    .datas {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;

      .md {
        width: 32%;
        height: 55px;
        margin: 10px 0 0 0;
      }
    }
  }

  .img-con {
    height: 128px;
    margin: 10px 0 0 0;
    display: flex;
    justify-content: space-between;

    .lf {
      width: 60%;
    }

    .rg {
      width: 35%;
      height: 100%;
    }

    .chart {
      width: 100%;
      height: 100%;
      margin: 10px 0 0 0;
    }
  }

  .chart-con {
    height: calc(50% - 200px);

    .chart {
      width: 100%;
      height: calc(100% - 40px);
    }
  }
}

@media screen and (min-width: 2560px) {
  .pabel-container .chart-con {
    height: calc(50% - 210px);
  }
}

@media screen and (min-width: 3840px) {
  .pabel-container .chart-con {
    height: calc(50% - 220px);
  }
}
</style>
