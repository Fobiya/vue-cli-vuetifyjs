import Vue from 'vue'
import Vuex from 'vuex'
import userModule from './store/user'
import deneralModule from './store/deneral'

Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    deneralModule,
    userModule
  }
})
