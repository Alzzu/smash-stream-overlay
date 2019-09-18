import Vue from 'vue'
import axios from 'axios'
import SuiVue from 'semantic-ui-vue'
import VueSocketIO from 'vue-socket.io'

import db from './datastore'

import App from './App'
import router from './router'
import store from './store'

import 'semantic-ui-css/semantic.min.css'

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

Vue.prototype.$db = db
Vue.prototype.$appName = 'My App'

Vue.use(SuiVue)

Vue.use(
  new VueSocketIO({
    debug: true,
    connection: 'http://localhost:1234',
    vuex: {
      store,
      actionPrefix: 'SOCKET_',
      mutationPrefix: 'SOCKET_'
    }
  })
)

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
