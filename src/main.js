import Vue from 'vue'
import '../node_modules/vuetify/dist/vuetify.min.css';
import App from './App'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'



Vue.use(Vuetify)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({

  el: '#app',
  router,
  store,
  render: h => h(App),
    vuetify : new Vuetify(),
  iconfont: 'mdi' // 'md' || 'mdi' || 'fa' || 'fa4'
})