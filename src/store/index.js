import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token:'',
    userInfo:'',
  },
  mutations: {
    setToken(state,val) {
      state.token = val
    },
    loginOut(){
      this.state.token = null
    }
  },
  actions: {
  },
  modules: {
  }
})
