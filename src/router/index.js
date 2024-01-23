import { createRouter, createWebHashHistory } from "vue-router";
import useMainStore from "@/stores/modules/main";

const asnycCity = () => import("@/views/layout/index.vue")

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      component: asnycCity,
      redirect: "/home",
      children: [
        {
          path: "/home",
          component: () => import("@/views/home/home.vue")
        },
        // {
        //   path: "/favor",
        //   component: () => import("@/views/favor/favor.vue")
        // },
        {
          path: "/order",
          component: () => import("@/views/order/order.vue")
        },
        {
          path: "/message",
          component: () => import("@/views/message/message.vue")
        }
      ]
    },
    {
      path: "/city",
      component: () => import("@/views/city/city.vue")
    },
    {
      path: "/search",
      component: () => import("@/views/search/search.vue")
    },
    {
      path: "/favor",
      component: asnycCity,
      redirect: "/favor/index",
      children: [
        {
          path: "index",
          component: () => import("@/views/favor/favor.vue"),
          alias: "/favor"
        }
      ]
    },
    {
      path: "/login",
      component: () => import("@/views/login/login.vue"),
    }
  ]
})

router.beforeEach((to, from) => {
  const mainStore = useMainStore()
  mainStore['i-token'] = localStorage.getItem("i-token")
  if ( to.path !== "/login") {
    if (!mainStore['i-token'])
    router.push("/login")
  } else {

  }
})

export default router