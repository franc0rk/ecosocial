import Vue from 'vue'
import Vuex from 'vuex'

import users from './users'
import posts from './posts'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    users,
    posts
  }
})

export default store
