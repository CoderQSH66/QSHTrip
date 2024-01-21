<template>
  <div class="group-city">
    <van-index-bar highlight-color="#ff9654" :index-list="['#', ...listIndex]">
      <van-index-anchor index="热门" />
      <div class="hot-list">
        <template v-for="(value, index) of current.hotCities" :key="index">
        <div class="city-item" @click="clickHot(value)">{{ value.cityName }}</div>
        </template>
      </div>

      <template v-for="(item, index) of current.cities" :key="index">
        <van-index-anchor :index="item.group" />
        <div class="citys">
          <template v-for="(iten, key, indey) of item.cities" :key="indey">
            <van-cell :title="iten.cityName" @click="clickHot(iten)"></van-cell>
          </template>
        </div>
      </template>
    </van-index-bar>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import useCityStore from "@/stores/modules/city"

  // 接收父组件传递的数据 
  const { current } =  defineProps({
    current: {
      type: Object,
      default: () => ({})
    }
  })
  console.log(current)

  // 定义索引列表
  const listIndex = computed(() => {
    return current.cities.map((item) => {
      return item.group
    })
  })

  // 点击选择城市，回显
  const cityStore = useCityStore()
  const clickHot = (city) => {
    cityStore.cityInfo = city
    history.back()
  }
  
</script>

<style lang='less' scoped>
  .hot-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 13px;
    .city-item {
      margin: 10px 6px;
      border-radius: 13px;
      width: 70px;
      height: 28px;
      line-height: 28px;
      font-size: 12px;
      text-align: center;
      background-color: #fff4ec;
    }
  }
</style>
