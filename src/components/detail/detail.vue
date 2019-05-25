<template>
    <div>
        <div class="good-span">
            <span v-show="count!==0"  @click.stop="add(index,false)">
                <i class="el-icon-remove" style="color: aquamarine"></i>
            </span>
            <span>{{count}}</span>
            <span   @click.stop="add(index,true)">
                <i class="el-icon-circle-plus" style="color: aquamarine"></i>
            </span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "detail",
        props: {
            item: {
                type: Array
            },
            index: Number
        },
        data(){
            return{
                count: 0,
                list: [],
                allprice: 0,
                total: 0,
                totals:0
            }
        },
        methods: {
            add (index,isAdd){
                if(isAdd){
                    this.count++
                }else {
                    this.count--
                }
                this.priceAdd(index)
            },
            priceAdd(index){
                this.allprice = this.count * this.item[index].price
                console.log('单个金额'+this.allprice)
                this.allplan()
            },
            allplan(){
                this.total =0
                this.total += this.allprice
                console.log(this.total)
            }
        }
    }
</script>

<style scoped>
    .good-span{
        margin-left: 120px;
        margin-bottom: 5px;
    }
    .good-span>span{
        padding: 3px;
        cursor: pointer;
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
    li{
        display: inline-block;
    }
    ul{
        background: azure;
    }
</style>
