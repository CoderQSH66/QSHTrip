<template>
  <div class="login">
    <input type="text" placeholder="请输入账号" v-model="userValue">
    <button @click="onClick">登录</button>
  </div>
</template>

<script setup>
  import { useRouter } from "vue-router";
  import useMainStore from "../../stores/modules/main.js";
  import { ref, onMounted, toRefs } from "vue"
  const mainStore = useMainStore()
  const userValue = ref("")
  const router = useRouter()

  const onClick = () => {
    localStorage.setItem("i-token", userValue.value)
    mainStore['i-token'] = localStorage.getItem("i-token")
    router.push("/")
  }

</script>

<style lang='less' scoped>
  
</style>
