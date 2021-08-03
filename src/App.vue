<template>
  <v-app>
    <v-app-bar
        app
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Yihui'd Blog</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

    </v-app-bar>
    <v-navigation-drawer
        app
        v-model="drawer"
        absolute
        bottom
        temporary
    >
    </v-navigation-drawer>
    <v-main>
      <router-view/>
      <v-footer>
        <footer-info></footer-info>
      </v-footer>
    </v-main>
  </v-app>
</template>

<script>
import footerInfo from "@/components/layout/footerInfo";

export default {
  name: 'App',

  data() {
    return {
      drawer: false,
      group: null,
    }
  },
  components: {
    footerInfo
  },
  watch: {
    group() {
      this.drawer = false
    },
  }
};
</script>
