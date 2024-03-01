import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 浏览器不显示非生产环境打包的提示
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router  // 注册路由器  ==>所有组件中都有可以直接访问两个对象，$router路由器对象，$route当前路由信息对象
}).$mount('#app')
