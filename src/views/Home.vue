<template>
  <v-container id="home">
    <v-row justify="center">
      <v-col :cols="$vuetify.breakpoint.xs?0:3"
             v-if="!$vuetify.breakpoint.xs"
      >
        <classify-menu :classItem="classItem"></classify-menu>
      </v-col>
      <v-col :cols="$vuetify.breakpoint.xs?0:8"
             offset-sm="0">
        <v-sheet class="article-list">
          <h1>最近文章</h1>
          <v-skeleton-loader v-for="item in 6" :key="item"
                             type="card-heading,list-item-two-line@2"
          ></v-skeleton-loader>
          <div v-for="item in allArticles" :key="item.id">
            <articles-item :item="item"></articles-item>
          </div>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import articlesItem from "@/components/article/articlesItem";
import classifyMenu from "@/components/layout/classifyMenu";
import {queryAllArticle} from "@/api/articles";

export default {
  name: 'Home',
  data() {
    return {
      allArticles: [],
      classItem: [],
      loading: true
    }
  },
  components: {
    articlesItem,
    classifyMenu
  },
  methods: {
    queryAllArticle() {
      queryAllArticle({}).then((res) => {
        this.allArticles = res.data.allArticle
        this.classItem = res.data.classify
        console.log(res)
      })
    }
  },
  mounted() {
    this.queryAllArticle()
  }
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
