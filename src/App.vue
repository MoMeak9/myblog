<template>
  <v-app>
    <v-navigation-drawer
        v-model="drawer"
        app
    >
      <personal></personal>
    </v-navigation-drawer>
    <top-bar @changeDrawer="drawer = !drawer"></top-bar>
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
import Message from "@/components/layout/message.vue";
import topBar from "@/components/layout/topBar";

export default {
  data: () => ({
    drawer: false
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
    Message,
    topBar
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
    // this.$Message.success({
    //   message: "Hello World!",
    //   time: 3000, //提示框显示的时间
    //   light: false,//设置为true则提示框背景为透明
    // });
    // //使用2
    // this.$Message.error('Hello World!')
  }
}
</script>
<style lang="scss">
a {
  text-decoration: none;
}
</style>
