import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig } from 'axios'
import type { TResponseData } from '@/types/company/response'
import { showFailToast } from 'vant'

class Api {
  instance: AxiosInstance
  config: AxiosRequestConfig
  constructor(option: AxiosRequestConfig) {
    this.config = option
    // 配置全局参数
    this.instance = axios.create(this.config)
    this.interceptors()
  }
  interceptors() {
    // 请求拦截
    this.instance.interceptors.request.use(
      (config) => {
        removePending(config)
        addPending(config)
        // console.log(config); //@ts-ignore //@ts-ignore
        if (config.method === 'get') {
          let url = config.url
          url?.indexOf('?') === -1 ? (config.url = url + '?_=' + new Date().getTime()) : (config.url = url + '&_=' + new Date().getTime())
        }
        if (config && config.headers) {
          config.headers['Content-Type'] = 'application/json;charset=UTF-8'
          const token = useAuthStore().token
          token && (config.headers['h-role-token'] = token)
        }
        return config
      },
      (error) => Promise.reject(error)
    )

    // 响应拦截
    this.instance.interceptors.response.use(
      (response) => {
        removePending(response.config)
        const res = response.data
        // 3333 无效 token 跳转到登录页
        if (res.code === '3333') {
          window.location.href = '/login'
          throw '无效登录'
        }
        if (response.status !== 200 || res.code !== '0000') {
          showFailToast(res.msg)
          throw res.msg
        }
        return res
      },
      (error) => {
        error.config && removePending(error.config)
        httpErrorStatusHandle(error)
        return Promise.reject(error)
      }
    )
  }
  async request<T = any>(config: AxiosRequestConfig): Promise<TResponseData<T>> {
    return this.instance.request<TResponseData<T>, TResponseData<T>>(config)
  }
  async post<T = any>(url: string, data: any = {}): Promise<TResponseData<T>> {
    return this.instance.post<TResponseData<T>, TResponseData<T>>(url, data)
  }
  async get<T = any>(url: string, data: any = {}): Promise<TResponseData<T>> {
    return this.instance.get<TResponseData<T>, TResponseData<T>>(url, { params: data })
  }
}

const api = new Api({
  baseURL: import.meta.env.VITE_BASE_API,
  timeout: 10 * 1000,
})

export default api

/** * 处理异常 * @param {*} error */
function httpErrorStatusHandle(error: any) {
  const userStore = useAuthStore()
  // 处理被取消的请求
  if (axios.isCancel(error)) return console.error('请求的重复请求：' + error.message)
  let message = ''
  if (error && error.response) {
    switch (error.response.status) {
      case 302:
        message = '接口重定向了！'
        break
      case 400:
        message = '参数不正确！'
        break
      case 401:
        // userStore.clearLoginInfo()
        message = '您未登录，或者登录已经超时，请先登录！'
        break
      case 403:
        message = '您没有权限操作！'
        break
      case 404:
        message = `请求地址出错: ${error.response.config.url}`
        break
      // 在正确域名下
      case 408:
        message = '请求超时！'
        break
      case 409:
        message = '系统已存在相同数据！'
        break
      case 500:
        message = '服务器内部错误！'
        break
      case 501:
        message = '服务未实现！'
        break
      case 502:
        message = '网关错误！'
        break
      case 503:
        message = '服务不可用！'
        break
      case 504:
        message = '服务暂时无法访问，请稍后再试！'
        break
      case 505:
        message = 'HTTP版本不受支持！'
        break
      default:
        message = '异常问题，请联系管理员！'
        break
    }
  }

  if (error.message.includes('timeout')) message = '网络请求超时！'
  if (error.message.includes('Network')) message = window.navigator.onLine ? '服务端异常！' : '您断网了！'

  showFailToast(message)
}

const pendingMap = new Map()

/** * 储存每个请求的唯一cancel回调, 以此为标识 * @param {*} config */
function addPending(config: AxiosRequestConfig) {
  const pendingKey = getPendingKey(config)
  config.cancelToken =
    config.cancelToken ||
    new axios.CancelToken((cancel) => {
      if (!pendingMap.has(pendingKey)) {
        pendingMap.set(pendingKey, cancel)
      }
    })
}

/** * 删除重复的请求 * @param {*} config */
function removePending(config: AxiosRequestConfig) {
  const pendingKey = getPendingKey(config)
  if (pendingMap.has(pendingKey)) {
    const cancelToken = pendingMap.get(pendingKey)
    // 如你不明白此处为什么需要传递pendingKey可以看文章下方的补丁解释
    cancelToken(pendingKey)
    pendingMap.delete(pendingKey)
  }
}

/** * 生成唯一的每个请求的唯一key
 * @param {*} config
 * @returns
 * */
function getPendingKey(config: AxiosRequestConfig) {
  let { url, method, params, data } = config
  if (typeof data === 'string') data = JSON.parse(data) // response里面返回的config.data是个字符串对象
  return [url, method, JSON.stringify(params), JSON.stringify(data)].join('&')
}
