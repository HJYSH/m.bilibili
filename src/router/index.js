import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/home'
import Nav from '@/pages/nav/nav'
import Detail from '@/pages/detail/detail'

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
    },
    {
      path: '/detail',
      name: 'detail',
      component: Detail
    }
  ]
})
