<template>
  <sq-card height="80%" :title="'销售数据'">
    <template slot="right">
      <sq-choose-date></sq-choose-date>
    </template>
    <div class="card-body pabel-container">
      <div class="list-cards">
        <sq-sub-title class="title" :title="'销售情况'"></sq-sub-title>
        <div class="datas">
          <div class="md">
            <sq-icontext-mv :data="cd1" class="lc">
            </sq-icontext-mv>
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
            <sq-icontext-mv :data="cd4" class="lc">
            </sq-icontext-mv>
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
            <sq-icontext-mv :data="cd7" class="lc">
            </sq-icontext-mv>
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
          <sq-sale-panel></sq-sale-panel>
        </div>
        <div class="rg">
          <sq-sub-title :simple="true" class="title" :title="'去年与今年销售额对比'"></sq-sub-title>
          <div class="chart">
            <sq-gauge :data="chdata"></sq-gauge>
          </div>
        </div>
      </div>

      <div class="chart-con" style="margin-top: 40px;">
        <sq-sub-title :simple="true" class="title" :title="'销量趋势'"></sq-sub-title>
        <div class="chart">
          <sq-line :data="ldata1" :showtl="true"></sq-line>
        </div>
      </div>

      <div class="chart-con">
        <sq-sub-title :simple="true" class="title" :title="'销售额趋势'"></sq-sub-title>
        <div class="chart">
          <sq-line :data="ldata1" :showtl="true"></sq-line>
        </div>
      </div>
    </div>
  </sq-card>
</template>
<script>
import SqCard from "@/components/Card/index.vue";
import SqChooseDate from '@/components/ChooseDate/index.vue'
import SqSubTitle from '@/components/sub-title/index.vue'
import SqIcontextMv from '@/components/icon-text/indexmv.vue'
import SqSalePanel from '@/components/sale-panel/index.vue'
import SqGauge from '@/components/Charts/Gauge.vue'
import SqLine from '@/components/Charts/Line.vue'
export default {
  components: {
    SqCard,
    SqChooseDate,
    SqSubTitle,
    SqIcontextMv,
    SqSalePanel,
    SqGauge,
    SqLine
  },
  data() {
    return {
      cd1: { title: '最大订单额', dw: '单位：元', val: 9327 },
      cd2: { title: '销售目标', dw: '单位：元', val: 9327 },
      cd3: { title: '完成指标', dw: '单位：元', val: 9327 },
      cd4: { title: '新增订单数', dw: '单位：元', val: 9327 },
      cd5: { title: '交付订单', dw: '单位：元', val: 9327 },
      cd6: { title: '未交付订单', dw: '单位：元', val: 9327 },
      cd7: { title: '成交金额', dw: '单位：元', val: 9327 },
      cd8: { title: '回款金额', dw: '单位：元', val: 9327 },
      cd9: { title: '未回款金额', dw: '单位：元', val: 9327 },

      chdata: [{ name: '去年', namelen: '去年销售额', value: 80, dw: '亿元' }, { name: '今年', namelen: '今年销售额', value: 50, dw: '亿元' }],

      ldata1: [
        { name: '销售额目标', data: [] },
        { name: '实际销售额', data: [] },
        { name: '同期销售额', data: [] },
        { name: '环比销售额', data: [] },
      ],
    }
  }
}
</script>
<style lang="scss" scoped>
.pabel-container{
  display: block;
  .list-cards{
    height: 220px;
    .datas{
      display: flex;
      flex-wrap: wrap;justify-content: space-between;
      .md{
        width: 32%;height: 55px;
        margin: 10px 0 0 0;
      }
    }
  }
  .img-con{
    height: 128px;margin: 10px 0 0 0;
    display: flex;justify-content: space-between;
    .lf{
      width: 60%;
    }
    .rg{
      width: 35%;height: 100%;
    }
    .chart{
      width: 100%;
      height: 100%;margin: 10px 0 0 0;
    }
  }
  .chart-con{
    height: calc(50% - 200px);
    .chart{
      width: 100%;
      height: calc(100%  - 40px);
    }
  }
}
@media screen and (min-width: 2560px) {
  .pabel-container .chart-con{
    height: calc(50% - 210px);
  }
}
@media screen and (min-width: 3840px) {
  .pabel-container .chart-con{
    height: calc(50% - 220px);
  }
}
</style>
