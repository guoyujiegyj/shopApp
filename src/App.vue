<template>
  <div id="app">
    <!--header-->
    <mt-header title="固定在顶部"></mt-header>

    <router-view/>

    <!--tababr-->
     <mt-tabbar v-model="selected">
        <mt-tab-item id="find">
            <img slot="icon" src="./assets/image/find.png">
            查找
        </mt-tab-item>
        <mt-tab-item id="home">
            <img slot="icon" src="./assets/image/home.png">
            首页
        </mt-tab-item>
        <mt-tab-item id="cart">
            <img slot="icon" src="./assets/image/cart.png">
            购物车
        </mt-tab-item>
        <mt-tab-item id="vip">
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
  watch: {
    // 此处不能用箭头函数。
    selected:function(newVal,oldVal) {
      // 参数是id的值。
    
      this.$router.push({name:newVal})
      console.log(this.selected)
    }
  }
}
</script>

<style>
  body{
     max-width: 460px;
  }
</style>
