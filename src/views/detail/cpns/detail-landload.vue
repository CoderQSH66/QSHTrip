<template>
  <div class='detail-landload'>
    <detailFacility title="房东信息" more="查看房东主页">
      <template #default>
        <div class="content">
          <div class="topScroll">
            <img :src="landload.topScroll" alt="">
          </div> 
          <div class="info">
            <div class="log">
              <img :src="landload.hotelLogo" alt="">
            </div>
            <div class="desc">
              <h4>{{ landload.hotelName }}</h4>
              <template v-for="(item, index) of landload.hotelTags">
                <span :style="{color: item.tagText.color}">{{ item.tagText.text}}</span>
                <span v-if="index!==landload.hotelTags.length-1" :style="{color: item.tagText.color}">|</span>
              </template>
            </div>
            <button>联系房东</button>
          </div>
          <div class="comment">
            <template v-for="(item, index) of landload.hotelSummary">
              <div class="item">
                <span>{{ item.title }}</span>
                <h2 class="rate">{{ item.introduction }}</h2>
                <span>{{ item.tip }}</span>
              </div>
            </template>
          </div>
        </div>
      </template>
    </detailFacility>
  </div>
</template>

<script setup>
  import detailFacility from "../../../components/detail-facilitys/detail-facility.vue"
  
  const { landload } = defineProps({
    landload: {
      type: Object,
      default: () => ({})
    }
  })

  // console.log(landload)
  
</script>

<style lang='less' scoped>
  .content {
    .topScroll {
      margin: 10px 0;
      img {
        display: block;
        width: 100%;
      }
    }
    .info {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 10px 0;
      .log {
        img {
          width: 50px;   
        }
      }
      h4 {
        padding-left: 4px;
      }
      .desc {
        flex: 1;
        span {
          font-size: 13px;
          margin: 0 4px
        }
      }
      button {
        padding: 6px;
        border-radius: 5px;
        background-color: var(--primary-color);
        color: #fff;
        font-size: 12px;
      }
    }
    .comment {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 20px 0;
      font-size: 12px;
      color: var(--primary-font-color);
      .item {
        display: flex;
        flex-direction: column;
        align-items:flex-start;
        span {
          margin: 3px 0;
        }
        .rate {
          color: #000;
        }
      }
    }

  }
</style>