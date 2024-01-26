<template>
  <div class="index">

    <div class="top">
      <RouterView v-slot="{ Component }">
        <KeepAlive includes="home">
          <component :is="Component"></component>
        </KeepAlive>
      </RouterView>
    </div>
    
    <VantTabBar></VantTabBar>
    
  </div>
</template>
<script>
  export default {name: "layout"}
</script>
<script setup>
  import VantTabBar from "@/components/tabbar/vant-tab-bar.vue"

</script>

<style lang='less' scoped>
  .top {
    // height: calc(100vh - 50px);
    // overflow: scroll;
  }
</style>
