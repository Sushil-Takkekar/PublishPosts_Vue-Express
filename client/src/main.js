import Vue from 'vue'
import App from './App.vue'
import Routes from './routes/index'

Vue.config.productionTip = false

new Vue({
  router: Routes, //added later
  render: h => h(App),
}).$mount('#app')
