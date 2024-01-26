<template>
  <div class="home" ref="homeRef"> 
    <VantTopTitle></VantTopTitle>

    <div class="banner">
      <img src="../../assets//img//home/banner.webp" alt="">
    </div>

    <VantLocation></VantLocation>

    <cateScroll></cateScroll>
    
    <homeContent></homeContent>
    <button @click="onMoreHouse">加载更多</button>

    <div class="seacrch-box section-pad" v-if="isShowSearch">
      <homeSearchBox></homeSearchBox>
    </div>


  </div>
</template>

<script setup>
  import VantTopTitle from "./cnps/vant-top-title.vue"
  import VantLocation from "./cnps/vant-location.vue"
  import cateScroll from "./cnps/cate-scroll.vue";
  import homeContent from "./cnps/home-content.vue";
  import homeSearchBox from "./cnps/home-search-box.vue";
  import { computed, onActivated, ref, watch } from "vue";

  import useHomeStore from "@/stores/modules/home"
  import useMainStore from "@/stores/modules/main";
  import useScroll from "@/hooks/useScroll"

  // 创建homeStore实例
  const homeStore = useHomeStore()
  const mainStore = useMainStore()
  // 请求获取热门建议数据
  homeStore.getHotSuggestsAction()
  // 获取分类数据
  homeStore.getCategoriesAction()
  // 获取房源列表数据
  homeStore.getHouseListAction()

  // 点击加载更多
  const onMoreHouse = () => {
    homeStore.getHouseListAction()
  }

  // 监听滚动
  const {isScrollBottom, scrollTop} = useScroll(".home")
  watch(isScrollBottom, (newValue) => {
    if (newValue) {
      homeStore.getHouseListAction().then(res => {
      isScrollBottom.value = false
      })
    }
  })

  // 通过滚动位置来展示隐藏搜索框
  const isShowSearch = computed(() => {
    return scrollTop.value > 200
  })

  // 页面切换保留滚动位置
  const homeRef = ref()
  onActivated(() => {
    homeRef.value?.scrollTo({
      top: scrollTop.value 
    })
  })
  
</script>

<style lang='less' scoped>
  .home {
    height: calc(100vh - 50px);
    overflow: scroll;
    .seacrch-box {
      position: fixed;
      z-index: 99;
      top: 0;
      left: 0;
      right: 0;
      height: 45px;
      background-color: #fff;
    }


    .banner {
      img {
        display: block;
        width: 100%;
      }
    }
  }
 
</style>
