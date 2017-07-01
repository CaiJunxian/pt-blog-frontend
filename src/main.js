// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'
import App from '@/App'
import router from '@/router'
import store from '@/store/index'
import '@/assets/stylus/index.styl'
/* eslint-disable no-unused-vars */
import iconfont from '@/assets/js/iconfont.js'

Vue.config.productionTip = false

Vue.use(VueResource)

Vue.filter('toDate', date => {
  const d = new Date(date)
  return `${d.getFullYear()}年${(d.getMonth() + 1)}月${d.getDate()}日`
})

Vue.filter('toMonth', date => {
  const d = new Date(date)
  return `${d.getFullYear()}年${(d.getMonth() + 1)}月`
})

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
