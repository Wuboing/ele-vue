<template>
    <div class="out-on">
        <div>
            <img :src="seller.avatar">
            <span class="title">{{seller.name}}</span>
            <span class="content">平均时间{{seller.deliveryTime}}/最低消费{{seller.minPrice}}</span>
        </div>
        <hr/>
        <div class="border-in">
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
        <hr/>
        <div>
            <div>图片</div>
            <ul>
                <li v-for="selle in seller.pics" class="li-list">
                    <img :src="selle"/>
                </li>
            </ul>
            <hr/>
            <div>
                <ul>
                    <h1>详情介绍</h1>
                    <li v-for="list in seller.supports" class="list">
                        <p>{{list.description}}</p>
                    </li>
                </ul>
                <hr/>
                <ul>
                    <h1>商家详情</h1>
                    <li v-for="list in seller.infos" class="list">
                        <p>{{list}}</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "seller",
        data () {
          return {
              seller: {},
              value: 0,
              value1: 0,
              value2: 0
          }
        },
        mounted() {
            this.$http.get('/api2/seller').then((response) => {
                this.seller = response.data.data
                console.log(this.seller)
                this.value = this.seller.score
                this.value1 = this.seller.serviceScore
                this.value2 = this.seller.foodScore
            })
        }
    }
</script>

<style scoped>
    .out-on{padding-left: 30px;}
    img{
        width: 150px;
        height: 128px;
        padding: 4px;
        margin: 15px;
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
        margin-bottom: 80px;
    }
    .turn-right{
        margin-left: 90px;
        position: relative;
        top: -17px;
    }
    .border-in{
        border: 1px solid chartreuse;width: 300px;padding: 4px;
    }
    .li-list{
        display: inline-block;
    }
    .list{
        font-size: 12px;
        line-height: 24px;
        margin-left: 20px;
        margin-bottom: 10px;
    }
</style>
