import { defineStore } from "pinia";
import { getAllCity } from "@/services";

const useCityStore = defineStore("city", {
  state: () => ({
    allCity: {},
    cityInfo: {
      cityName: '深圳'
    }
  }),
  actions: {
    async getAllCityAction(){
      const res = await getAllCity()
      this.allCity = res.data
    }
  }
})

export default useCityStore