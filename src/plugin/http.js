import axios from 'axios'
const MyHttp = {}

MyHttp.install = (Vue) => {
  // 添加请求拦截器
  axios.interceptors.request.use(function (config) {
    // 在发送请求之前数据相应回来之前显示loading...
    // console.log(Vue.prototype)
    Vue.$indicator.open({
      spinnerType: 'fading-circle'
    })
    return config
  }, function (error) {
    // 对请求错误做些什么
    // console.log(error)
    return Promise.reject(error)
  })
  // 数据相应回来之前。
  // 添加响应拦截器
  axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    Vue.$indicator.close()
    return response
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error)
  })

  Vue.prototype.axios = axios
}
export default MyHttp