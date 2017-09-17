import Vue from 'vue'
import Router from 'vue-router'
import Dream from '@/pages/dream'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Dream',
      component: Dream
    }
  ]
})
