import Vue from 'vue'
import hljs from 'highlight.js'
import 'highlight.js/styles/googlecode.css' // 样式文件
Vue.directive('highlight', function (el) {
    let blocks = el.querySelectorAll('pre code')
    blocks.forEach((block) => {
        hljs.highlightBlock(block)
    })
})
hljs.highlightCode = function () {
    //自定义highlightCode方法，将只执行一次的逻辑去掉
    let blocks = document.querySelectorAll('pre code');
    [].forEach.call(blocks, hljs.highlightBlock);
};
// https://blog.csdn.net/weixin_45266125/article/details/103457165
