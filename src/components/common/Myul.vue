<template>
    <ul class="mui-table-view mui-grid-view mui-grid-9">
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
            <img class="mui-icon mui-icon-home" src="@/assets/image/menu1.png" alt="">
            <div class="mui-media-body">主页</div></a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
            <img class="mui-icon mui-icon-home" src="@/assets/image/menu2.png" alt="">
            <div class="mui-media-body">点餐</div></a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
            <img class="mui-icon mui-icon-home" src="@/assets/image/menu3.png" alt="">
            <div class="mui-media-body">车子</div></a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
            <img class="mui-icon mui-icon-home" src="@/assets/image/menu4.png" alt="">
            <div class="mui-media-body">支付</div></a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
            <img class="mui-icon mui-icon-home" src="@/assets/image/menu5.png" alt="">
            <div class="mui-media-body">确认</div></a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
            <img class="mui-icon mui-icon-home" src="@/assets/image/menu6.png" alt="">
            <div class="mui-media-body">列表</div></a>
        </li>
	</ul>
</template>
<script>

export default {
    name:'my-ul',
    data() {
        return {

        }
    }
}
</script>
<style>
/*
九宫格

*/
.mui-table-view img{
    width:60px;
    height:60px;
}
.mui-grid-view.mui-grid-9{
    background:#fff;
}
</style>
