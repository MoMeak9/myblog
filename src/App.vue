<template>
  <v-app>
    <v-navigation-drawer
        v-model="drawer"
        app
    >
      <personal></personal>
    </v-navigation-drawer>
    <v-app-bar
        app
        elevate-on-scroll
        color="white"
        flat
    >
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-btn
          :color="$vuetify.breakpoint.smAndDown ? '' : 'transparent'"
          size="32"
          icon
      >
        <v-icon>mdi-google-translate</v-icon>
      </v-btn>
      <v-tabs
          centered
          class="ml-n9"
          color="grey"
          value=""
          center-active
      >
        <v-tab
            v-for="(item,index) in links"
            :key="index"
            :to="item.link"
        >
          {{ item.label }}
        </v-tab>
      </v-tabs>
      <v-btn
          :color="$vuetify.breakpoint.smAndDown ? 'transparent' : ''"
          size="32"
          icon
      >
        <v-icon>mdi-google-translate</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main class="grey lighten-3">
      <router-view></router-view>
      <footerInfo></footerInfo>
    </v-main>
    <Message/>
  </v-app>
</template>

<script>
import footerInfo from "@/components/layout/footerInfo";
import personal from "@/components/layout/personal";
import Message from "./components/layout/message.vue";

export default {
  data: () => ({
    drawer: false,
    links: [
      {
        label: '首页',
        link: '/'
      }, {
        label: '文章归档',
        link: '/classify'
      }, {
        label: '照片墙（用瀑布流）',
        link: ''
      }, {
        label: '个人中心',
        link: '/personal'
      }, {
        label: '文章管理',
        link: '/manager/my'
      }, {
        label: '关于',
        link: '/about'
      }
    ],
  }),
  created() {
    // 在页面加载时读取sessionStorage 是存储在相关对象，而不是单独存储
    if (localStorage.getItem('store')) {
      this.$store.replaceState(Object.assign({}, this.$store.state, JSON.parse(localStorage.getItem('store'))))
    }
    // 在页面刷新时将store保存到sessionStorage里
    window.addEventListener('beforeunload', () => {
      localStorage.setItem('store', JSON.stringify(this.$store.state))
    })
  },
  components: {
    footerInfo,
    personal,
    Message
  },
  computed: {
    // 改为全局计算属性
    // eslint-disable-next-line vue/return-in-computed-property
    width() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return '100%'
        case 'sm':
          return '100%'
        case 'md':
          return '100%'
        case 'lg':
          return '60vw'
        case 'xl':
          return '60vw'
      }
    }
  },
  mounted() {
    //使用1
    this.$Message.success({
      message: "Hello World!",
      time: 3000, //提示框显示的时间
      light: false,//设置为true则提示框背景为透明
    });
    //使用2
    this.$Message.error('Hello World!')
  }
}
</script>
<style lang="scss">
a {
  text-decoration: none;
}
</style>
