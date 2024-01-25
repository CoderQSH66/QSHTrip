<template>
  <div class='detail-tab-control section-pad'>
    <div class="item-list">
      <template v-for="(item, index) of title" :key="index">
        <span class="item" :class="{active: index === currentIndex}" @click="onClick(index)">{{ item }}</span>
      </template>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      title: {
        type: Object,
        default: () => ['cba', 'nba', 'abc', 'mba', 'coder']
      }
    },
    data: () => ({
      currentIndex: 0
    }),
    emits: ["onClickTab"],
    methods: {
      onClick(index) {
        this.currentIndex = index
        this.$emit("onClickTab", index)
      }
    }
  }

  
</script>

<style lang='less' scoped>
  .detail-tab-control {
    position: fixed;
    z-index: 999;
    top: 0;
    width: 100%;
    height: 46px;
    background-color: #f9f5f5;
    .item-list {
      display: flex;
      justify-content: space-between;
      .item {
        padding: 2px 0;
        font-size: 15px;
      }
      .active {
        color: var(--primary-color);
        border-bottom: 2px solid var(--primary-color);
      }
    }
  }
</style>