<template>
  <div class="detail-topinfos section-pad">
    <h2 class="title">{{ topinfos.houseName }}</h2>
    <div class="tags">
      <template v-for="(item, index) of topinfos.houseTags">
        <span class="item" v-if="item.tagText" :style="{color: item.tagText.color, background: item.tagText.background.color}">{{ item.tagText.text }}</span>
      </template>
    </div>
    <div class="comment">
      <div class="left">
        <span class="rate">{{ topinfos.commentBrief.overall }}</span>
        <span class="title">{{ topinfos.commentBrief.scoreTitle }}</span>
        <span class="brief">{{ topinfos.commentBrief.commentBrief }}</span>
      </div>
      <div class="right">
        <span class="commnet-num">{{ topinfos.commentBrief.totalCount }}条评论</span>
        <van-icon name="arrow" />
      </div>
    </div>
    <div class="location">
      <span class="address">{{ topinfos.nearByPosition.address }}</span>
      <span class="map">地图·周边&gt;</span>
    </div>
  </div>
</template>

<script setup>
  
  const { topinfos } = defineProps({
    topinfos: Object,
    default: () => ({})
  })

  console.log(topinfos)
</script>

<style lang='less' scoped>
  .detail-topinfos {
    .title {
      font-size: 20px;
    }
    .tags {
      display: flex;
      justify-content: space-between;
      margin: 10px 0;
      font-size: 13px;
    }
    .comment {
      display: flex;
      justify-content: space-between;
      margin: 10px 0;
      padding: 6px 5px;
      font-size: 13px;
      color: var(--primary-font-color);
      background-color: rgb(243, 248, 252);
      .left {
        .rate {
          font-size: 19px;
          color: #000;
          font-weight: bold;
        }
        .title {
          margin: 0 5px;
          font-size: inherit;
          color: #000;
          font-weight: 600;
        }
      }
      .right {
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: var(--primary-color);
      }
    }
    .location {
      display: flex;
      justify-content: space-between;
      margin: 10px 0;
      padding: 6px 5px;
      font-size: 13px;
      background-color: rgb(243, 248, 252);
      font-weight: 500;
      .map {
        font-weight: 600;
      }
    }
  }
</style>
