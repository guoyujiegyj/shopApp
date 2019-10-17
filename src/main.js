// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 全局样式引入
import './assets/css/base.css'
Vue.config.productionTip = false

// mint ui 部分
// mintui 的全局样式。
import '../node_modules/mint-ui/lib/style.css'
import Mint from "mint-ui"
Vue.use(Mint)

// 引入mui
import '../libs/css/mui.min.css'
import '../libs/fonts/mui.ttf'

// 引入自定义http插件
import myHttp from '@/plugin/http.js'
import Axios from 'axios'
Vue.use(myHttp)

//域名基本配置
Axios.defaults.baseURL='http://localhost:8080/'

// 导入组件九宫格
import MyUl from '@/components/common/Myul'
Vue.component(MyUl.name, MyUl)
// 导入title组件
import MyTitle from '@/components/common/Title'
Vue.component(MyTitle.name,MyTitle) 

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
