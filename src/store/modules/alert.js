
export default {
  state: {
    message: ''
  },
  getters: {

  },
  mutations: {
    setAlert(state, {text}) {
      console.log(text)
      state.message = text
    },

  },
  actions: {

  }

}
