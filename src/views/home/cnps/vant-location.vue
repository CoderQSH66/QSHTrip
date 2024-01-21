<template>
  <div class="location">
    <van-nav-bar :left-text="cityStore.cityInfo.cityName" @click-left="onClickLeft">
      <template #right>
        <div class="positon">
          <span>我的位置</span>
          <img src="@/assets/img/home/icon_location.png" alt="">
        </div>
      </template>
    </van-nav-bar>
  </div>
</template>

<script setup>
  import { useRouter } from 'vue-router';
  import useCityStore from "@/stores/modules/city"

  const cityStore = useCityStore()
  const router = useRouter()
  function onClickLeft(event) {
    router.push("/city")
  }

</script>

<style lang='less' scoped>
  .location {
    :deep(.van-nav-bar__text) {
      color: var(--primary-color);
    }
    :deep(.van-nav-bar__right) {
      color: var(--primary-color);
      img {
        width: 20px;
        vertical-align: top;
        margin: 0 5px;
      }
    }
  }
</style>
