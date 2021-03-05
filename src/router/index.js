import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: {layout: "main"},
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import(/* webpackChunkName: "about" */ '../views/Profile.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
  {
    path: '/establishment',
    name: 'Establishment',
    component: () => import(/* webpackChunkName: "about" */ '../views/Establishment.vue')
  },
  {
    path: '/meal',
    name: 'Meal',
    component: () => import(/* webpackChunkName: "about" */ '../views/Meal.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const currentUser = false

 console.log(to.meta)
  if (to.name ==='Profile' && !currentUser) {
    next({name: 'Login'})
  } else {
    next()
  }
})

export default router
