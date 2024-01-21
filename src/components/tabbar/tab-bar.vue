<template>
  <div class="tab-bar">
    <template v-for="(item, index) of tabBarData" :key="index">
      <div class="tab-bar-item" 
          :class="{active: currentIndex === index}" 
          @click="clickActive(index, item.path)">
        <img v-if="currentIndex === index" :src="getImgUrl(item.imgsrc_active)" alt="">
        <img v-else :src="getImgUrl(item.imgsrc)" alt="">
        <span>{{ item.text }}</span>
      </div>
    </template>
  </div>
</template>

<script setup>
  import getImgUrl from "@/utils/getImgUrl"
  import tabBarData from "@/assets/data/tabBarData"
  import { ref } from "vue";
  import { useRouter } from "vue-router";
  
  const router = useRouter()
  const currentIndex = ref(0)
  function clickActive(index, path) {
    currentIndex.value = index
    router.push(path)
  }
  tabBarData.forEach((item, index) => {
    if (location.hash.includes(item.path)) {
      currentIndex.value = index
    }
  })
</script>

<style lang='less' scoped>
  .tab-bar {
    display: flex;
    justify-content: space-between;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    border-top: 2px solid #f3f3ff;
    padding-bottom: 10px;
    height: 46px;
    .tab-bar-item {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      flex: 1;
      font-size: 14px;
      img {
        display: block;
        width: 30px;
      } 
    }
    .active {
        color: var(--primary-color);
      }
  }
</style>
