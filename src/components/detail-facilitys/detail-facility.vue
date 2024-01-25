<template>
  <div class='detail-facility section-pad'>
    <h3 class="title">{{ title }}</h3>
    <slot>默认内容</slot>
    <div class="more" v-if="more.length">
      <span>{{ more }}</span>
      <van-icon name="arrow" />
    </div>
  </div>
</template>

<script setup>
  defineProps({
    title: {
      type: String,
      default: '默认标题'
    },
    more: {
      type: String,
      default: ''
    }
  })
</script>

<style lang='less' scoped>
  .detail-facility {
    .title {
      padding: 10px 0;
      border-bottom: 1px solid #d5cece;
    }
    .more {
      display: flex;
      justify-content: right;
      font-size: 13px;
      font-weight: 700;
      color: var(--primary-color);
    }
  }
</style>