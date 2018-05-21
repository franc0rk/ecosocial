import API from 'src/api/endpoints'
import Vue from 'vue'

export default {
  all () {
    return new Promise((resolve, reject) => {
      Vue.prototype.$axios.get(API.POSTS_URL)
        .then(response => {
          resolve(response.data)
        })
        .catch(error => {
          reject(error)
        })
    })
  },
  add (post) {
    return new Promise((resolve, reject) => {
      Vue.prototype.$axios.post(API.POSTS_URL, post)
        .then(response => {
          resolve(response.data)
        })
        .catch(error => {
          reject(error)
        })
    })
  },
  vote (post_id) {
    return new Promise((resolve, reject) => {
      Vue.prototype.$axios.put(API.POSTS_URL + post_id + '/vote')
        .then(response => {
          resolve(response.data)
        })
        .catch(error => {
          reject(error)
        })
    })
  },
  unvote (post_id, vote_id) {
    return new Promise((resolve, reject) => {
      Vue.prototype.$axios.delete(API.POSTS_URL + post_id + '/vote/' + vote_id)
        .then(response => {
          resolve(response.data)
        })
        .catch(error => {
          reject(error)
        })
    })
  }
}
