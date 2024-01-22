<template>
  <div class='cate-scroll section-pad'>
    <template v-for="(item, index) of homeStore.categories" :key="index">
      <a :href="item.navigateUrl">
        <div class="cate-item">
          <img :src="item.pictureUrl">
          <span>{{ item.title }}</span>
        </div>
      </a>
    </template>
  </div>
</template>

<script setup>
  import useHomeStore from "@/stores/modules/home"

  const homeStore = useHomeStore()
  
</script>

<style lang='less' scoped>
  .cate-scroll {
    display: flex;
    justify-content: space-between;
    overflow-x: auto;
    font-size: 12px;
    text-align: center;
    &::-webkit-scrollbar {
      display: none; /* Chrome Safari */
    }
    a {
      display: block;
      .cate-item {
      width: 70px;
      flex-shrink: 0;
      img {
        display: block;
        margin: 0 auto;
        width: 45px;
      }
    }
    }
  }
</style>