<template>
  <sq-card height="45%" :title="'告警信息'">
    <template slot="right">
      <sq-choose-date></sq-choose-date>
    </template>
    <div class="card-body pabel-container h-con">
      <v-hor-mul-layout :hasHead="false" class="m1">
        <template slot="mod-0">
          <sq-icontext-mv :data="cd1">
          </sq-icontext-mv>
        </template>
        <template slot="mod-1">
          <sq-icontext-mv :data="cd2">
            <template slot="image">
              <img src="@/assets/images/icons/money.png" />
            </template>
          </sq-icontext-mv>
        </template>
        <template slot="mod-2">
          <sq-icontext-mv :data="cd3">
            <template slot="image">
              <img src="@/assets/images/icons/crash.png" />
            </template>
          </sq-icontext-mv>
        </template>
      </v-hor-mul-layout>

      <div class="m2">
        <v-left-right-layout>
          <template slot="left">
            <v-hor-mul-layout :widths="['30%', '68%']">
              <template slot="m-top">
                <sq-sub-title class="title" :title="'全球交易额'"></sq-sub-title>
              </template>
              <template slot="mod-0">
                <sq-v-icon-text class="fk" :title="'交易金额'" :data="mData">
                  <template slot="image">
                    <div class="lf">
                      <img src="@/assets/images/icons/gl.png" />
                    </div>
                  </template>
                </sq-v-icon-text>
              </template>
              <template slot="mod-1">
                <div class="chart">
                  <sq-pie :data="pdata1"></sq-pie>
                </div>
              </template>
            </v-hor-mul-layout>
          </template>
          <template slot="right">
            <v-hor-mul-layout :widths="['30%', '68%']">
              <template slot="m-top">
                <sq-sub-title class="title" :title="'全球交易额'"></sq-sub-title>
              </template>
              <template slot="mod-0">
                <sq-v-icon-text class="fk" :title="'交易金额'" :data="mData">
                  <template slot="image">
                    <div class="lf">
                      <img src="@/assets/images/icons/gl.png" />
                    </div>
                  </template>
                </sq-v-icon-text>
              </template>
              <template slot="mod-1">
                <div class="chart">
                  <sq-pie :data="pdata2"></sq-pie>
                </div>
              </template>
            </v-hor-mul-layout>
          </template>
        </v-left-right-layout>
      </div>

      <div class="m3">
        <v-hor-mul-layout :widths="['15%', '82%']">
          <template slot="m-top">
            <sq-sub-title class="title" :title="'全球交易额'"></sq-sub-title>
          </template>
          <template slot="mod-0">
            <sq-v-icon-text class="fk" :title="'交易金额'" :data="mData">
              <template slot="image">
                <div class="lf">
                  <img src="@/assets/images/icons/gl.png" />
                </div>
              </template>
            </sq-v-icon-text>
          </template>
          <template slot="mod-1">
            <div class="chart">
              <sq-bar></sq-bar>
            </div>
          </template>
        </v-hor-mul-layout>
      </div>
    </div>
    
  </sq-card>
</template>
<script>
import SqCard from "@/components/Card/index.vue";
import SqTab from '@/components/Tab/index.vue'
import SqSubTitle from '@/components/sub-title/index.vue'
import SqIcontextMv from '@/components/icon-text/indexmv.vue'
import SqVIconText from '@/components/icon-text/vindex.vue'
import SqPie from '@/components/Charts/Pie.vue'
import SqBar from '@/components/Charts/Bar.vue'
import SqChooseDate from '@/components/ChooseDate/index.vue'

import VHorMulLayout from '@/views/components/hor-mul-layout.vue'
import VLeftRightLayout from '@/views/components/left-right-layout.vue'
export default {
  components: {
    SqCard,
    SqTab,
    SqSubTitle,
    SqIcontextMv,
    SqVIconText,
    SqPie,SqBar,
    SqChooseDate,
    VHorMulLayout,
    VLeftRightLayout
  },
  data() {
    return {

      cd1: { title: '应收账款', dw: '单位：元', val: 9327 },
      cd2: { title: '累计交易额', dw: '单位：元', val: 9327 },
      cd3: { title: '当日交易额', dw: '单位：元', val: 9327 },

      mData: { type: 'text', val: 500, dw: '万元' },

      pdata1: [
        { value: 1048, name: '亚洲', dw: '万元' },
        { value: 735, name: '欧洲', dw: '万元' },
        { value: 580, name: '北美洲', dw: '万元' },
        { value: 484, name: '南美洲', dw: '万元' },
      ],
      pdata2: [
        { value: 1048, name: '华北', dw: '万元' },
        { value: 735, name: '华南', dw: '万元' },
        { value: 580, name: '华西', dw: '万元' },
        { value: 484, name: '华东', dw: '万元' },
      ]
    }
  },
  mounted() {
  }
}
</script>
<style lang="scss" scoped>
.h-con{
  display: block;
  height: 100%;
}
.m1{
  height: 60px;
}
.m2{
  height: calc(50% - 34px);
}
.m3{
  height: calc(50% - 34px);
}
.chart{
  height: 100%;width: 100%;
}
.fk{
  margin: 8px 0 0 15px;
}

.rg-cons{
  display: flex;
  justify-content: space-between;
  .date-picker{
    width: 90px;
    margin-left: 5px;
  }
}

@media screen and (min-width: 2560px) {
  .rg-cons{
    .date-picker{
      width: 110px;
      margin-left: 15px;
    }
  }
  .m2{
    height: calc(50% - 55px);
  }
}
@media screen and (min-width: 3840px) {
  .rg-cons{
    .date-picker{
      width: 150px;
      margin-left: 15px;
    }
  }
  .m2{
    height: calc(50% - 64px);
  }
}
</style>
