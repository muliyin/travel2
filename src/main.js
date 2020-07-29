import Vue from 'vue'
import App from './App.vue'
import store from './store/store'
import router from "./router/index"
/*初始化样式*/
import './assets/styles/reset.css'
/*一像素边框*/
import './assets/styles/border.css'
/*解决移动端点击300ms延迟*/
import fastClick from 'fastclick'

Vue.config.productionTip = false

fastClick.attach(document.body)

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
