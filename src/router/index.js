import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login/Login'
import Archives from '@/components/archives/Archives'
import Articles from '@/components/articles/Articles'
import Article from '@/components/article/Article'

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
    },
    {
      path: '/articles',
      name: 'Articles',
      component: Articles
    },
    {
      path: '/article',
      name: 'Article',
      component: Article
    }
  ]
})
