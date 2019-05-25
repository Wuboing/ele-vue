import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Resource from 'vue-resource'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './mock/mockServer'

Vue.use(Resource)
Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
