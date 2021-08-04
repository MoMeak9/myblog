<template>
  <v-container id="home">
    <h1>最近文章</h1>
    <Articles v-for="item in 9" :key="item"></Articles>
  </v-container>
</template>

<script>
import Articles from "@/components/articlesList";

export default {
  name: 'Home',

  components: {
    Articles
  },
}
</script>
<style lang="scss" scoped>
#home {
  padding: 1rem;
  min-height: 100vh;
}
</style>
