import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

let abc = '5678'

console.log(abc)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
