<template>
  <div class="cir-buttons">
    <div class="md">
      <img src="@/assets/images/public/cirbut/sek.png" class="bg" />
      <div class="txt1">一键还原</div>
      <div class="txt2">全部产品</div>
    </div>
    <div class="md">
      <img src="@/assets/images/public/cirbut/btn.png" class="bg" />
      <div class="txt1 fb"><b>1</b><span>/2</span></div>
      <div class="txt2 fb">医疗器械</div>
    </div>
    <div class="md">
      <img src="@/assets/images/public/cirbut/btn.png" class="bg" />
      <div class="txt1 fb"><b>1</b><span>/2</span></div>
      <div class="txt2 fb">健康护理</div>
    </div>
    <div class="md">
      <img src="@/assets/images/public/cirbut/btn.png" class="bg" />
      <div class="txt1 fb"><b>1</b><span>/2</span></div>
      <div class="txt2 fb">医用卫生</div>
    </div>
    <div class="md">
      <img src="@/assets/images/public/cirbut/btn.png" class="bg" />
      <div class="txt1 fb"><b>1</b><span>/2</span></div>
      <div class="txt2 fb">清洁卫生</div>
    </div>
    <div class="md">
      <img src="@/assets/images/public/cirbut/btn.png" class="bg" />
      <div class="txt1 fb"><b>1</b><span>/2</span></div>
      <div class="txt2 fb">日常民用</div>
    </div>
    <div class="md">
      <img src="@/assets/images/public/cirbut/btn.png" class="bg" />
      <div class="txt1 fb"><b>1</b><span>/2</span></div>
      <div class="txt2 fb">特种劳保</div>
    </div>
    <div class="md">
      <img src="@/assets/images/public/cirbut/btn.png" class="bg" />
      <div class="txt1 fb"><b>1</b><span>/2</span></div>
      <div class="txt2 fb">工业防护</div>
    </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="scss" scoped>
.cir-buttons{
  position: absolute;
  bottom: 0;height: 90px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  z-index: 9;

  .md{
    position: relative;
    width: 109px;height: 100%;
    .bg{
      position: absolute;bottom: 0;
      height: 100px;width: 109px;
    }
    .txt2{
      position: absolute;bottom: 0;width: 109px;
      text-align: center;font-size: 14px;color: #FFB973;
      font-family: 'HY';text-shadow: 0 0 4px #000000;
      &.fb{color: #BFDFFF;}
    }
    .txt1{
      position: absolute;top: 10px;font-size: 14px;color: #FFB973;
      font-family: 'Agency FB';text-shadow: 0 0 4px #000000;width: 40px;
      left: 40px;
      b{
        color: #26C9FF;font-size: 28px;
      }
      span{
        color: #fff;font-size: 28px;
      }
      &.fb{top:15px;}
    }
  }
}
</style>
