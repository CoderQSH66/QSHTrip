<template>
  <div class='search'>
    <div class="time">
      <div class="start">
        <span>住</span>
        <span class="s-time">{{ startDateStr }}</span>
      </div>
      <div class="end">
        <span>离</span>
        <span class="s-time">{{ endDateStr }}</span>
      </div>
    </div>
    <div class="input-e">
      <input type="text" placeholder="关键字/位置/民宿">
      <!-- <i class="s-icon"></i> -->
      <van-icon name="search" size="26"/>
    </div>
  </div>
</template>

<script setup>
  import useMainStore from '@/stores/modules/main';
  import { storeToRefs } from 'pinia';
  import { computed } from 'vue';
  import { formatMonthDay } from "@/utils/format_date"

  const mainStore = useMainStore()
  const { liveTime } = storeToRefs(mainStore)

  const startDateStr = computed(() => formatMonthDay(liveTime.value.startDate, "MM.DD"))
  const endDateStr = computed(() => formatMonthDay(liveTime.value.endDate, "MM.DD"))
</script>

<style lang='less' scoped>
  .search {
    display: flex;
    color: rgb(106, 106, 106);
    background-color: rgb(255, 252, 252);
    .time {
      font-size: 12px;
      span {
        display: inline-block;
        padding: 2px 2px;
      }
      .s-time {
        color:  rgb(7, 7, 7);
        font-weight: 600;
      }
    }
    .input-e {
      flex: 1;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 10px;
      font-size: 14px;
      input {
        border: none;
        background-color:inherit;
      }
      .s-icon {
        display: block;
        width: 38px;
        height: 38px;
        background: url("../../../assets/img//home/home-sprite.png") -62px -307px;
      }
    }
  }
</style>