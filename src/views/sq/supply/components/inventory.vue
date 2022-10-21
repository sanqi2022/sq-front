<template>
  <sq-card class="sep" height="76%" :title="'库存统计'">
    <template slot="right">
      <sq-choose-date></sq-choose-date>
    </template>
    <template slot="left">
      <input type="text" class="inp-text" />
    </template>
    <div class="card-body pabel-container">
      <div class="list-card">
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
      </div>

      <div class="ch-mod" style="margin-top: 10px;">
        <sq-sub-title class="title" :title="'原料库存情况'"></sq-sub-title>
        <div class="ch-ls">
          <sq-v-icon-text class="fk" :title="'库存量总数'" :data="mData">
            <template slot="image">
              <div class="lf">
                <img src="@/assets/images/icons/gl.png" />
              </div>
            </template>
          </sq-v-icon-text>
          <div class="chart">
            <sq-bar></sq-bar>
          </div>
        </div>
      </div>

      <div class="ch-mod">
        <sq-sub-title class="title" :title="'原料库存情况'"></sq-sub-title>
        <div class="ch-ls">
          <sq-v-icon-text class="fk" :title="'库存量总数'" :data="mData">
            <template slot="image">
              <div class="lf">
                <img src="@/assets/images/icons/gl.png" />
              </div>
            </template>
          </sq-v-icon-text>
          <div class="chart">
            <sq-bar></sq-bar>
          </div>
        </div>
      </div>

      <div class="ch-mod">
        <sq-sub-title class="title" :title="'原料库存情况'"></sq-sub-title>
        <div class="ch-ls">
          <sq-v-icon-text class="fk" :title="'库存量总数'" :data="mData">
            <template slot="image">
              <div class="lf">
                <img src="@/assets/images/icons/gl.png" />
              </div>
            </template>
          </sq-v-icon-text>
          <div class="chart">
            <sq-bar></sq-bar>
          </div>
        </div>
      </div>

      <div class="ch-mod">
        <sq-sub-title class="title" :title="'原料库存情况'"></sq-sub-title>
        <div class="ch-ls">
          <sq-v-icon-text class="fk" :title="'库存量总数'" :data="mData">
            <template slot="image">
              <div class="lf">
                <img src="@/assets/images/icons/gl.png" />
              </div>
            </template>
          </sq-v-icon-text>
          <div class="chart">
            <sq-bar></sq-bar>
          </div>
        </div>
      </div>

    </div>
  </sq-card>
</template>
<script>
import SqCard from "@/components/Card/index.vue";
import SqChooseDate from '@/components/ChooseDate/index.vue'
import SqIcontextMv from '@/components/icon-text/indexmv.vue'
import SqSubTitle from '@/components/sub-title/index.vue'
import SqVIconText from '@/components/icon-text/vindex.vue'
import SqBar from '@/components/Charts/Bar.vue'
export default {
  components: {
    SqCard,
    SqChooseDate,
    SqIcontextMv,
    SqSubTitle,
    SqVIconText,
    SqBar
  },
  data() {
    return {
      cd1: { title: '当日入库数量', dw: '单位：个', val: 9327 },
      cd2: { title: '当日出库数量', dw: '单位：千个', val: 9327 },
      cd3: { title: '库存损益', dw: '单位：元', val: 9327 },

      mData: { type: 'text', val: 1200, dw: '箱' },
    }
  }
}
</script>
<style lang="scss" scoped>
.card-body{
  display: block;
}
.list-card{
  display: flex;
  justify-content: space-between;
  .md{
    height: 55px;
    width: 30%;
  }
}
.ch-mod{
  height: calc(25% - 54px);
  margin: 37px 0 10px 0;
  .title{margin: 0 0 5px 0;}
  .ch-ls{
    display: flex;height: 100%;
    justify-content: space-between;
    .fk{
      width: 15%;
    }
    .chart{
      height: 100%;
      flex: 1;
    }
  }
}
@media screen and (min-width: 2560px) {
  .ch-mod{
    height: calc(25% - 60px);
  }
}
@media screen and (min-width: 3840px) {
  .ch-mod{
    height: calc(25% - 66px);
  }
}
</style>
