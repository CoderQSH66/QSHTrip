<template>
  <div class="tab-bar">
    <van-tabbar v-model="active" active-color="#ff9654">
      <template v-for="(item, index) of tabBarData" :key="index">
        <van-tabbar-item :icon="item.icon" :to="item.path">
          <span>{{ item.text }}</span>
        </van-tabbar-item>
      </template>

    </van-tabbar>
  </div>
</template>

<script setup>
  import { ref, watch } from 'vue';
  import { useRoute } from 'vue-router';
  const tabBarData = [
    {
      path: "/home",
      text: "首页",
      icon: "wap-home-o"
    },
    {
      path: "/favor",
      text: "收藏",
      icon: "star-o"
    },
    {
      path: "/order",
      text: "订单",
      icon: "orders-o"
    },
    {
      path: "/message",
      text: "消息",
      icon: "chat-o"
    }
  ]
  const active = ref(0)

  const route = useRoute()

  watch(() => (route.path), (newPath) => {
    tabBarData.forEach((item, index) => {
      if (item.path === newPath) {
        active.value = index
      }
    })
  })
  
</script>

<style lang='less' scoped>
  .tab-bar {
    :deep(.van-icon) {
      font-size: 22px;
    }
    :deep(.van-tabbar-item) {
      font-size: 13px;
    }
  }
</style>
