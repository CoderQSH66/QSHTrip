import { onMounted, onUnmounted, ref } from "vue"
import useHomeStore from "@/stores/modules/home"
import  {throttle}  from "lodash"

export default function useScroll(selector) {
  const isScrollBottom = ref(false)
  const scrollTop = ref(0)
  let Ele = null
  let throttleListen = null
  const listenScrollEle = function(element) {
    return function listenCallBack() {
      // console.log("监听到滚动")
      // console.log(element.scrollTop, element.clientHeight, element.scrollHeight )
      scrollTop.value = element.scrollTop
      if (element.scrollTop + element.clientHeight >= element.scrollHeight - 3) {
        console.log("滚动到底部")
        isScrollBottom.value = true
      }
    }
  }

  // 滚动监听
  onMounted(() => {
    if (!selector) {
      Ele = document.documentElement
      throttleListen = throttle(listenScrollEle(Ele), 500)
      window.addEventListener("scroll", throttleListen)
    } else {
      Ele = document.body.querySelector(selector)
      throttleListen = throttle(listenScrollEle(Ele), 500)
      Ele.addEventListener("scroll", throttleListen)
    }
  })

  // 取消监听
  onUnmounted(() => {
    console.log("取消监听")
    if (Ele === document.documentElement) {
      window.removeEventListener("scroll", throttleListen)
    } else {
      Ele.removeEventListener("scroll", throttleListen)
    }
  })

  return {isScrollBottom, scrollTop}
}