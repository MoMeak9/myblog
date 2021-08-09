<template>
  <v-container id="home">
    <v-sheet class="article-list">
      <h1>最近文章</h1>
      <Articles v-for="item in 9" :key="item"></Articles>
    </v-sheet>
  </v-container>
</template>

<script>
import Articles from "@/components/article/articlesList";

export default {
  name: 'Home',

  components: {
    Articles
  },
}
</script>
<style lang="scss" scoped>
#home {
  min-height: 100vh;

  .article-list {
    padding: 1rem;
  }
}
</style>
