import { defineStore } from "pinia";
import dayjs from "dayjs";

const useMainStore = defineStore("main", {
  state: () => ({
    liveTime: {
      startDate: dayjs(new Date()),
      endDate: dayjs(new Date()).add(1, "day")
    },
    'i-token': "",
    isShowLoading: false
  })
})

export default useMainStore