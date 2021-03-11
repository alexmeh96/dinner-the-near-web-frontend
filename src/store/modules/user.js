import axios from "axios";

const API_URL = 'http://localhost:3000/user/';


export default {
  state: {

  },
  getters: {

  },
  mutations: {

  },
  actions: {
    async allUsersAct() {
      try {
        return (await axios.get(API_URL)).data
      } catch (e) {
        console.log(e)
        throw e
      }
    }
  }

}
