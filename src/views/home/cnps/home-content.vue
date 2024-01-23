<template>
  <div class='home-content section-pad'>
    <h2>热门推荐</h2>
    <div class="house-list">
      <template v-for="(item, index) of homeStore.houseList">
        <template v-if="item.discoveryContentType === 9">
          <homeContentType9 :houseData="item.data"></homeContentType9>
        </template>
        <template v-if="item.discoveryContentType === 3">
          <homeContentType3 :houseData="item.data"></homeContentType3>
        </template>
      </template>
    </div>
  </div>
</template>

<script setup>
  import homeContentType9 from "../../../components/home-content-items/home-content-type9.vue"
  import homeContentType3 from "../../../components/home-content-items/home-content-type3.vue"
  import useHomeStore from "@/stores/modules/home"
  
  const homeStore = useHomeStore()

  
</script>

<style lang='less' scoped>
  .house-list {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
</style>