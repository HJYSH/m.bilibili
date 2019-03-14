import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/home'
import Nav from '@/pages/nav/nav'
import Rank from '@/pages/detail/rank'
import Detail2 from '@/pages/detail-second/detail2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/nav/:id',
      name: 'nav',
      component: Nav
    },
    {
      path: '/rank/:id',
      name: 'rank',
      component: Rank
    },
    {
      path: '/detail2/:id',
      name: 'detail2',
      component: Detail2
    }
  ]
})
