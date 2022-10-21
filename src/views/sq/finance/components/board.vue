<template>
  <sq-card height="60%" class="sep" :title="'实时基准利率'">
    <div class="card-body pabel-container">
      <div class="cards">
        <div class="md">
          <sq-sub-title class="title" :title="'美元汇率'"></sq-sub-title>
          <div class="chart">
            <sq-line></sq-line>
          </div>
        </div>
        <div class="md">
          <sq-sub-title class="title" :title="'欧元汇率'"></sq-sub-title>
          <div class="chart">
            <sq-line></sq-line>
          </div>
        </div>
      </div>

      <div class="cards">
        <div class="md">
          <sq-sub-title class="title" :title="'日元汇率'"></sq-sub-title>
          <div class="chart">
            <sq-line></sq-line>
          </div>
        </div>
        <div class="md">
          <sq-sub-title class="title" :title="'韩元汇率'"></sq-sub-title>
          <div class="chart">
            <sq-line></sq-line>
          </div>
        </div>
      </div>

      <div class="cards">
        <div class="md">
          <sq-sub-title class="title" :title="'英镑汇率'"></sq-sub-title>
          <div class="chart">
            <sq-line></sq-line>
          </div>
        </div>
        <div class="md">
          <sq-sub-title class="title" :title="'迪拉姆汇率'"></sq-sub-title>
          <div class="chart">
            <sq-line></sq-line>
          </div>
        </div>
      </div>


    </div>
  </sq-card>
</template>
<script>
import SqCard from "@/components/Card/index.vue";
import SqSubTitle from '@/components/sub-title/index.vue'
import SqLine from '@/components/Charts/Line.vue'
export default {
  components: {
    SqCard,
    SqSubTitle,
    SqLine
  }
}
</script>
<style lang="scss" scoped>
.cards{
  height: calc(33% - 13px);
  display: flex;
  flex-wrap: wrap;margin: 0 0 15px 0;
  justify-content: space-between;
  .title{
    width: 100%;margin: 0 0 10px 0;
  }
  .md{
    width: 49%;height: 100%;
  }
}
.chart{
  flex: 1;
  height: calc(100% - 40px);width: 100%;
}
@media screen and (min-width: 2560px) {
  .chart{
    height: calc(100% - 60px);
  }
}
@media screen and (min-width: 3840px) {
  .chart{
    height: calc(100% - 80px);
  }
}
</style>
