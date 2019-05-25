<template>
    <div>
        <ul>
            <li v-for="good in goods">
                <p class="good-header">{{good.name}}</p>
                <ul>
                    <li v-for="(list,index) in good.foods" :key="index">
                        <div class="good-border">
                            <img :src="list.image">
                            <p>{{list.name}}</p>
                            <p>{{list.price}}元</p>
                            <detail :item="good.foods" :index="index"></detail>
                        </div>
                    </li>
                </ul>
            </li>
        </ul>
        <span class="foot" @click="playmo"><i class="el-icon-menu"></i></span>
    </div>
</template>

<script>
    import detail from '../detail/detail'
    export default {
        name: "goods",
        components:{
          detail
        },
        data (){
            return{
                goods: {},
                oneprice: 0,
                selectedFood: {}
            }
        },
        mounted() {
            this.$http.get('/api2/goods').then((response) => {
                this.goods = response.data.data
                console.log(this.goods)
            })
        },
        methods:{
            playmo (){
                alert('支付')
            }
        }
    }
</script>

<style scoped>
.good-header{
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    background: aqua;
    font-size: 14px;
    text-align: center;
    letter-spacing:5px;
    line-height: 24px;
}
img{
    width: 200px;
    height: 200px;
}
.good-border{
    margin: 10px;
    box-sizing: border-box;
    display: inline-block;
    width: 200px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
}
.good-border>p{
    margin-top: 10px;
    font-size: 16px;
    font-weight: 400;
    text-align: center;
    white-space: normal;
    text-overflow: ellipsis;
    padding-bottom: 15px;
}
.good-header+ul>li{
    display: inline-block;
}
.good-header+ul{
    background: azure;
}
    .foot{
        position: fixed;
        right: 20px;
        top: 80%;
        cursor: pointer;
    }
    .foot>i{
        width: 80px;
        height: 80px;
        color: darkorange;
    }
</style>
