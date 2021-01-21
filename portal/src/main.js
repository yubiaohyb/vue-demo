import Vue from 'vue'
import axios from 'axios'
import App from './App.vue'

Vue.config.productionTip = false
Vue.prototype.$ajax = axios
axios.defaults.baseURL = 'http://localhost:8080'


new Vue({
  render: h => h(App),
}).$mount('#app')
