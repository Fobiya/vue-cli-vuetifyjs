import Vue from 'vue'
import '../node_modules/vuetify/dist/vuetify.min.css';
import App from './App'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'


import firebaseConfig from './config/firebase'
import firebase from 'firebase'

// Firebase App (the core Firebase SDK) is always required and must be listed first
//import firebase from "firebase/app"
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
//import "firebase/analytics"

// Add the Firebase products that you want to use
//import "firebase/auth"
//import "firebase/firestore"

Vue.use(Vuetify)

Vue.config.productionTip = false

firebase.initializeApp(firebaseConfig)

/* eslint-disable no-new */
new Vue({

  el: '#app',
  router,
  store,
  render: h => h(App),
    vuetify : new Vuetify(),
  iconfont: 'mdi' // 'md' || 'mdi' || 'fa' || 'fa4'
})
