<template>
  <div class="rank-con">
    <sq-sub-title class="title" :title="'地区销量排名'"></sq-sub-title>
    <div class="rank-list">
      <div class="md">
        <div class="num">
          <span>1</span>
          <i class="el-icon-caret-right"></i>
        </div>
        <div class="content">
          <span class="name">地区名称</span>
          <span class="val">937</span>
          <span class="dw">个</span>
        </div>
      </div>
      <div class="md green">
        <div class="num">
          <span>2</span>
          <i class="el-icon-caret-right"></i>
        </div>
        <div class="content">
          <span class="name">地区名称</span>
          <span class="val">937</span>
          <span class="dw">个</span>
        </div>
      </div>
      <div class="md green">
        <div class="num">
          <span>3</span>
          <i class="el-icon-caret-right"></i>
        </div>
        <div class="content">
          <span class="name">地区名称</span>
          <span class="val">937</span>
          <span class="dw">个</span>
        </div>
      </div>
      <div class="md blue">
        <div class="num">
          <span>4</span>
          <i class="el-icon-caret-right"></i>
        </div>
        <div class="content">
          <span class="name">地区名称</span>
          <span class="val">937</span>
          <span class="dw">个</span>
        </div>
      </div>
      <div class="md blue">
        <div class="num">
          <span>5</span>
          <i class="el-icon-caret-right"></i>
        </div>
        <div class="content">
          <span class="name">地区名称</span>
          <span class="val">937</span>
          <span class="dw">个</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import SqSubTitle from '@/components/sub-title/index.vue'
export default {
  components: {
    SqSubTitle
  }
}
</script>
<style lang="scss" scoped>
.rank-con{
  .rank-list{
    margin: 10px 0 0 0;
    .md{
      display: flex;
      justify-content: space-between;
      align-items: center;margin: 0 0 8px 0;
      .num{
        border: solid 1px #F1B34C;
        width: 30px;height: 30px;
        text-align: center;line-height: 30px;
        font-family: 'Agency FB';color: #F1B34C;font-size: 22px;
        position: relative;
        i{
          position: absolute;right: 0;bottom: 0;transform: rotateZ(45deg);
        }
      }
      .content{
        flex: 1;margin: 0 0 0 10px;height: 30px;line-height: 30px;
        border-bottom: dotted 1px #7CB0C9;color: #fff;
        display: flex;
        justify-content: space-between;
        
        .name{font-size: 16px;color: #BFDFFF;}
        .val{font-size: 28px;color: #F1B34C;font-family: 'Agency FB';flex: 1;text-align: right;}
        .dw{font-size: 16px;color: #BFDFFF;}
      }

      &.green{
        .num{
          border: solid 1px #34E7C1;
          color: #34E7C1;
        }
        .content .val{color: #34E7C1;}
      }
      &.blue{
        .num{
          border: solid 1px #00D1FF;
          color: #00D1FF;
        }
        .content .val{color: #00D1FF;}
      }
    }
  }
}
</style>
