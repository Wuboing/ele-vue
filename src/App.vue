<template>
  <div id="app">
    <ele-header :foot="foot"></ele-header>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="商品" name="goods"></el-tab-pane>
      <el-tab-pane label="评分" name="ratings"></el-tab-pane>
      <el-tab-pane label="商家" name="seller"></el-tab-pane>
    </el-tabs>
    <router-view></router-view>
  </div>
</template>

<script>
  import headers from './components/headers/header'
  import '../static/css/reset.css'
  export default {
    data() {
      return {
        activeName: 'goods',
        foot: {}
      }
    },
    created: function () {
     this.$http.get('/api2/seller').then((response) => {
       console.log(response.data)
       this.foot = response.data.data
     })
    },
    components: {
      'ele-header': headers
    },
    methods: {
      handleClick(tab) {
        this.$router.push(tab)
      }
    }
  }
</script>

<style lang="scss">
#app {
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
