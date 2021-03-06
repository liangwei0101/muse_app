import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/homeDetail',
      name: 'HomeDetail',
      component: () => import('./views/BookDetail.vue')
    },
    {
      path: '/myZone',
      name: 'MyZone',
      component: () => import('./views/MyZone.vue')
    },
    {
      path: '/myBorrow',
      name: 'MyBorrow',
      component: () => import('./views/MyBorrow.vue')
    },
    {
      path: '/bookComment',
      name: 'BookComment',
      component: () => import('./views/BookComment.vue')
    },
    {
      path: '/borrowConfirm',
      name: 'BorrowConfirm',
      component: () => import('./views/BorrowConfirm.vue')
    },
    {
      path: '/borrowDetail',
      name: 'BorrowDetail',
      component: () => import('./views/BorrowDetail.vue')
    },
    {
      path: '/borrowSuccess',
      name: 'BorrowSuccess',
      component: () => import('./views/BorrowSuccess.vue')
    },
    {
      path: '/wantReadBook',
      name: 'WantReadBook',
      component: () => import('./views/WantReadBook.vue')
    },
    {
      path: '/wantReadDetail',
      name: 'WantReadDetail',
      component: () => import('./views/WantReadDetail.vue')
    },
    {
      path: '/wantReadList',
      name: 'WantReadList',
      component: () => import('./views/WantReadList.vue')
    },
    {
      path: '/',
      name: 'Login',
      component: () => import('./views/Login.vue')
    },
    {
      path: '/Register',
      name: 'Register',
      component: () => import('./views/Register.vue')
    },
  ]
})
