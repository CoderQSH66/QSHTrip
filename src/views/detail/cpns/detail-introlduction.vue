<template>
  <div class='detail-introlduction'>
    <detailFacility  :title="introl.title" >
      <!-- 插槽插入数据 -->
      <template #default>
        <div class="content">
          <p>{{ introl.introduction }}</p>
        </div>
      </template>
    </detailFacility>
  </div>
</template>

<script setup>
  import detailFacility from "../../../components/detail-facilitys/detail-facility.vue"
  const { introl } = defineProps({
    introl: {
      type: Object,
      default: () => ({})
    }
  })
  console.log(introl)
</script>

<style lang='less' scoped>
  .content {
    p {
      color: rgb(116, 111, 121);
      font-size: 14px;
      padding: 20px 0;
    }
  }
</style>