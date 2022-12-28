<template>
  <sq-card height="66%" class="sep" :title="'销售与客户体验'">
    <template slot="right">
      <sq-tab></sq-tab>
    </template>
    <div class="card-body pabel-container">

      <v-left-right-layout :widths="['60%', '38%']" class="h-con">
        <template slot="left">
          <sq-sub-title class="title" :title="'销售情况'"></sq-sub-title>
          <sq-sale-panel></sq-sale-panel>
        </template>
        <template slot="right">
          <sq-sub-title :simple="true" class="title" :title="'去年与今年销售额对比'"></sq-sub-title>
          <div class="chart-con">
            <div class="chart ch-image">
              <sq-gauge :data="chdata">
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
  GetSaleInfo, GetSaleYear, GetSaleQS, GetSaleEQS
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

      cdata1: [],
      xdata1: [],

      cdata2: [],
      xdata2: [],

      chdata: []
    }
  },
  mounted() {
    this.__init()
    this.__init2()
  },
  methods: {
    async __init() {
      let obj = await GetSaleYear()
      let d = [{ name: '去年', namelen: '去年销售额', value: 0, dw: '亿元' }, { name: '今年', namelen: '今年销售额', value: 0, dw: '亿元' }]
      d[0].value = obj.list[0].lastYear
      d[1].value = obj.list[0].thisYear
      this.chdata = d
      ///////////////

      let obj2 = await GetSaleQS()
      let c1 = {}
      let c1xdata = [], c1data = []
      for (let di of obj2.list) {
        if (!c1[di.name]) {
          c1[di.name] = []
        }
        c1[di.name].push(di)
      }
      for (let k in c1) {
        let arr = []
        c1xdata = []
        for (let a of c1[k]) {
          arr.push(Number(a.num))
          c1xdata.push(a.month + '月')
        }
        c1data.push({ name: k, data: arr })
      }
      this.cdata1 = c1data
      this.xdata1 = c1xdata
    },
    async __init2() {
      let obj2 = await GetSaleEQS()
      let c1 = {}
      let c1xdata = [], c1data = []
      for (let di of obj2.list) {
        if (!c1[di.name]) {
          c1[di.name] = []
        }
        c1[di.name].push(di)
      }
      for (let k in c1) {
        let arr = []
        c1xdata = []
        for (let a of c1[k]) {
          arr.push(Number(a.num))
          c1xdata.push(a.month + '月')
        }
        c1data.push({ name: k, data: arr })
      }
      this.cdata2 = c1data
      this.xdata2 = c1xdata
    }
  }
}
</script>
<style lang="scss" scoped>
.pabel-container{
  display: block;
  .h-con{
    height: 128px;margin: 10px 0 0 0;
    .chart-con{
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: space-between;
      
      .chart{
        height: 100%;width: 100%;
        flex: 1;margin: 10px 0 0 0;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        img{
          position: absolute;
          width: 40%;
        }
      }
    }
  }
  .chart-con{
    height: calc(50% - 140px);
    .chart{
      width: 100%;
      height: calc(100%  - 40px);
    }
  }

  .ls-list{
    display: flex;margin: 10px 0 0 0;
    justify-content: space-between;
    .md{height: 100%;
    }
  }
  .ch-con{

  }
}
@media screen and (min-width: 2560px) {
  .pabel-container>.chart-con{
    height: calc(50% - 150px);
    .chart{
      width: 100%;
      height: calc(100%  - 40px);
    }
  }
}
@media screen and (min-width: 3840px) {
  .pabel-container>.chart-con{
    height: calc(50% - 166px) !important;
    .chart{
      width: 100%;
      height: calc(100%  - 40px);
    }
  }
}
</style>
