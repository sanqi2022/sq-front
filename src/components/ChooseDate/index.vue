<template>
  <div class="rg-cons" v-if="curtab">
    <sq-tab :tabData="tabs" v-model="curtab" @eventChange="initTableDate"></sq-tab>
    <el-date-picker size="mini" class="date-picker" :clearable="false" v-model="chooseDate" :type="curtab.type"
      placeholder="请选择" :format="curtab.format" :value-format="curtab.format">
    </el-date-picker>
  </div>
</template>
<script>
import SqTab from "@/components/Tab/index.vue";
export default {
  components: {
    SqTab,
  },
  data() {
    return {
      tabs: [
        // { id: 1, name: "日", type: "date",format:"yyyy-MM-dd"},
        { id: 2, name: "月", type: "month",format:"yyyy-MM"},
        { id: 3, name: "年", type: "year",format:"yyyy"},
      ],
      curtab: null,
      datepickerType: "day",
      chooseDate: "",
    };
  },
  mounted() {
    this.curtab = this.tabs[0];
  },
  methods: {
    initTableDate() {
      this.$emit("eventChange");
      this.chooseDate = "";
    },
  },
  watch: {
    chooseDate() {
      this.$emit("setDate", this.chooseDate);
    },
  },
};
</script>
<style lang="scss" scoped>
.rg-cons {
  display: flex;
  justify-content: space-between;

  .date-picker {
    width: 90px;
    margin-left: 5px;
  }
}

@media screen and (min-width: 2560px) {
  .rg-cons {
    .date-picker {
      width: 110px;
      margin-left: 15px;
    }
  }
}

@media screen and (min-width: 3840px) {
  .rg-cons {
    .date-picker {
      width: 150px;
      margin-left: 15px;
    }
  }
}
</style>
