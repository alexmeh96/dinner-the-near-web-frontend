import Vue from 'vue'
import Vuex from 'vuex'

import auth from './modules/auth'
import restaurant from './modules/restaurant'
import meal from './modules/meal'
import user from './modules/user'
import alert from './modules/alert'

import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

const dataState = createPersistedState({
  paths: ['auth.loggedIn']
})

export default new Vuex.Store({

  state: {

  },
  mutations: {

  },
  actions: {

  },
  modules: {
    auth,
    restaurant,
    meal,
    user,
    alert
  },
  plugins: [dataState],
})
