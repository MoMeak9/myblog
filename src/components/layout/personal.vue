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
    <div>
      <v-btn icon>
        <a title="微信联系">
          <v-icon color="green">mdi-wechat</v-icon>
        </a>
      </v-btn>
      <v-btn icon>
        <a href="https://github.com/MoMeak9" title="Github主页">
          <v-icon color="black">mdi-github</v-icon>
        </a>
      </v-btn>
      <v-btn icon>
        <a title="企鹅联系">
          <v-icon color="blue">mdi-qqchat</v-icon>
        </a>
      </v-btn>
      <v-btn icon>
        <a title="新浪微博">
          <v-icon color="red">mdi-sina-weibo</v-icon>
        </a>
      </v-btn>
      <v-btn icon>
        <a title="邮箱找我">
          <v-icon color="orange">mdi-email</v-icon>
        </a>
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: "personal"
}
</script>

<style scoped lang="scss">
#personal {
  padding: 20px 0 20px;
  text-align: center;
}
</style>
