<template>
    <div class="title">
        <!--header-->
        <mt-header :title="title">
            <div @click=handleBack  slot="left">
                <mt-button icon="back" ></mt-button>
            </div>
        </mt-header>
    </div>
</template>
<script>
export default {
    props:['title'],
    name:'my-title',
    data() {
        return{

        }
    },
    methods: {
    // 返回按钮。
        handleBack() {
            this.$router.back()
        }
    }
}

</script>
<style>
.title .mint-header{
    background-color:#fff;
    color:black;
}
</style>

