<template>
  <div class='search'>
    <div class="time">
      <div class="start">
        <span>住</span>
        <span class="s-time">{{ homeStore.liveTime.start }}</span>
      </div>
      <div class="end">
        <span>离</span>
        <span class="s-time">{{ homeStore.liveTime.end }}</span>
      </div>
    </div>
    <div class="input-e">
      <input type="text" placeholder="关键字/位置/民宿">
      <i class="s-icon"></i>
    </div>
  </div>
</template>

<script setup>
  import useHomeStore from "@/stores/modules/home"

  const homeStore = useHomeStore()
  
</script>

<style lang='less' scoped>
  .search {
    display: flex;
    color: rgb(106, 106, 106);
    background-color: rgb(242, 247, 247);
    .time {
      font-size: 13px;
      span {
        padding: 1px 1px;
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