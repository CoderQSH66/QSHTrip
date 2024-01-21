import axios from "axios";
import {BASE_URL, TIMEOUT} from "./config"


class QSHrquest {

  constructor(baseURL, timeout) {
    this.instance = axios.create({
      baseURL,
      timeout
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