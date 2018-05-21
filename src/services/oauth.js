import API from 'src/api/endpoints'
import Vue from 'vue'

export default {
  authenticate (username, password) {
    let payload = {
      client_id: API.CLIENT_ID,
      client_secret: API.CLIENT_SECRET,
      grant_type: API.CLIENT_GRANT_TYPE,
      username: username,
      password: password
    }

    return new Promise((resolve, reject) => {
      Vue.prototype.$axios.post(API.TOKEN_URL, payload)
        .then(response => {
          resolve(response.data)
        })
        .catch(error => {
          reject(error)
        })
    })
  },
  logout () {
    localStorage.removeItem('auth_token')
  },
  getAuthToken () {
    return localStorage.getItem('auth_token')
  }
}
