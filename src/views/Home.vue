<template>
  <v-container id="home">
    <v-row justify="center">
      <v-col :cols="$vuetify.breakpoint.xs?0:3"
             v-if="!$vuetify.breakpoint.xs"
      >
        <v-skeleton-loader
            v-if="loading"
            type="card-heading,list-item-two-line@2"
        ></v-skeleton-loader>
        <classify-menu :classItem="classItem" v-else></classify-menu>
      </v-col>
      <v-col :cols="$vuetify.breakpoint.xs?0:8"
             offset-sm="0">
        <v-sheet class="article-list">
          <h1>最近文章</h1>
          <div v-if="loading">
            <v-skeleton-loader
                v-for="item in 6" :key="item"
                type="card-heading,list-item-two-line@2"
            ></v-skeleton-loader>
          </div>
          <div v-else v-for="item in allArticles" :key="item.id">
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
      this.loading = true
      queryAllArticle({}).then((res) => {
        this.loading = false
        this.allArticles = res.data.allArticle
        this.classItem = res.data.classify
      })
      setTimeout(() => {
        this.loading = false
        this.$Message.error({
          message: '加载失败',
          time: 3000,
          light: false,
        })
      }, 3000)
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
