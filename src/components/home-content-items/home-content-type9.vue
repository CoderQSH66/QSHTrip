<template>
  <div class='house-item'>
    <div class="cover">
      <img :src="houseData.image.url" alt="">
    </div>
    <div class="desc">
      <span>{{ houseData.summaryText }}</span>
      <div class="name">
        {{ houseData.houseName }}
      </div>
      <div class="price">
        <div class="rate">
          <van-rate :model-value="rateNumber" size="15px" color="#fff" allow-half readonly/>
        </div>
        <span >￥{{ houseData.finalPrice }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { computed } from 'vue';

  const { houseData } = defineProps({
    houseData: Object,
    default: () => ({})
  })

  const rateNumber = computed(() => {
    return Number(houseData.commentScore)
  })
  
</script>

<style lang='less' scoped>
  .house-item {
    overflow: hidden;
    position: relative;
    flex: none;
    margin: 10px 0;
    border-radius: 10px;
    width: 49%;
    .cover {
      img {
        display: block;
        width: 100%;
        height: 100%;
      }
    }
    .desc {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      padding: 6px 5px;
      color: #fff;
      span {
        display: block;
        font-size: 13px;
        margin: 6px 0;
      }
      .name {
        font-size: 15px;
        text-overflow: ellipsis;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
      .price {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 5px 0;
      }
    }
  }
</style>