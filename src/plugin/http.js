import axios from 'axios'
const MyHttp = {}

MyHttp.install = (Vue) => {
  // 4. 添加实例方法
  Vue.prototype.axios = axios
}
export default MyHttp 