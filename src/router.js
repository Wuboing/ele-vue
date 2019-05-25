import Vue from 'vue'
import Router from 'vue-router'
import goods from './components/goods/goods'
import ratings from './components/ratings/ratings'
import seller from './components/seller/seller'
import details from './components/detail/detail'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'goods',
      component: goods
    },
    {
      path: 'ratings',
      name: 'ratings',
      component: ratings
    },
    {
      path: 'seller',
      name: 'seller',
      component: seller
    },
    {
      path: 'details',
      name: 'details',
      component: details
    }
  ]
})
