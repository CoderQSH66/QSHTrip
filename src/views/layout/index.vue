<template>
  <div class="index">

    <div class="top">
      <RouterView></RouterView>
    </div>

    <VantTabBar></VantTabBar>
    
  </div>
</template>

<script setup>
  import VantTabBar from "@/components/tabbar/vant-tab-bar.vue"

</script>

<style lang='less' scoped>
  .top {
    height: calc(100vh - 50px);
    overflow-y: scroll;
  }
</style>
