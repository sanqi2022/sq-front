<template>
  <sq-card height="66%" class="sep" :title="'销售与客户体验'">
    <template slot="right">
      <sq-tab></sq-tab>
    </template>
    <div class="card-body pabel-container">

      <v-left-right-layout :widths="['60%', '38%']" class="h-con">
        <template slot="left">
          <sq-sub-title class="title" :title="'销售情况'"></sq-sub-title>
          <sq-sale-panel :date="saleDate" :typedw="dataType"></sq-sale-panel>
        </template>
        <template slot="right">
          <sq-sub-title :simple="true" class="title" :title="'去年与今年销售额对比'"></sq-sub-title>
          <div class="chart-con">
            <div class="chart ch-image">
              <sq-gauge :data="chdata" :typedw="dataType">
              </sq-gauge>
            </div>
          </div>
        </template>
      </v-left-right-layout>


      <div class="chart-con" style="margin-top: 40px;">
        <sq-sub-title :simple="true" class="title" :title="'销量趋势'"></sq-sub-title>
        <div class="chart" v-if="cdata1.length > 0">
          <sq-line :data="cdata1" :xdata="xdata1" :showtl="true"></sq-line>
        </div>
      </div>

      <div class="chart-con">
        <sq-sub-title :simple="true" class="title" :title="'销售额趋势'"></sq-sub-title>
        <div class="chart" v-if="cdata2.length > 0">
          <sq-line :data="cdata2" :xdata="xdata2" :showtl="true"></sq-line>
        </div>
      </div>

      <div class="ch-con">
        <sq-sub-title class="title" :title="'客户行业分布'"></sq-sub-title>
        <div class="ls-list">
          <div class="md" style="width: 14.2%;height:100px;">
            <sq-circle-text></sq-circle-text>
          </div>
          <div class="md" style="width: 14.2%;height:100px;">
            <sq-circle-text></sq-circle-text>
          </div>
          <div class="md" style="width: 14.2%;height:100px;">
            <sq-circle-text></sq-circle-text>
          </div>
          <div class="md" style="width: 14.2%;height:100px;">
            <sq-circle-text></sq-circle-text>
          </div>
          <div class="md" style="width: 14.2%;height:100px;">
            <sq-circle-text></sq-circle-text>
          </div>
          <div class="md" style="width: 14.2%;height:100px;">
            <sq-circle-text></sq-circle-text>
          </div>
          <div class="md" style="width: 14.2%;height:100px;">
            <sq-circle-text></sq-circle-text>
          </div>
        </div>
      </div>

    </div>
  </sq-card>
</template>
<script>
import SqCard from "@/components/Card/index.vue";
import SqTab from '@/components/Tab/index.vue'
import SqSalePanel from '@/components/sale-panel/index.vue'
import SqSubTitle from '@/components/sub-title/index.vue'
import SqCircleText from '@/components/circle-text/index.vue'
import SqGauge from '@/components/Charts/Gauge.vue'
import SqLine from '@/components/Charts/Line.vue'

import VLeftRightLayout from '@/views/components/left-right-layout.vue'
import {
  GetSaleInfo, GetSaleYear, GetSaleQS, GetSaleEQS,
  GetMarketSalesStatics, GetSaleNumTrendList, GetSaleTrendList
} from '@/api/person'

export default {
  components: {
    SqCard,
    SqTab,
    SqSalePanel,
    SqSubTitle,
    SqCircleText,
    SqGauge,
    SqLine,
    VLeftRightLayout
  },
  data() {
    return {
      tabs: [
        { id: 1, name: '2022', type: '1' },
        { id: 2, name: '全年', type: '2' },
        { id: 3, name: '全球', type: '3' },
        { id: 4, name: '全部产品', type: '4' },
      ],
      dataType: '百万',

      saleDate: '2022',

      cdata1: [],
      xdata1: [],

      cdata2: [],
      xdata2: [],

      chdata: []
    }
  },
  mounted() {
    this.__init()
  },
  methods: {
    dy_setDate(date) {
      this.saleDate = date

      this.__init()
    },
    async __init() {
      // let obj = await GetSaleYear()
      let d = [{ name: '去年', namelen: '去年销售额', value: 0, dw: '亿元' }, { name: '今年', namelen: '今年销售额', value: 0, dw: '亿元' }]

      let type = 'year'
      if (this.saleDate.indexOf('-') >= 0) {
        type = 'month'
        let arr = this.saleDate.split('-')
        let year = arr[0], month = arr[1]
        let where = `?where=(year,eq,${year})~and(month,eq,${month})`
        // TODO:
      } else {
        type = 'year'
        let year = this.saleDate
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
        ////////////
        let k1 = `?where=(year,eq,${year})~not(month,eq,13)~and(istotal,eq,1)`
        this.initXLQS(k1)
        this.__initXSE(k1)
      }
    },
    async initXLQS(str) {
      // let obj = await GetSaleQS(str)
      // let lens = {}
      // let xz = [], ses = []
      // for (let l of obj.list) {
      //   if (!lens[l.name]) {
      //     lens[l.name] = []
      //   }
      //   let num = Number(l.num) / 1000000
      //   lens[l.name].push({ x: l.month + '月', y: num.toFixed(1) })
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
      // this.cdata1 = ses
      // this.xdata1 = xz
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
      // let date = new Date()

      startTime = this.saleDate + "-01-01"
      endTime = this.saleDate + "-12-31"
      type = "month"

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
          xz.push(i.time)
        }
      }
      this.cdata1 = ses
      this.xdata1 = xz
    },

    async __initXSE(str) {
      // let obj = await GetSaleEQS(str)
      // let lens = {}
      // let xz = [], ses = []
      // for (let l of obj.list) {
      //   if (!lens[l.name]) {
      //     lens[l.name] = []
      //   }
      //   let num = Number(l.num) / 1000000
      //   lens[l.name].push({ x: l.month + '月', y: num.toFixed(1) })
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
      // let date = new Date()

      startTime = this.saleDate + "-01-01"
      endTime = this.saleDate + "-12-31"
      type = "month"

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
          xz.push(i.time)
        }
      }
      this.cdata2 = ses
      this.xdata2 = xz
    }
  }
}
</script>
<style lang="scss" scoped>
.pabel-container {
  display: block;

  .h-con {
    height: 128px;
    margin: 10px 0 0 0;

    .chart-con {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: space-between;

      .chart {
        height: 100%;
        width: 100%;
        flex: 1;
        margin: 10px 0 0 0;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;

        img {
          position: absolute;
          width: 40%;
        }
      }
    }
  }

  .chart-con {
    height: calc(50% - 140px);

    .chart {
      width: 100%;
      height: calc(100% - 40px);
    }
  }

  .ls-list {
    display: flex;
    margin: 10px 0 0 0;
    justify-content: space-between;

    .md {
      height: 100%;
    }
  }

  .ch-con {}
}

@media screen and (min-width: 2560px) {
  .pabel-container>.chart-con {
    height: calc(50% - 150px);

    .chart {
      width: 100%;
      height: calc(100% - 40px);
    }
  }
}

@media screen and (min-width: 3840px) {
  .pabel-container>.chart-con {
    height: calc(50% - 166px) !important;

    .chart {
      width: 100%;
      height: calc(100% - 40px);
    }
  }
}
</style>
