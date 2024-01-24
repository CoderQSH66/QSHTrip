<template>
  <div class='detail-swipe'>

    <van-swipe :autoplay="2000" lazy-render>
      <van-swipe-item v-for="(item, index) in swipeData" :key="index">
        <img :src="item.url" />
      </van-swipe-item>
      <template #indicator="{ active, total }">
        <div class="indicator">
          <template v-for="(value, key, index) of swipeDataOb" :key="index">
            <div class="item" :class="{active: swipeData[active]?.enumPictureCategory == key}">
              <span>{{ formatTitle(value[0].title) }}</span>
              <span v-if="swipeData[active]?.enumPictureCategory == key">{{ getIndex(active, value)}}/{{ value.length }}</span>
            </div>
          </template>
        </div>
      </template>
    </van-swipe>

  </div>
</template>

<script setup>
  // import { ref } from 'vue';

  // // 记录当前所在active
  // let activeOnclick = ref(0)
  // 接收轮播数据
  const { swipeData } = defineProps({
    swipeData: Array,
    default: () => []
  })
  console.log(swipeData)

  // 将轮播数组转换为对象，相同类型为一个key，item数组为value
  const swipeDataOb = {}
  for (const item of swipeData) {
    let enumPicCateList = swipeDataOb[item.enumPictureCategory]
    if (!enumPicCateList) {
      enumPicCateList = []
      swipeDataOb[item.enumPictureCategory] = enumPicCateList
    }
    enumPicCateList.push(item)
  }
  console.log(swipeDataOb)

  // 处理title格式
  const titleReg = /【(.*?)】/i
  const formatTitle = (title) => {
    // return title.replace('：', "").replace("【", "").replace("】", "")
    return titleReg.exec(title)[1]
  }

  // // 点击切换acive
  // const onclickItem = (value) => {
  //   activeOnclick.value = swipeData.findIndex(item => {
  //     return item.url === value[0].url
  //   })
  // }

  // // 自动切换
  // const onChange = (index) => {
  //   activeOnclick.value = index
  //   index = activeOnclick.value
  // }

  // 获取当前图片所在组中的索引
  const getIndex = (active, value) => {
    return value.findIndex(item => {
      return item.url === swipeData[active]?.url
    }) + 1
  }


</script>

<style lang='less' scoped>
  .detail-swipe {
    img {
      display: block;
      width: 100%;
    }
    .indicator {
      display: flex;
      position: absolute;
      bottom: 0;
      right: 0;
      border-radius: 6px;
      font-size: 13px;
      color: aliceblue;
      background: rgba(0, 0, 0);
      .item {
        padding: 5px 5px;
      }
      .active {
        border-radius: 6px;
        background-color: #fff;
        color: #000;
      }
    }
  }
</style>