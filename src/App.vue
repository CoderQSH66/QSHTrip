<template>
  <div class="app">
    <!-- <login v-if="!mainStore['i-token']"></login> -->
    <loading></loading>
    <RouterView></RouterView>
  </div>
</template>

<script setup>
  // import login from "./views/login/login.vue"
  import loading from "./views/loading/loading.vue"



</script>

<style lang='less' scoped>
  
</style>
