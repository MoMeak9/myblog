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
      <v-avatar
          class="hidden-sm-and-down"
          color="grey darken-1 shrink"
          size="32"
      ></v-avatar>
    </v-app-bar>
    <v-main class="grey lighten-3">
      加个轮播图吧 v-if
      <v-container>
        <v-sheet
            style="margin: 0 auto"
            :width="width">
          <router-view></router-view>
        </v-sheet>
      </v-container>
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
        link: 'about'
      }, {
        label: '碎碎念',
        link: 'about'
      }, {
        label: '项目经历',
        link: 'about'
      }, {
        label: '留言板',
        link: 'about'
      }, {
        label: '关于',
        link: 'about'
      }
// '',
// 'Messages',
// 'Profile',
// 'Updates',
// 'Updates',
// 'Updates',
    ],
  }),
  components: {
    footerInfo,
    personal
  }
  ,
  computed: {
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
