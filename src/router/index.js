import Vue from 'vue'
import Router from 'vue-router'

const LOAD_MAP = name => {
  return () => import(`../pages/${name}.vue`)
}

const load = function (path) {
  return LOAD_MAP(path)
}

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      redirect: '/dream'
    },
    {
      path: '/dream',
      name: 'Dream',
      component: load('dream')
    },
    {
      path: '/signup',
      name: 'Signup',
      component: load('signup')
    },
    {
      path: '/signin',
      name: 'Signin',
      component: load('signin')
    }
  ]
})
