// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
//import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex/store.js'
import { createApp } from 'vue'
//import { createStore } from 'vuex'

//Vue.config.productionTip = false

/* eslint-disable no-new */

const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')

//new Vue({
//  el: '#app',
//  router,
//  components: { App },
//  template: '<App/>'
//})