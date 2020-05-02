import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    success: false,
    username: 'demo'
  },
  getters: {
    username: state => state.username,
    auth: state => state.success
  },
  mutations: {
    loginSuccess (state, data) {
      state.success = data.success
      state.username = data.username
    }
  },
  actions: {
    loginSuccess (context, data) {
      context.commit('loginSuccess', data)
    }
  }
})
