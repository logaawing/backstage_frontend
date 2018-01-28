import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login/Login'
import Main from '@/components/main/Main'
import Welcome from '@/components/welcome/welcome'
import NoFound from '@/components/noFound/noFound'
import order  from '@/components/order/order'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path:'/login',
      component:Login
    },
    {
      path:'/main',
      component:Main,
      children:[
        {
          path:'/',
          component:Welcome
        },
        {
          path:"/welcome",
          component:Welcome
        },
        {
          path:"/noFound",
          component:NoFound
        },
        {
          path:"/order",
          component:order
        }
      ]
    }
  ]
})
