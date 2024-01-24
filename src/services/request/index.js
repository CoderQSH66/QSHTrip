import axios from "axios";
import {BASE_URL, TIMEOUT} from "./config"
import useMainStore from "@/stores/modules/main";
const mainStore = useMainStore()

class QSHrquest {

  constructor(baseURL, timeout) {
    this.instance = axios.create({
      baseURL,
      timeout
    })
    // 添加拦截器
    this.instance.interceptors.request.use((config) => {
      // 请求前打开loading
      mainStore.isShowLoading = true
      return config
    }, (err) => {
      // 请求失败关闭loading
      mainStore.isShowLoading = false
      return err
    })
    this.instance.interceptors.response.use((response) => {
      // 获取响应后关闭loading
      mainStore.isShowLoading = false
      return response
    }, (err) => {

      return err
    })
  }

  // request
  request(config) {

    return new Promise((resolve, reject) => {
      this.instance.request(config).then(res => {

        resolve(res.data)
      }).catch(err => {
        reject(err)
      })
    })
  }
  // get
  get(config) {
    return this.request({...config, method: 'get'})
  }
  // post
  post(config) {
    return this.request({...config, method: 'post'})
  }
}

export default new QSHrquest(BASE_URL, TIMEOUT)