import Vue from 'vue'
import Vuex from 'vuex'

import storage from 'store'
import {login} from '@/api/user'
import {getUserInfo} from '@/api/user'
import getters from "./getters";
// 更改密码

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        token: '',
        userInfo: '',
        items: '',
        msgPool: []
    },
    mutations: {
        setToken: (state, token) => {
            state.token = token
        },
        setUserInfo: (state, userInfo) => {
            state.userInfo = userInfo
        },
        signOut(state) {
            state.uuid = ''
            state.userInfo = ''
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
    actions: {
        Login({commit}, userInfo) {
            return new Promise((resolve, reject) => {
                login(userInfo).then(res => {
                    commit('setToken', res.token)
                    resolve()
                }).catch(error => {
                    reject(error)
                })
            })
        },
        // 登出
        Logout({commit}) {
            return new Promise((resolve) => {
                commit('signOut')
                storage.remove('token')
                resolve()
            })
        },
        //    获取用户信息
        getUserInfo({commit}) {
            return new Promise((resolve, reject) => {
                try {
                    getUserInfo({}).then(res => {
                        if (res) {
                            commit('setUserInfo', res.userInfo)
                            resolve(res)
                        } else {
                            commit('Logout')
                            storage.remove('token')
                            reject('获取用户信息失败')
                        }
                    }).catch(err => {
                        reject(err)
                    })
                } catch (error) {
                    reject(error)
                }
            })
        }
    },
    getters
})
