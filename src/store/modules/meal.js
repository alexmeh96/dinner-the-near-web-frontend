import axios from "axios";

const API_URL = 'http://localhost:3000/meal/';

export default {
  state: {

  },
  getters: {

  },
  mutations: {

  },
  actions: {
    async mealAct() {
      try {
        return (await axios.get(API_URL)).data

      } catch (e) {
        console.log(e)
        throw e
      }
    },

    async addMealAct(ctx, {file, name, description, restaurantId}) {
      try {
        const formData = new FormData()
        formData.append("file", file)
        formData.append("name", name)
        formData.append("description", description)
        formData.append("restaurantId", restaurantId)
        return (await axios.post(API_URL + 'add', formData,
          {
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'multipart/form-data'
            }
          }

        )).data

      } catch (e) {
        console.log(e)
        throw e
      }
    },

    async addMealImg(ctx, {files, mealId}) {
      console.log(files)
      const formData = new FormData()
      for (const i of Object.keys(files)) {
        formData.append('image', files[i])
      }
      formData.append("image", files)
      formData.append("mealId", mealId)

      return (await axios.post(API_URL + 'images', formData,
        {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'multipart/form-data'
          }
        }

      )).data

    },

    async mealPopularAct() {
      try {
        return (await axios.get(API_URL)).data

      } catch (e) {
        console.log(e)
        throw e
      }
    },

    async oneMealAct(ctx, {id}) {
      try {
        return (await axios.get(API_URL + id)).data

      } catch (e) {
        console.log(e)
        throw e
      }
    }
  }

}
