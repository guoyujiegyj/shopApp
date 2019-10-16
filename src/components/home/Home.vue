<template>
<div>
    <!--轮播-->
    <mt-swipe :auto="4000">
        <mt-swipe-item v-for="(item,i) in lunboList" :key="i">
            <img :src="item.imgUrl" alt="a">
            <span>ssssssssssssssssssss</span>
        </mt-swipe-item>
    </mt-swipe>
    <!--九宫格-->
    <my-ul></my-ul>
</div>

</template>
<script>

export default {
    data() {
        return {
            lunboList: []
        }
    },
    created() {
        this.getLunboList()
    },
    methods: {
        getLunboList() {
            this.axios.get('static/data/home.json').then(res=>{
                this.lunboList = res.data.data.swiperList    
            })
        }
    }
}
</script>
<style>
.mint-swipe-items-wrap{
    height:160px;
}
.mint-swipe-items-wrap img{
    /* width:100%; */
   
}
</style>

