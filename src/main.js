import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Scroll from './components/Scroll'
import Loading from './components/Loading'
import axios from 'axios'
Vue.prototype.$http = axios
Vue.config.productionTip = false

Vue.component('Scroll', Scroll)
Vue.component('Loading', Loading)

Vue.filter('setWH', (url, arg) => {
  return url.replace(/w\.h/, arg)
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
