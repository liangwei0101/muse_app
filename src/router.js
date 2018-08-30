import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/HomeDetail',
      name: 'HomeDetail',
      component: () => import('./views/BookDetail.vue')
    },
    {
      path: '/MyZone',
      name: 'MyZone',
      component: () => import('./views/MyZone.vue')
    },
    {
      path: '/MyBorrow',
      name: 'MyBorrow',
      component: () => import('./views/MyBorrow.vue')
    },
    {
      path: '/BookComment',
      name: 'BookComment',
      component: () => import('./views/BookComment.vue')
    },
    {
      path: '/BorrowConfirm',
      name: 'BorrowConfirm',
      component: () => import('./views/BorrowConfirm.vue')
    },
  ]
})
