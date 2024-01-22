<template>
  <div class="home">
    <VantTopTitle></VantTopTitle>

    <div class="banner">
      <img src="../../assets//img//home/banner.webp" alt="">
    </div>

    <VantLocation></VantLocation>

    <cateScroll></cateScroll>
    
    <homeContent></homeContent>

  </div>
</template>

<script setup>
  import VantTopTitle from "./cnps/vant-top-title.vue"
  import VantLocation from "./cnps/vant-location.vue"
  import cateScroll from "./cnps/cate-scroll.vue";
  import homeContent from "./cnps/home-content.vue";

  import useHomeStore from "@/stores/modules/home"


  // 创建homeStore实例
  const homeStore = useHomeStore()
  // 请求获取热门建议数据
  homeStore.getHotSuggestsAction()
  // 获取分类数据
  homeStore.getCategoriesAction()
  // 获取房源列表数据
  homeStore.getHouseListAction()
</script>

<style lang='less' scoped>
  .banner {
    img {
      display: block;
      width: 100%;
    }
  }
</style>
