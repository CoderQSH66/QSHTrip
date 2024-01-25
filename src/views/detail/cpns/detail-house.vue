<template>
  <div class='detail-house'>
    <detailFacility  title="房屋设施" more="查看全部设施">
      <!-- 插槽插入数据 -->
      <template #default>
        <div class="content">
          <template v-for="(item, index) of houseFacility.facilitySort">
            <div class="item">
              <div class="left">
                <img :src="houseFacility.houseFacilitys[item].icon" alt="">
                <span>{{ houseFacility.houseFacilitys[item].groupName }}</span>
              </div>
              <div class="right">
                <template v-for="(item, index) of houseFacility.houseFacilitys[item].facilitys.slice(0, 4)">
                  <div class="item-i">
                    <img src="../../../assets/img/detail/icon_check.png" alt="">
                    <span>{{ item.name }}</span>
                  </div>
                </template>
              </div>
            </div>
          </template>
        </div>
      </template>
    </detailFacility>
  </div>
</template>

<script setup>
  import detailFacility from "../../../components/detail-facilitys/detail-facility.vue"
  const { houseFacility } = defineProps({
    houseFacility: {
      type: Object,
      default: () => ({})
    }
  })
  // console.log(houseFacility)
</script>

<style lang='less' scoped>
  .content {
    background-color: #f3f8fc;
    font-size: 13px;
    .item {
      display: flex;
      justify-content: space-between;
      margin: 20px 0;
      padding: 10px 0;
      .left {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 70px;
        img {
          width: 25px;
          height: 25px;
        }
      }
      .right {
        flex: 1;
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        align-items: center;
        .item-i {
          display: flex;
          align-items: center;
          width: 100px;
          img {
          width: 15px;
          height: 15px;
          margin-right: 2px;
        }
        }
        
      }
    }
  }
    
</style>