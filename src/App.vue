<template>
  <v-app id="inspire">
    <v-app-bar
        app
        color="white"
        flat
    >
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
            v-for="link in links"
            :key="link"
            :to="link"
        >
          {{ link }}
        </v-tab>
      </v-tabs>

      <v-avatar
          class="hidden-sm-and-down"
          color="grey darken-1 shrink"
          size="32"
      ></v-avatar>
    </v-app-bar>
    <v-main class="grey lighten-3">
      <v-container>
        <v-row>
          <v-col
              cols="16"
          >
            <v-sheet
                rounded="lg"
                min-height="268"
            >
              <!--  -->
            </v-sheet>
          </v-col>

          <v-col
              cols="16"
              sm="6"
          >
            <v-sheet
                min-height="70vh"
                rounded="lg"
            >
              <router-view></router-view>
            </v-sheet>
          </v-col>

          <v-col
              cols="16"
          >
            <v-sheet
                rounded="lg"
                min-height="268"
            >
              <personal></personal>
            </v-sheet>
          </v-col>
        </v-row>
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
    links: [
      'Dashboard',
      'Messages',
      'Profile',
      'Updates',
    ],
  }),
  components: {
    footerInfo,
    personal
  }
}
</script>
<style>
a {
  text-decoration: none;
}
</style>
