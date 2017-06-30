import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login/Login'
import Archives from '@/components/archives/Archives'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/archives',
      name: 'Archives',
      component: Archives
    }
  ]
})
