import { getHotSuggests, getCategories, getHouseList } from "@/services"
import { defineStore } from "pinia"
import useMainStore from "./main"


const useHomeStore = defineStore("home", {
  state: () => ({
    hotSuggests: [],
    categories: [],
    houseList: [],
    currentPage: 1,
    isShow: false,
  }),
  actions: {
    async getHotSuggestsAction() {
      const res = await getHotSuggests()
      this.hotSuggests = res.data
    },
    async getCategoriesAction() {
      const res = await getCategories()
      this.categories = res.data
    },
    async getHouseListAction() {
      const res = await getHouseList(this.currentPage)
      this.houseList.push(...res.data)
      this.currentPage++
    }
  }
})

export default useHomeStore