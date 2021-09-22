import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import VueParticles from 'vue-particles'
import animated from 'animate.css'
import Message from './utils/message'

Vue.prototype.$Message = Message
// You need a specific loader for CSS files like https://github.com/webpack/css-loader
//https://ckang1229.gitee.io/vue-markdown-editor/zh/examples/base-editor.html#%E5%BC%95%E5%85%A5

// 编辑器配置
import VMdEditor from '@kangc/v-md-editor';
import '@kangc/v-md-editor/lib/style/base-editor.css';
import githubTheme from '@kangc/v-md-editor/lib/theme/github.js';
import '@kangc/v-md-editor/lib/theme/style/github.css';
import hljs from 'highlight.js';
import VueMarkdownEditor from '@kangc/v-md-editor';
import '@kangc/v-md-editor/lib/style/base-editor.css';
import '@kangc/v-md-editor/lib/theme/style/github.css';
import createLineNumbertPlugin from '@kangc/v-md-editor/lib/plugins/line-number/index';
import createEmojiPlugin from '@kangc/v-md-editor/lib/plugins/emoji/index';
import '@kangc/v-md-editor/lib/plugins/emoji/emoji.css';
import createCopyCodePlugin from '@kangc/v-md-editor/lib/plugins/copy-code/index';
import '@kangc/v-md-editor/lib/plugins/copy-code/copy-code.css';

VueMarkdownEditor.use(createCopyCodePlugin());
VueMarkdownEditor.use(createEmojiPlugin());
VMdEditor.use(githubTheme, {
    Hljs: hljs,
});
VueMarkdownEditor.use(githubTheme, {
    Hljs: hljs,
});
VueMarkdownEditor.use(createLineNumbertPlugin());

Vue.use(VMdEditor);
Vue.use(VueParticles)
Vue.use(animated)
Vue.config.productionTip = false

new Vue({
    router,
    store,
    vuetify,
    render: h => h(App),
    mounted() {
        document.dispatchEvent(new Event('render-event'));
    },
}).$mount('#app')
