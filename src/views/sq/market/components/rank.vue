<template>
  <sq-card height="auto" :title="'销售排行'">
    <template slot="right">
      <sq-choose-date></sq-choose-date>
    </template>
    <div class="card-body">
      <div class="list-data">
        <div class="md">
          <sq-rank></sq-rank>
        </div>
        <div class="md">
          <sq-rank></sq-rank>
        </div>
        <div class="md">
          <sq-rank></sq-rank>
        </div>
        <div class="md">
          <sq-rank></sq-rank>
        </div>
      </div>
    </div>
  </sq-card>
</template>
<script>
import SqCard from "@/components/Card/index.vue";
import SqChooseDate from '@/components/ChooseDate/index.vue'
import SqSubTitle from '@/components/sub-title/index.vue'
import SqRank from '@/components/Rank/index.vue'
export default {
  components: {
    SqCard,
    SqChooseDate,
    SqSubTitle,
    SqRank
  }
}
</script>
<style lang="scss" scoped>
.list-data{
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  .md{
    width: 48%;
    margin: 10px 0;
  }
}
</style>