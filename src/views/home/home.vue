<template>
  <div class="home">
    <!-- <TopTitle></TopTitle> -->
    <VantTopTitle></VantTopTitle>

    <div class="banner">
      <img src="../../assets//img//home/banner.webp" alt="">
    </div>

    <!-- <Location></Location> -->
    <VantLocation></VantLocation>
    
  </div>
</template>

<script setup>
  // import TopTitle from "./cnps/top-title.vue"
  import VantTopTitle from "./cnps/vant-top-title.vue"
  // import Location from "./cnps/location.vue";
  import VantLocation from "./cnps/vant-location.vue"
</script>

<style lang='less' scoped>
  .banner {
    img {
      display: block;
      width: 100%;
    }
  }
</style>
