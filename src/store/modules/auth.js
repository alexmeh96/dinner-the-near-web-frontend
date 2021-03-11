import axios from "axios";
import User from "@/models/user";

const API_URL = 'http://localhost:3000/auth/';

export default {
  state: {
    loggedIn: false,
    user: new User('', '', ''),
    token: {}
  },
  getters: {
    getLoggedIn(state) {
      return state.loggedIn
    },
    getUser(state) {
      return state.user
    } ,
    getToken: s => s.token,
  },
  mutations: {
    loginMut(state, data) {
      state.token = {
        tokenValue: data.access_token,
        expiresIn: data.expiresIn,
      }
      state.loggedIn = true
      state.user = new User(data.user.username, data.user.email)
      if (data.user.id === 1) {
        state.user.isAdmin = true
      }
    },

    logoutMut(state) {
      state.loggedIn = false
      state.token = {}
      state.user = new User()
    }

  },
  actions: {
    async loginAct(ctx, {email, password}) {
      try {
        const data = (await axios.post(API_URL + 'login', {
          email,
          password
        })).data
        ctx.commit('loginMut', data)
      } catch (e) {
        console.log(e)
        throw e
      }
    },
    async registerAct(ctx, {username, email, password}) {
      try {
        await axios.post(API_URL + 'register', {
          username,
          email,
          password
        })

      } catch (e) {
        console.log(e)
        throw e
      }
    },

    logoutAct(ctx) {
      ctx.commit('logoutMut')
    }

  }
}
