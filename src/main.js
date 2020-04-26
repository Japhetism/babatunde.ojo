import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { store } from './store/store'
import Home from './views/Home'

Vue.use(VueRouter)

const routes = [
  { 
    path: '/', 
    component: Home 
  },
]
const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  store: store,
  el: '#app',
  router,
  render: h => h(App)
})
