<template>
  <sq-card height="80%" :title="'客户统计'">
    <template slot="right">
      <sq-choose-date></sq-choose-date>
    </template>
    <div class="card-body pabel-container">
      <div class="list-ch">
        <div class="md">
          <sq-sub-title class="title" :title="'客户级别占比'"></sq-sub-title>
          <div class="ch-md">
            <sq-v-icon-text class="fk" :title="'客户总数'" :data="mData">
              <template slot="image">
                <div class="lf">
                  <img src="@/assets/images/icons/house.png" />
                </div>
              </template>
            </sq-v-icon-text>
            <div class="chart">
              <sq-pie></sq-pie>
            </div>
          </div>
        </div>
        <div class="md">
          <sq-sub-title class="title" :title="'活跃客户占比'"></sq-sub-title>
          <div class="ch-md">
            <sq-v-icon-text class="fk" :title="'活跃客户'" :data="mData">
              <template slot="image">
                <div class="lf">
                  <img src="@/assets/images/icons/tv.png" />
                </div>
              </template>
            </sq-v-icon-text>
            <div class="chart">
              <sq-pie :data="pdata"></sq-pie>
            </div>
          </div>
        </div>
      </div>

      <div class="ch-con" style="margin-top: 40px;height:30%;">
        <sq-sub-title class="title" :title="'客户成交统计'"></sq-sub-title>
        <div class="chart">
          <sq-bar></sq-bar>
        </div>
      </div>

      <div class="ch-con" style="height: 30%;">
        <div class="ls-ch">
          <div class="md">
            <sq-sub-title class="title" :title="'全球客户分布'"></sq-sub-title>
            <div class="chart">
              <sq-mg-pie></sq-mg-pie>
            </div>
          </div>
          <div class="md">
            <sq-sub-title class="title" :title="'全国客户分布'"></sq-sub-title>
            <div class="chart">
              <sq-mg-pie></sq-mg-pie>
            </div>
          </div>
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
import SqChooseDate from '@/components/ChooseDate/index.vue'
import SqSubTitle from '@/components/sub-title/index.vue'
import SqVIconText from '@/components/icon-text/vindex.vue'
import SqCircleText from '@/components/circle-text/index.vue'
import SqPie from '@/components/Charts/Pie.vue'
import SqBar from '@/components/Charts/Bar.vue'
import SqMgPie from '@/components/Charts/MgPie.vue'
export default {
  components: {
    SqCard,
    SqChooseDate,
    SqSubTitle,
    SqVIconText,
    SqCircleText,
    SqPie, SqBar, SqMgPie
  },
  data() {
    return {
      mData: { type: 'text', val: 500, dw: '个' },

      pdata: [
        { value: 1048, name: '近3个月订购', dw: '个' },
        { value: 735, name: '进半年订购', dw: '个' },
        { value: 580, name: '近一年订购', dw: '个' },
        { value: 484, name: '超一年未购', dw: '个' },
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.card-body{
  display: block;
}
.list-ch{
  display: flex;height: 20%;
  justify-content: space-between;
  .md{
    width: 48%;height: 100%;
    .ch-md{
      display: flex;margin: 8px 0 0 0;
      justify-content: space-between;height: 100%;
      .fk{
        width: 25%;
      }
      .chart{
        flex: 1;
        height: 100%;
      }
    }
  }
}
.ch-con{
  height: 20%;
  .chart{
    width: 100%;
    height: calc(100% - 40px);
  }
  .ls-ch{
    height: 100%;display: flex;
    justify-content: space-between;
    .md{
      width: 48%;height: 100%;
    }
  }
}
.ls-list{
  display: flex;margin: 10px 0 0 0;
  justify-content: space-between;
  .md{height: 100%;
  }
}
</style>
