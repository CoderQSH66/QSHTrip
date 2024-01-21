<template>
  <div class="location">
    <div class="city">{{ cityStore.cityInfo.cityName }}</div>
    <div class="position">
      <span>我的位置</span>
      <img src="@/assets/img/home/icon_location.png" alt="">
    </div>
  </div>
</template>

<script setup>
  import useCityStore from "@/stores/modules/city"
  const cityStore = useCityStore()
</script>

<style lang='less' scoped>
  .location {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 15px;
    height: 30px;
    font-size: 13px;
    color: var(--primary-color);
    .position {
      display: flex;
      span {
        display: flex;
        align-items: center;
      }
      img {
        width: 20px;
        margin: 0 5px;
      }
    }
    
  }
</style>
