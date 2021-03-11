import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from '@/store'

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
    path: '/admin',
    name: 'Admin',
    component: () => import(/* webpackChunkName: "about" */ '../views/Admin.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import(/* webpackChunkName: "about" */ '../views/Profile.vue')
  },
  {
    path: '/mealPage/:mealId',
    name: 'MealPage',
    component: () => import(/* webpackChunkName: "about" */ '../views/MealPage.vue')
  },
  {
    path: '/restaurantPage/:restaurantId',
    name: 'RestaurantPage',
    component: () => import(/* webpackChunkName: "about" */ '../views/RestaurantPage.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
  {
    path: '/establishment',
    name: 'Establishment',
    component: () => import(/* webpackChunkName: "about" */ '../views/Restaurant.vue')
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

  if (to.name ==='Profile' && !store.getters.getLoggedIn) {
    next({name: 'Login'})
  } else {
    next()
  }

  if (to.name ==='Admin' && !store.getters.getUser.isAdmin) {
    next({name: 'Login'})
  } else {
    next()
  }
})

export default router
