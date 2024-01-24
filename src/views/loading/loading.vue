<template>
  <div class='loading' v-if="isShowLoading">
    <div class="bg">
      <img src="../../assets/img/home/full-screen-loading.gif" alt="">
    </div>
  </div>
</template>

<script setup>
  import useMainStore from "@/stores/modules/main";
  import { storeToRefs } from "pinia";

  const mainStore = useMainStore()
  const { isShowLoading } = storeToRefs(mainStore)

  
</script>

<style lang='less' scoped>
  .loading {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(115, 115, 115, 0.6);
    .bg {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 104px;
      height: 104px;
      background: url("../../assets/img/home/loading-bg.png") 0 0 / 100% 100%;
      img {
        display: block;
        width: 70px;
        height: 70px;
        margin-bottom: 5px;
      }
    }
  }
</style>