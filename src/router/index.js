import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/Home'

// tabbar的组件导入
import Vip from '@/components/vip/Vip'
import Find from '@/components/find/Find'
import Cart from '@/components/cart/Cart'

import NewsList from '@/components/newsList/newsList'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/vip',
      name: 'vip',
      component: Vip
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    },
    {
      path: '/find',
      name: 'find',
      component: Find
    },
    {
      path: '/news/newslist',
      name: 'newslist',
      component: NewsList
    }
  ]
})
