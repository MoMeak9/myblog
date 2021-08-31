import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import getters from "@/store/getters";

export default new Vuex.Store({
    state: {
        token: '',
        userInfo: localStorage.getItem('userInfo'),
        items: '',
        msgPool: []
    },
    mutations: {
        setToken(state, val) {
            state.token = val
        },
        login() {
            localStorage.getItem('userInfo')
        },
        loginOut() {
            this.state.token = ''
            this.state.items = ''
            this.state.userInfo = ''
        },
        message(state, step) {
            state.msgPool.push(step)
            //将消息添加到消息列表
            setTimeout(() => {
                state.msgPool.shift()
            }, step.time);
            //清除消息
        }
    },
    actions: {},
    modules: {},
    getters
})
