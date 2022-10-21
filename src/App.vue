<template>
  <div id="app">
    <!-- <Header :height="headerHeight + '%'" :title="title" ref="header" /> -->
    
    <div v-if="curPath != '/login'" style="width:100%;height:100%;">
      <sq-header-visitor v-if="curPath == '/visitor'"></sq-header-visitor> <!--  :showMenu="curPath != '/visitor'" -->
      <sq-header v-if="curPath != '/visitor'"></sq-header>

      <router-view class="router-view-class" />

      <Map3d v-show="curPath != '' && curPath != '/sq/data'" :curPath="curPath"></Map3d>
      <map-dt v-show="curPath != '' && curPath == '/sq/data'"></map-dt>
    </div>
    <router-view v-else class="router-view-class" />
  </div>
</template>

<script>
// 引入setting.json
import setting from "@/setting.json";
import Header from "@/components/techStyle/public/Header.vue";
import SqHeader from '@/components/Header/index.vue'
import SqHeaderVisitor from "@/components/Header/index-visitor.vue";
import Map3d from '@/views/components/3d.vue'
import MapDt from '@/views/components/map.vue'
export default {
  components: {
    Header,
    SqHeader,
    SqHeaderVisitor,
    Map3d,
    MapDt
  },
  watch: {
    '$route'(to, from) {
      this.curPath = to.path
      console.log('path===' + this.curPath)
    }
  },
  data() {
    return {
      power: "",
      // 头部高度
      headerHeight: 6,
      title: "",
      curPath: '',

      isPlaying: false
    };
  },
  mounted() {
    this.title = setting.title;
    this.init();
    window.addEventListener('message', (message) => {
      if (message.data == 'Prev') {
        this.isPlaying = true
        // this.$router.push('/sq/prev')

      } else if (message.data == 'PrevStop') {
        this.isPlaying = false
      } else if (message.data == 'goVisitor') {
        this.$router.push('/visitor')
      }
    })
  },
  methods: {
    init() {
      if (setting.testing) {
        document.body.style.width =
          setting.powerList[setting.power].split("*")[0] + "px";
        document.body.style.height =
          setting.powerList[setting.power].split("*")[1] + "px";
      }
    },
  },
};
</script>


<style lang="scss">
#app {
  // width: 100%;
  // height: 100%;
  width: 100vw;
  height: 100vh;
  position: relative;
  background-image: url("@/assets/images/public/background.png");
  .router-view-class {
    width: 100%;
    height: 100%;
  }
}
  .left-bg{
    background: linear-gradient(to right, #002040, #00204000);
    position: absolute;left: 0;top: 0;width: 600px;height: 100%;
    z-index: 5;
  }
  .right-bg{
    background: linear-gradient(to left, #002040, #00204000);
    position: absolute;right: 0;top: 0;width: 600px;height: 100%;
    z-index: 5;
  }
</style>
