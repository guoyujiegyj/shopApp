<template>
  <div id="app">
    <!--header-->
    <mt-header title="固定在顶部"></mt-header>

    <router-view/>

    <!--tababr-->
     <mt-tabbar v-model="selected">
        <mt-tab-item id="tab1">
            <img slot="icon" src="./assets/image/find.png">
            查找
        </mt-tab-item>
        <mt-tab-item id="tab2">
            <img slot="icon" src="./assets/image/home.png">
            首页
        </mt-tab-item>
        <mt-tab-item id="tab3">
            <img slot="icon" src="./assets/image/cart.png">
            购物车
        </mt-tab-item>
        <mt-tab-item id="tab4">
            <img slot="icon" src="./assets/image/VIP.png">
            会员
        </mt-tab-item>
    </mt-tabbar>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: ''
    }
  },
 
}
</script>

<style>

</style>
