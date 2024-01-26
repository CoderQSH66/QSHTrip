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
      <detailTopinfos name="描述" :ref="getSectionRef" :topinfos="mainPart.topModule"></detailTopinfos>
    </div>

    <!-- 房屋设施 -->
    <div class="device" v-if="mainPart">
      <detailHouse name="房屋" :ref="getSectionRef" :houseFacility="mainPart.dynamicModule.facilityModule.houseFacility"></detailHouse>
    </div>

    <!-- 房东介绍 -->
    <div class="landload" v-if="mainPart">
      <detailLandload name="房东" :ref="getSectionRef" :landload="mainPart.dynamicModule.landlordModule"></detailLandload>
    </div>

    <!-- 用户评论 -->
    <div class="comment" v-if="mainPart">
      <detailComment name="评论" :ref="getSectionRef" :hot-comment="mainPart.dynamicModule.commentModule"></detailComment>
    </div>

    <!-- 用户须知 -->
    <div class="rules" v-if="mainPart">
      <detailRules name="须知" :ref="getSectionRef" :rules="mainPart.dynamicModule.rulesModule"></detailRules>
    </div>

    <!-- 周边位置 -->
    <div class="map" v-if="mainPart">
      <detailMap name="位置" :ref="getSectionRef" :loaction="mainPart.dynamicModule.positionModule"></detailMap>
    </div>

    <!-- 价格说明 -->
    <detailIntrolduction v-if="mainPart" :introl="mainPart.introductionModule"></detailIntrolduction>
    <!-- 顶部导航control -->
    <detailTabControl  ref="tabControl" v-if="isShowTabCtrol" @onClickTab="onClickTab" :title="['描述','房屋','房东','评论','须知','位置']"></detailTabControl>
  </div>
</template>

<script setup>
  import detailSwipe from "./cpns/detail-swipe.vue"
  import detailTopinfos from "./cpns/detail-topinfos.vue";
  import detailLandload from "./cpns/detail-landload.vue";
  import detailComment from "./cpns/detail-comment.vue";
  import detailHouse from "./cpns/detail-house.vue";
  import detailRules from "./cpns/detail-rules.vue"
  import detailMap from "./cpns/detail-map.vue"
  import detailTabControl from "./cpns/detail-tab-control.vue"
  import detailIntrolduction from "./cpns/detail-introlduction.vue";
  import { computed, ref, watch } from "vue";
  import { useRoute, useRouter } from "vue-router"
  import { getDetailInfos } from "@/services"
  import useScroll from "@/hooks/useScroll";

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
    router.push("/home")
  }
  
  // 获取滚动scrollTop
  const { scrollTop } = useScroll()
  const isShowTabCtrol = computed(() => {
    return scrollTop.value > 300
  })

  // 点击tabcrol进行跳转
  const eleList = []
  const getSectionRef = (value) => {
    if (!value) return
    eleList.push(value.$el)
  }
  
  let isClick =false
  let distance = 0
  const onClickTab = (index) => {
    isClick = true
    distance = eleList[index].offsetTop - 46
    window.scrollTo({
      top: distance ,
      behavior: "smooth"
    })
  }

  // 侦听页面滚动
  const tabControl = ref()
  watch(() => scrollTop.value, (newValue) => {
    if (newValue === distance) isClick = false
    if (isClick) return
    let currentIndex = eleList.length - 1
    try {
      eleList.forEach((item, index) => {
        if (item.offsetTop > newValue + 46) {
          currentIndex = index - 1
          throw new Error(); //结束循环
        }
      })
    } catch(e) {
      tabControl.value?.setIndex(currentIndex)
      // console.log(currentIndex)
    }
  })


</script>

<style lang='less' scoped>
  .detail {
    --van-nav-bar-arrow-size: 16px;
    --van-font-size-md: 16px;
    --van-nav-bar-title-text-color: var(--primary-color);
    --van-nav-bar-title-font-size: 16px
  }
</style>