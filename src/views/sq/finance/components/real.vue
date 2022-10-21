<template>
  <sq-card height="20%" :title="'实时基准利率'">
    <div class="card-body pabel-container">
      <div class="chart">
        <sq-bar></sq-bar>
      </div>
    </div>
  </sq-card>
</template>
<script>
import SqCard from "@/components/Card/index.vue";
import SqBar from '@/components/Charts/Bar.vue'
export default {
  components: {
    SqCard, SqBar
  }
}
</script>
<style lang="scss" scoped>
.chart{
  height: calc(100% - 10px);width: 100%;
}
@media screen and (min-width: 2560px) {
  .chart{
    height: calc(100% - 30px);
  }
}
@media screen and (min-width: 3840px) {
  .chart{
    height: calc(100% - 50px);
  }
}
</style>
