<template>
  <sq-card height="auto" :title="'采购'">
    <template slot="right">
      <sq-choose-date></sq-choose-date>
    </template>
    <div class="card-body pabel-container">
      <div class="ch-con">
        <div class="md">
          <sq-sub-title class="title" :title="'原料采购金额'"></sq-sub-title>
          <div class="chart">
            <sq-line :data="ldata1" :showtl="true" :showarea="false"></sq-line>
          </div>
        </div>
        <div class="md">
          <sq-sub-title class="title" :title="'供应商采购金额'"></sq-sub-title>
          <div class="chart">
            <sq-bar :xdata="bdata" :color="2"></sq-bar>
          </div>
        </div>
      </div>
      <div class="table-con">
        <sq-sub-title class="title" :title="'原料采购详情'"></sq-sub-title>
        <div class="filter">
          <sq-tab :tabData="tabs"></sq-tab>
          <input type="text" class="inp-text" />
        </div>
        <div class="table">
          <sq-table :columns="columns" :tableData="tableData">
          </sq-table>
        </div>
      </div>
    </div>
  </sq-card>
</template>
<script>
import SqCard from "@/components/Card/index.vue";
import SqChooseDate from '@/components/ChooseDate/index.vue'
import SqSubTitle from '@/components/sub-title/index.vue'
import SqTab from '@/components/Tab/index.vue'
import SqTable from '@/components/table/index.vue'
import SqLine from '@/components/Charts/Line.vue'
import SqBar from '@/components/Charts/Bar.vue'
export default {
  components: {
    SqCard,
    SqChooseDate,
    SqSubTitle,
    SqTab,
    SqTable,
    SqLine,
    SqBar
  },
  data() {
    return {
      tabs: [
        { id: 1, name: '物料名称', type: '1' },
        { id: 2, name: '物料名称', type: '2' },
        { id: 3, name: '物料名称', type: '3' },
        { id: 4, name: '物料名称', type: '4' },
      ],
      columns: [
        { name: '序号', prop: 'xh' },
        { name: '采购物品', prop: 'name' },
        { name: '数量', prop: 'count' },
        { name: '金额（万元）', prop: 'money' },
        { name: '预计到货时间', prop: 'time' },
        { name: '厂商', prop: 'company' },
        { name: '到货状态', prop: 'status' },
      ],
      tableData: [
        { id: 1, xh: 1, name: '物品名称物品名称', count: '150箱', money: '11000', time: '2022年5月18日', company: '山东日照纺织有限公司', status: '正常' },
        { id: 2, xh: 2, name: '物品名称物品名称', count: '150箱', money: '11000', time: '2022年5月18日', company: '山东日照纺织有限公司', status: '正常' },
        { id: 3, xh: 3, name: '物品名称物品名称', count: '150箱', money: '11000', time: '2022年5月18日', company: '山东日照纺织有限公司', status: '正常' },
        { id: 4, xh: 4, name: '物品名称物品名称', count: '150箱', money: '11000', time: '2022年5月18日', company: '山东日照纺织有限公司', status: '正常' },
        { id: 5, xh: 5, name: '物品名称物品名称', count: '150箱', money: '11000', time: '2022年5月18日', company: '山东日照纺织有限公司', status: '正常' },
        { id: 6, xh: 6, name: '物品名称物品名称', count: '150箱', money: '11000', time: '2022年5月18日', company: '山东日照纺织有限公司', status: '正常' },
        { id: 7, xh: 7, name: '物品名称物品名称', count: '150箱', money: '11000', time: '2022年5月18日', company: '山东日照纺织有限公司', status: '正常' },
        { id: 8, xh: 8, name: '物品名称物品名称', count: '150箱', money: '11000', time: '2022年5月18日', company: '山东日照纺织有限公司', status: '正常' },
        { id: 9, xh: 9, name: '物品名称物品名称', count: '150箱', money: '11000', time: '2022年5月18日', company: '山东日照纺织有限公司', status: '正常' },
        { id: 10, xh: 10, name: '物品名称物品名称', count: '150箱', money: '11000', time: '2022年5月18日', company: '山东日照纺织有限公司', status: '正常' },
      ],

      ldata1: [
        { name: '原料1', data: [] },
        { name: '原料2', data: [] },
        { name: '原料3', data: [] },
        { name: '原料4', data: [] },
      ],

      bdata: ['供应商1', '供应商2', '供应商3', '供应商4']
    }
  }
}
</script>
<style lang="scss" scoped>
.ch-con{
  display: flex;height: 150px;
  justify-content: space-between;
  .md{
    width: 48%;height: 100%;
    .chart{
      flex: 1;height: calc(100% - 30px);
    }
  }
}
.table-con{
  .filter{
    display: flex;margin: 10px 0 0 0;
    justify-content: space-between;
  }
  .table{
    margin: 10px 0 10px 0;
  }
}
</style>
