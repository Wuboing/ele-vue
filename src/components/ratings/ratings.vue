<template>
    <div>
        <div class="ratings">
            <ul>
                <el-button class="all-ratings" size="mini" type="primary" @click="allbuttons(0)" round>全部评论</el-button>
                <el-button class="all-ratings" size="mini" type="success" @click="allbuttons(1)" round>好评</el-button>
                <el-button class="all-ratings" size="mini" type="info" @click="allbuttons(-1)" round>差评</el-button>
                <span>共{{number}}条</span>
                <li v-for="(tings,index) in rating" :key="index">
                    <el-tag class="main-tag">用户名:{{tings.username}}</el-tag>
                    <el-tag class="main-tag" type="success">评论:{{tings.text | textnull }}</el-tag>
                </li>
            </ul>
            <div class="border-con">
                <div>
                    <img :src="headers.avatar">
                    <span class="title">{{headers.name}}</span>
                    <span class="content">平均时间{{headers.deliveryTime}}/最低消费{{headers.minPrice}}</span>
                </div>
                <div>
                    <span>商家评分:</span>
                    <el-rate
                            class="turn-right"
                            v-model="value"
                            disabled
                            show-score
                            text-color="#ff9900"
                            score-template="{value}">
                    </el-rate>
                    服务评分:
                    <el-rate
                            class="turn-right"
                            v-model="value1"
                            disabled
                            show-score
                            text-color="#ff9900"
                            score-template="{value}">
                    </el-rate>
                    食品评分:
                    <el-rate
                            class="turn-right"
                            v-model="value2"
                            disabled
                            show-score
                            text-color="#ff9900"
                            score-template="{value}">
                    </el-rate>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ratings",
        data () {
            return {
                ratings: [],
                number: 0,
                rating: [],
                headers: {},
                value: 0,
                value1: 0,
                value2: 0
            }
        },
        mounted() {
            this.$http.get('/api2/ratings').then((response) => {
                this.ratings = response.data.data
                this.rating = this.ratings
                this.number = this.rating.length
            })
            this.$http.get('/api2/seller').then((response) => {
                this.headers = response.data.data
                console.log(this.headers)
                this.value = this.headers.score
                this.value1 = this.headers.serviceScore
                this.value2 = this.headers.foodScore
            })
        },
        filters: {
            textnull (text){
                if (text=== '') {
                    return text + '暂无评论'
                }else {
                    return text
                }
            }
        },
        methods: {
            allbuttons(id){
                if(id === 0) {
                    console.log('1')
                    this.rating = this.ratings
                    this.number = this.rating.length
                }else if(id === 1){
                    alert('待开发')
                }else {
                    alert('待开发')
                }
            }
        }
    }
</script>

<style scoped>
.ratings ul{
    width: 69%;
    float: left;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
    padding: 0 10px 10px 10px;
}
    .main-tag{
        margin: 8px;
    }
    .border-con{
        float: left;
        width: 25%;
        box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
        padding: 10px 10px 10px 10px;
        margin-left: 10px;
    }
    .all-ratings{
        margin-top: 10px;
    }
    img{
        width: 64px;
        height: 64px;
        vertical-align:middle;
        margin: 4px;
    }
    .title{
        vertical-align:middle;
        margin-left: 10px;
        font-size: 18px;
    }
    .content{
        font-size: 12px;
        display: inline-block;
        margin-left: 80px;
        margin-bottom: 20px;
    }
    .turn-right{
        margin-left: 90px;
        position: relative;
        top: -17px;
    }
</style>
