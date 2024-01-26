<template>
  <div class='detail-comment'>
    <detailFacility  title="热门评论" :more="`查看剩余${hotComment.totalCount-1}条评论`">
      <template #default>
        <div class="content">
          <div class="top">
            <h2>{{ hotComment.overall }}</h2>
            <div class="star">
              <span>{{ hotComment.scoreTitle}}</span>
              <span class="star-c">{{ hotComment.totalCount}}条评论</span>
              <van-rate
                :model-value="hotComment.overall"
                color="#ff9654"
                void-icon="star"
                void-color="#eee"
                readonly
                allow-half	
              />
            </div>
            <div class="subScores">
              <template v-for="(item, index) of hotComment.subScores">
                <span class="item">{{ item }}</span>
              </template>
            </div>
          </div>
          <div class="tags">
            <template v-for="(item, index) of hotComment.commentTagVo">
              <span class="item" :style="{color: item.color, background: item.backgroundColor}">{{ item.text}}</span>
            </template>
          </div>
          <div class="user-comment">
            <div class="info">
              <img :src="hotComment.comment.userAvatars" alt="">
              <div class="desc">
                <span>{{ hotComment.comment.userName }}</span>
                <span class="date">{{ hotComment.comment.checkInDate }}</span>
              </div>
            </div>
            <p>{{ hotComment.comment.commentDetail }}</p>
          </div>
        </div>
      </template>
    </detailFacility>
  </div>
</template>

<script setup>
  import detailFacility from "../../../components/detail-facilitys/detail-facility.vue"
  const { hotComment } = defineProps({
    hotComment: {
      type: Object,
      default: () => ({})
    }
  })
  console.log(hotComment)
</script>

<style lang='less' scoped>
  .detail-comment {
    .content {
      padding: 20px 0;
      font-size: 14px;
      .top {
        display: flex;
        justify-content: space-between;
        align-items: center;
        h2 {
          font-size: 45px;
          border-bottom: 6px solid;
          border-image: linear-gradient(to right, #f4c38b, #ff9654) 1;
        }
        .star {
          --van-rate-icon-size: 12px;
          display: flex;
          flex-direction: column;
          width: 200px;
          margin-left: 10px;
          .star-c {
            margin: 5px 0;
            color: var(--primary-font-color);

          }
        }
        .subScores {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-around;
          color: var(--primary-font-color);
          .item {
            margin: 3px 0;
          }
        }
      }
      .tags {
        display: flex;
        flex-wrap: wrap;
        margin: 16px 0;
        .item {
          margin: 6px 5px;
        }
      }
      .user-comment {
        padding: 10px 0;
        background-color: #f3f8fc;
        .info {
          display: flex;
          align-items: center;
          padding: 0 0 20px 10px;
          img {
            border-radius: 50%;
            width: 35px;
            height: 35px;
          }
          .desc {
            margin-left: 10px;
            display: flex;
            flex-direction: column;
            .date {
              margin-top: 5px;
              color: var(--primary-font-color);
            }
          }
        }
      }
    }
  }
</style>