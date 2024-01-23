<template>
  <!-- 位置 -->
  <div class="location">
    <van-nav-bar :left-text="cityStore.cityInfo.cityName" @click-left="onClickLeft">
      <template #right>
        <div class="positon">
          <span>我的位置</span>
          <img src="@/assets/img/home/icon_location.png" alt="">
        </div>
      </template>
    </van-nav-bar>
  </div>

  <!-- 日期选择 -->
  <div class="date-search section-pad" @click="chooceDate">
    <div class="enter">
      <span>入住</span>
      <div class="start">{{ start }}</div>
    </div>
    <div class="total">共{{ diff }}晚</div>
    <div class="leave">
      <span>离店</span>
      <div class="end">{{ end }}</div>
    </div>
  </div>
  <!-- 日期组件 -->
  <van-calendar v-model:show="show" 
              type="range" 
              :max-range="30"
              :formatter="formatter" 
              color="#ff9864"
              confirm-disabled-text="请选择结束时间" 
              @confirm="onConfirm" 
              />

  <!-- 价格、关键字 -->
  <div class="section section-pad">
    <div class="search-term">
      <div class="pric">价格不限</div>
      <div class="person">人数不限</div>
    </div>
    <div class="primary">关键字/位置/民宿名</div>
  </div>

  <!-- 热门建议 -->
  <div class="hot-suggests section-pad">
    <template v-for="(item, index) of homeStore.hotSuggests" :key="index">
      <div class="item " :style="{color: item.tagText.color, background: item.tagText.background.color}">
        {{ item.tagText.text }}
      </div>
    </template>
  </div>

  <!-- 搜索按钮 -->
  <div class="serch-btn section-pad">
    <button @click="onSearch">开始搜索</button>
  </div>
</template>

<script setup>
  import { useRouter } from 'vue-router';
  import useCityStore from "@/stores/modules/city"
  import { ref } from 'vue';
  import { formatMonthDay, formatMonthDayadd, formatDiff } from "@/utils/format_date"
  import useHomeStore from "@/stores/modules/home"

  // city的store实例对象
  const cityStore = useCityStore()

  // home的store实例对象
  const homeStore = useHomeStore()

  // 点击进入city页面
  const router = useRouter()
  function onClickLeft(event) {
    router.push("/city")
  }

  // 日期选择

  const start = ref(formatMonthDay(new Date()))
  const end = ref(formatMonthDayadd(new Date(), 1))
  const diff = ref(1)
  
  const show = ref(false);
  const chooceDate = () => {
    show.value = true
  }

  homeStore.$patch({
        liveTime: {
          start: start.value,
          end: end.value
        }
      })

  const onConfirm = (dates) => {
      show.value = false;
      start.value = formatMonthDay(dates[0])
      end.value = formatMonthDay(dates[1])
      diff.value = formatDiff(dates[0], dates[1])
      homeStore.$patch({
        liveTime: {
          start: start.value,
          end: end.value
        }
      })
      console.log(homeStore.$state)
    };
  
  const formatter = (day) => {
    if (day.type === 'start') {
      day.bottomInfo = '入住';
    } else if (day.type === 'end') {
      day.bottomInfo = '离店';
    }
    return day
  } 

  // 点击搜索跳转
  const onSearch = () => {
    router.push({
      path: "/search",
      query: {
        start: start.value,
        end: end.value,
        currentCity: cityStore.cityInfo.cityName
      }
    })
  }

</script>

<style lang='less' scoped>
  .location {
    :deep(.van-nav-bar__text) {
      color: var(--primary-color);
    }
    :deep(.van-nav-bar__right) {
      color: var(--primary-color);
      img {
        width: 20px;
        vertical-align: top;
        margin: 0 5px;
      }
    }
  }
  .date-search {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 13px;
    color: var(--primary-font-color);
    span {
      display: block;
      margin-bottom: 2px;
    }
    .total {
      letter-spacing: 5px;
    }
  }
  .section {
    font-size: 13px;
    color: #a2a7ab;
      .search-term {
        display: flex;
        justify-content: space-between;
        margin-bottom: 20px;
      }
    }
  .hot-suggests {
    display: flex;
    flex-wrap: wrap;
    font-size: 13px;
    .item {
      margin: 5px 6px;
      padding: 3px 6px;
      border-radius: 14px;
    }
  }
  .serch-btn {
    text-align: center;
    color: aliceblue;
    button {
      border-radius: 14px;
      width: 69%;
      height: 36px;
      background-image: var(--theme-linear-gradient);
      letter-spacing: 5px;
    }
  }
</style>
