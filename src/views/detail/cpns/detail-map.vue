<template>
  <div class='detail-map'>
    <detailFacility title="周边位置" more="更多周边位置">
      <div id="map">

      </div>
    </detailFacility>
  </div>
</template>

<script setup>
  import { onMounted } from "vue";
  import detailFacility from "../../../components/detail-facilitys/detail-facility.vue"

  const {loaction} = defineProps({
    loaction: {
      type: Object,
      default: () => ({})
    }
  })

  onMounted(() => {
    const map = new BMapGL.Map("map");          // 创建地图实例 
    const point = new BMapGL.Point(loaction.longitude, loaction.latitude);  // 创建点坐标 
    map.centerAndZoom(point,15);   // 初始化地图
    map.enableScrollWheelZoom(true)  //开启鼠标滚轮缩放
    const marker = new BMapGL.Marker(point);        // 创建标注   
    map.addOverlay(marker);                     // 将标注添加到地图中
    // 监听点击标注
    marker.addEventListener("click", function(){   
        alert("您点击了标注");   
    });
  })
  
</script>

<style lang='less' scoped>
  #map {
    margin: 10px 0;
    height: 230px;
  }
</style>