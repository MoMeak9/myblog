import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import getters from "@/store/getters";

export default new Vuex.Store({
    state: {
        token: '',
        userInfo: '',
        items:''
    },
    mutations: {
        setToken(state, val) {
            state.token = val
        },
        loginOut() {
            this.state.token = ''
            this.state.items = ''
        }
    },
    actions: {},
    modules: {},
    getters
})
