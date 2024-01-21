<template>
  <div class="city">
    <div class="top">
      <!-- 顶部搜索框 -->
      <van-search v-model="value" placeholder="城市/区域/位置" show-action clearable @cancel="clickCancle"/>
      <!-- 标签切换 -->
      <van-tabs v-model:active="active">
        <template v-for="(value, key, index) of allCity" :key="index">
          <van-tab :title="value.title" :name="key"></van-tab>
        </template>
      </van-tabs>
    </div>
    <div class="content">
      <!-- 做法一：通过current来决定展示的内容 -->
      <!-- <CityGroups :current="current"></CityGroups> -->

      <!-- 做法二：直接展示两套内容，通过active的切换来决定隐藏的组件 -->
      <template v-for="(value, key, index) of allCity" :key="index">
        <CityGroups v-show="key === active" :current="value"></CityGroups>
      </template>
    </div>

  </div>
</template>

<script setup>
  import { computed, ref } from 'vue';
  import useCityStore from "../../stores/modules/city"
  import { storeToRefs } from 'pinia';
  import { useRouter } from 'vue-router';
  import CityGroups from "./cnps/city-groups.vue"

  // 顶部搜索框
  const value = ref('')
  const router = useRouter()
  const clickCancle = () => {
    router.back()
  }

  // 标签切换栏
  const active = ref()

  // 获取city的所有数据
  const cityStore = useCityStore()
  const { allCity } = storeToRefs(cityStore)
  cityStore.getAllCityAction()
  
  // content内容切换
  const current = computed(() => {
    return allCity.value[active.value]
  })
  

</script>

<style lang='less' scoped>
  .city {
    --van-search-left-icon-color: var(--primary-color);
    --van-tabs-bottom-bar-color: var(--primary-color);
    --van-tabs-line-height: 46px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .content {
      height: calc(100vh - 100px);
      overflow-y: scroll;
    }
  }
</style>
