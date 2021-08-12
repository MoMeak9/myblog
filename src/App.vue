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
        color="white"
        flat
    >
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-avatar
          :color="$vuetify.breakpoint.smAndDown ? 'grey darken-1' : 'transparent'"
          size="32"
      ></v-avatar>
      <v-tabs
          centered
          class="ml-n9"
          color="grey darken-1"
      >
        <v-tab
            v-for="item in links"
            :key="item"
            :to="item.link"
        >
          {{ item.label }}
        </v-tab>
      </v-tabs>
    </v-app-bar>
    <v-main class="grey lighten-3">
      <router-view></router-view>
      <footerInfo></footerInfo>
    </v-main>
  </v-app>
</template>

<script>
import footerInfo from "@/components/layout/footerInfo";
import personal from "@/components/layout/personal";

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
        label: '项目经历',
        link: ''
      }, {
        label: '留言板',
        link: ''
      }, {
        label: '关于',
        link: 'about'
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
    personal
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
  }
}
</script>
<style>
a {
  text-decoration: none;
}
</style>
