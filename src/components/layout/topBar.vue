<template>
  <v-app-bar
      app
      elevate-on-scroll
      color="white"
      height="58px"
  >
    <v-app-bar-nav-icon @click="changeDrawer"></v-app-bar-nav-icon>
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
      <div v-for="(item,index) in links" :key="index" style="padding:0 15px;">
        <a :href="item.link" style="color: black;line-height: 58px;">
          {{ item.label }}
        </a>
      </div>
    </v-tabs>
    <v-btn
        :color="$vuetify.breakpoint.smAndDown ? 'transparent' : ''"
        size="32"
        icon
    >
      <v-icon>mdi-google-translate</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: "topBar",
  data() {
    return {
      drawer: false,
      links: [
        {
          label: '首页',
          link: '/'
        }, {
          label: '文章归档',
          link: '/classify'
        }, {
          label: '关于',
          link: '/about'
        }
      ],
    }
  },
  methods: {
    changeDrawer() {
      this.$emit('changeDrawer')
    }
  }
}
</script>

<style scoped>

</style>
