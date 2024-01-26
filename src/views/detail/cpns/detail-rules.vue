<template>
  <div class='detail-rules'>
    <detailFacility  title="用户须知">
      <template #default>
        <div class="content">
          <template v-for="(item, index) of rules.orderRules">
            <div class="item">
              <span class="title">{{ item.title}}</span>
              <span class="intro">{{ item.introduction}}</span>
              <span class="show" v-if="item.tips">查看说明</span>
            </div>
          </template>
        </div>
      </template>
    </detailFacility>
  </div>
</template>

<script setup>
  import detailFacility from "../../../components/detail-facilitys/detail-facility.vue"
  const { rules } = defineProps({
    rules: {
      type: Object,
      default: () => ({})
    }
  })
  console.log(rules)
</script>

<style lang='less' scoped>
  .detail-rules {
    .content {
      font-size: 14px;
      color: rgb(115, 121, 125);
      margin: 10px 0;
      .item {
        padding: 13px 0;
        .title {
          display: inline-block;
          margin-right: 10px;
          width: 60px;
        }
        .show {
          position: absolute;
          right: 25px;
        }
      }
    }
  }
</style>