import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/home'
import Nav from '@/pages/nav/nav'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/nav',
      name: 'nav',
      component: Nav
    }
  ]
})
