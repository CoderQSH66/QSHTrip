<template>
  <div class='house-list'>
    <div class="desc">
      <span>{{ houseData.summaryText }}</span>
      <div class="name">
        {{ houseData.houseName }}
      </div>
      <div class="price">
        <div class="rate">
          <template v-for="i of 5"><van-icon name="star-o" color="#fff"/></template>
        </div>
        <span>￥{{ houseData.finalPrice }}</span>
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
  .house-list {
    position: relative;
    flex: none;
    margin: 10px 0;
    border-radius: 10px;
    width: 150px;
    height: 230px;
    background: url("https://pic.tujia.com/upload/landlordunit/day_200728/thumb/202007281552537926_360_480.jpg") center/100% 100% no-repeat;
    .desc {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      padding: 10px 5px;
      color: #fff;
      span {
        display: block;
        font-size: 13px;
        margin: 6px 0;
      }
      .name {
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
      }
    }
  }
</style>