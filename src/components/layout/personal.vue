<template>
  <div id="personal">
    <v-avatar
        color="orange"
        size="100"
    >
      <img
          src="https://cdn.vuetifyjs.com/images/john.jpg"
          alt="John"
      >
    </v-avatar>
    <h3>sss</h3>
    <span>sssssss</span>
    <div>
      <v-chip
          class="ma-2"
          label
      >
        Label
      </v-chip>

      <v-chip
          class="ma-2"
          color="pink"
          label
          text-color="white"
      >
        <v-icon left>
          mdi-label
        </v-icon>
        Tags
      </v-chip>

      <v-chip
          class="ma-2"
          color="primary"
          label
      >
        <v-icon left>
          mdi-account-circle-outline
        </v-icon>
        John Leider
      </v-chip>

      <v-chip
          class="ma-2"
          color="pink"
          label
          text-color="white"
      >
        <v-icon left>
          mdi-label
        </v-icon>
        Tags
      </v-chip>

      <v-chip
          class="ma-2"
          color="primary"
          label
      >
        <v-icon left>
          mdi-account-circle-outline
        </v-icon>
        John Leider
      </v-chip>
    </div>
    <v-divider>sss</v-divider>
    <icon></icon>
    <!--      <v-btn-->
    <!--          style="margin-right: 5px"-->
    <!--          depressed-->
    <!--      >-->
    <!--        <v-icon>mdi-minus</v-icon>-->
    <!--        登入-->
    <!--      </v-btn>-->
    <v-btn
        depressed
    >
      登出
    </v-btn>
  </div>
</template>
<script>
import icon from "@/components/icon";

export default {
  name: "personal",
  components: {
    icon
  }
}
</script>

<style scoped lang="scss">
#personal {
  padding: 20px 0 20px;
  text-align: center;
}
</style>
