import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import VueParticles from 'vue-particles'
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import animated from 'animate.css'

Vue.use(VueParticles)
Vue.use(mavonEditor)
Vue.use(animated)
Vue.config.productionTip = false

new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
}).$mount('#app')
