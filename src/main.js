import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './utils/store'
import Cookies from 'js-cookie'

Vue.config.productionTip = false

import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
Vue.use(MuseUI)
Vue.use(Cookies)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
