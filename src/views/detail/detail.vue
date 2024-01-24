<template>
  <div class='detail'>
    <!-- 导航栏 -->
    <van-nav-bar
      title="房间详情"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    >
      <template #right>
        <van-icon name="search" size="18" />
      </template>
    </van-nav-bar>

    <!-- 轮播图 -->
    <div class="swipe" v-if="mainPart">
      <detail-swipe :swipeData="mainPart.topModule.housePicture.housePics"></detail-swipe>
    </div>

    <!-- top详细信息 -->
    <div class="info" v-if="mainPart">
      <detailTopinfos :topinfos="mainPart.topModule"></detailTopinfos>
    </div>
  </div>
</template>

<script setup>
  import detailSwipe from "./cpns/detail-swipe.vue"
  import detailTopinfos from "./cpns/detail-topinfos.vue";
  import { computed, ref } from "vue";
  import { useRoute, useRouter } from "vue-router"
  import { getDetailInfos } from "@/services"

  const router = useRouter()
  const route = useRoute()

  // 获取房间详细信息数据
  const detailInfos = ref({})
  const mainPart = computed(() => detailInfos?.value?.mainPart)
  // const currentHouse = computed(() => detailInfos?.value?.currentHouse)

  // 发送请求获取数据
  getDetailInfos(route.params.id).then(res => {
    detailInfos.value = res?.data
    // console.log(mainPart.value.topModule.housePicture)
  })

  // 点击左侧返回按钮
  const onClickLeft = () => {
    router.back()
  }
  
</script>

<style lang='less' scoped>
  .detail {
    --van-nav-bar-arrow-size: 16px;
    --van-font-size-md: 16px;
    --van-nav-bar-title-text-color: var(--primary-color);
    --van-nav-bar-title-font-size: 16px
  }
</style>