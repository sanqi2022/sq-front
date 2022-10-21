<template>
  <sq-card height="auto" :title="'告警信息'">
    <template slot="right">
      <sq-choose-date></sq-choose-date>
    </template>
    <div class="card-body pabel-container">
      <div class="md">
        <sq-v-icon-text class="fk" :title="'物料低库存告警'" :data="stData">
          <template slot="image">
            <div class="lf">
              <img src="@/assets/images/icons/alert.png" />
            </div>
          </template>
        </sq-v-icon-text>
      </div>
      <div class="md">
        <sq-v-icon-text class="fk" :title="'库存积压告警'" :data="mdData">
          <template slot="image">
            <div class="lf">
              <img src="@/assets/images/icons/alert.png" />
            </div>
          </template>
        </sq-v-icon-text>
      </div>
      <div class="md" style="width: 65%;">
        <sq-table :columns="columns" :tableData="tableData">
          
        </sq-table>
      </div>
    </div>
  </sq-card>
</template>
<script>
import SqCard from "@/components/Card/index.vue";
import SqChooseDate from '@/components/ChooseDate/index.vue'
import SqVIconText from '@/components/icon-text/vindex.vue'
import SqTable from '@/components/table/index.vue'
export default {
  components: {
    SqCard,
    SqChooseDate,
    SqVIconText,
    SqTable
  },
  data() {
    return {
      stData: { type: 'text', val: 500, dw: '条' },
      mdData: { type: 'text', val: 500, dw: '条' },

      columns: [
        { name: '序号', prop: 'xh' },
        { name: '告警时间', prop: 'time' },
        { name: '告警类型', prop: 'type' },
        { name: '详情', prop: 'detail' },
      ],
      tableData: [
        { id: 1, xh: 1, time: '2022-04-05 12:00:00', type: '物料低库存告警', detail: 'PP材料剩余5箱' },
        { id: 2, xh: 2, time: '2022-04-05 12:00:00', type: '物料低库存告警', detail: 'PP材料剩余5箱' },
        { id: 3, xh: 3, time: '2022-04-05 12:00:00', type: '物料低库存告警', detail: 'PP材料剩余5箱' },
        { id: 4, xh: 4, time: '2022-04-05 12:00:00', type: '物料低库存告警', detail: 'PP材料剩余5箱' },
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.card-body{
  padding: 0 10px 10px 10px;
  flex-direction: row;
  justify-content: space-between;
  margin: 5px 0 0 0;
  .md{
    width: 16%;
  }
}
</style>
