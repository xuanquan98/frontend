import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'
import Login from '../components/Login.vue'
import ShowCv from '../components/ShowCv.vue'
// import store from '../store/index'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/showCv',
      name: 'ShowCV',
      component: ShowCv,
      meta: { auth: true },
      visible: true
    }
  ]
})
