import axios from 'axios'
import qs from 'qs'
import config from './config'
import { ResetMessage } from '_c/ResetMessage'

export const PATH_URL = config.base_url[process.env.VUE_APP_CURENV]

// 创建axios实例
const service = axios.create({
  baseURL: PATH_URL, // api 的 base_url
  timeout: config.request_timeout // 请求超时时间
})

// request拦截器
service.interceptors.request.use(
  config => {
    if (config.method === 'post' && config.headers['Content-Type'] === 'application/x-www-form-urlencoded') {
      config.data = qs.stringify(config.data)
    }
    return config
  },
  error => {
    // Do something with request error
    console.log(error) // for debug
    Promise.reject(error)
  }
)

// response 拦截器
service.interceptors.response.use(
  response => {
    if (response.data.code === config.result_code) {
      return response.data
    } else {
      ResetMessage.error(response.data.message)
    }
  },
  error => {
    console.log('err' + error) // for debug
    ResetMessage.error(error.message)
    return Promise.reject(error)
  }
)

export default service
