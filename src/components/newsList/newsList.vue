<template>
<div>
    <my-title title='新闻列表'></my-title>
    <ul class="mui-table-view">
        <li class="mui-table-view-cell mui-media" v-for="(item,i) in newsList" :key=i>
            <a href="javascript:;">
                <img class="mui-media-object mui-pull-left" :src="item.imageUrl">
                <div class="mui-media-body">
                    <div class="title">
                        <span class="zhaiyao">{{item.zhaiyao}}</span>
                        <p class='list_title'>
                            <span class="time">{{item.addTime | dataFmt('YYYY/MM/DD h:mm:ss')}}</span>
                            <span class="click">{{item.click}}</span>

                        </p>
                    </div>
                    <p class='mui-ellipsis'>{{item.title}}</p>
                </div>
            </a>
        </li>
        
	</ul>
</div>
    
</template>
<script>
export default {
    data(){
        return {
            newsList: []
        }
    },
    created() {
        this.getnewslist()
    },
    methods: {
        // 获取新闻列表；
        getnewslist () {
            this.axios.get('data/newsList.json').then(res=>{
                this.newsList=res.data.data.newsList
            })
        }
    }
}
</script>
<style>

/** 列表样式 */
.mui-table-view-cell>a:not(.mui-btn){
    padding-bottom:0px;
    line-height: 26px;
}
.title:after{
    content: "";
    display: block;
    clear: both;
}
.zhaiyao{
    float:left;
    width:40%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.list_title{
    display: flex;
    float:right;
    width:55%;
}
.click{
    color:blue;
}
.time{
    margin-right: 10px;
}
</style>
