<template>
  <div class='house-item-v3'>
    <div class="cover">
      <img :src="houseData.image.url" alt="">
    </div>
    <div class="position">
      <van-icon name="location-o" />
      <span>{{ houseData.location }}</span>
    </div>
    <div class="desc-v3">
      <div class="name">
        {{ houseData.houseName }}
      </div>
      <span>{{ houseData.summaryText }}</span>
      <div class="price">
        <span class="finalPrice">￥{{ houseData.finalPrice }}</span>
        <span class="productPrice">￥{{ houseData.productPrice }}</span>
        <span class="priceTipBadge" :style="{color: houseData?.priceTipBadge?.color, background: houseData?.priceTipBadge?.gradient.startColor}">{{ houseData?.priceTipBadge?.text }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
  defineProps({
    houseData: Object,
    default: () => ({})
  })
  
</script>

<style lang='less' scoped>
  .house-item-v3 {
    position: relative;
    width: 49%;
    margin: 10px 0;
    .cover {
      border-radius: 9px;
      overflow: hidden;
      img {
        display: block;
        width: 100%;
      }
    }
    .position {
      font-size: 13px;
      margin-top: 5px;
      padding: 0 5px;
      span {
        display: inline-block;
      }
    }
    .desc-v3 {
      padding: 3px 10px;
      .name {
        font-size: 14px;

        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
      span {
        display: block;
        margin: 5px 0;
        font-size: 12px;
        color: rgb(131, 133, 134);
      }
      .price {
        span {
          display: inline-block;
        }
        .finalPrice {
          font-size: 15px;
          vertical-align: top;
          color: var(--primary-color);
        }
        .productPrice {
        text-decoration:line-through;
        }
        .priceTipBadge {
          padding: 2px 5px;
          margin: 0 5px;
          border-radius: 8px;
          font-size: 12px;
        }
      }
    }
  }
</style>