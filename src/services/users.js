import API from 'src/api/endpoints'
import Vue from 'vue'

export default {
  register (user) {
    return new Promise((resolve, reject) => {
      Vue.prototype.$axios.post(API.USERS_URL + 'register', user)
        .then(response => {
          resolve(response.data)
        })
        .catch(error => {
          reject(error)
        })
    })
  },
  current () {
    return new Promise((resolve, reject) => {
      Vue.prototype.$axios.get(API.USERS_URL + 'current')
        .then(response => {
          resolve(response.data)
        })
        .catch(error => {
          reject(error)
        })
    })
  }
}
