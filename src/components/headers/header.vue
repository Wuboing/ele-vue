<template>
    <div class="header-bg">
        <div class="header-content">
            <img @click="dialogVisible=true" :src="foot.avatar"/>
            <span class="title" @click="dialogVisible=true">{{foot.name}}</span>
            <p class="content">平均时间:{{foot.deliveryTime}}分钟/{{foot.minPrice}}起送</p>
            <el-button size="mini" class="right" type="info" @click="dialogVisible=true" plain>详情<i class="el-icon-caret-top"></i></el-button>
        </div>
        <div v-if="dialogVisible" class="more">
            <div class="main">
                <h1 class="main-header">{{foot.name}}</h1>
                <el-rate
                        :size="48"
                        class="star-icon"
                        v-model="value"
                        disabled
                        show-score
                        text-color="#ff9900"
                        score-template="{value}"></el-rate>
                <p class="main-font">{{foot.bulletin}}</p>
                <ul>
                    <li class="text" v-for="lists in foot.supports">
                        <i class="el-icon-star-on color"><span>{{lists.description}}</span></i>
                    </li>
                </ul>
                <div>
                    <i class="el-icon-close color" style="font-size: 30px;cursor:pointer;" @click="dialogVisible=false"></i>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "headers",
        props: ['foot'],
        data () {
            return {
                dialogVisible: false,
                value: 2
            }
        },
        mounted() {
            this.value = this.foot.score
        }
    }
</script>

<style scoped>
.header-bg{
    background: #EBEEF5;
    padding: 10px 0;
}
.header-content{text-align: center;}
.title{
    font-size: 20px;
    margin-left: 8px;
    color: black;
}
img{
    width: 64px;
    height: 64px;cursor: pointer;
}
    .content{
        font-size: 14px;
        margin: 8px;
        display: inline-block;
    }
    .right{
        float: right;
        position: relative;
        top: 25px;
        z-index: 9999;
    }
    .color{color: orange;}
    .more{
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        overflow: hidden;
        outline: 0;
        -webkit-overflow-scrolling: touch;
        background-color: rgb(0, 0, 0);
        filter: alpha(opacity=60);
        background-color: rgba(0, 0, 0, 0.9);
        z-index: 9999;
    }
    .main{
        margin: 100px 50px;
    }
    .main-font{
        font-size: 18px;
        color: aquamarine;
    }
    .main-header{
        font-size: 20px;
        color: darkorange;
    }
    .text{
        margin: 30px 80px;
        text-align: left;
    }
    .star-icon{
        padding-bottom: 50px;
    }
    .main>div{text-align: center;}
</style>
