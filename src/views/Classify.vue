<template>
  <v-container id="classify">
    <v-skeleton-loader
        v-if="loading"
        type="list-item-two-line"
    ></v-skeleton-loader>
    <v-card class="d-flex flex-wrap justify-space-around " v-else>
      <v-card
          v-for="(item,index) in articleByClass"
          :key="index"
          outlined
          tile
          style="width: 400px;margin-top: 10px"
          to="/"
      >
        <h4>{{ item.className }} <span style="float: right">({{ item.num }})</span></h4>
      </v-card>
    </v-card>
    <div style="text-align: center;padding: 100px 0 "
         v-if="loading">
      <v-progress-circular
          indeterminate
          size="64"
      ></v-progress-circular>
    </div>
    <div v-for="(item,index) in articleByDate"
         :key="index" style="margin:10px 0 0"
         class="transparent">
      <v-card-title v-if="item.articleList.length > 0">
        <span>
          <v-icon>
            mdi-file-document
          </v-icon>
          {{ item.month }} ({{ item.articleList.length }})
        </span>
      </v-card-title>
      <v-card-actions v-for="(subItem,subIndex) in item.articleList" :key="subIndex" style="margin-left: 30px">
        <a :href="`/article?id=${subItem.id}`" style="margin-right: 10px">{{ subItem.create_time }} | <h3
            style="display: inline">{{ subItem.title }}</h3>
        </a>
        分类：{{ subItem.classify }}
      </v-card-actions>
    </div>
  </v-container>
</template>

<script>
import {queryAllArticleByClass} from "@/api/articles";

export default {
  name: "Classify",
  data() {
    return {
      articleByClass: {},
      articleByDate: {},
      loading: true
    }
  },
  methods: {
    queryAllArticleByClass() {
      this.loading = true
      queryAllArticleByClass({}).then(res => {
        this.articleByClass = res.data.classifyByTag
        this.articleByDate = res.data.classifyByDate
        this.loading = false
      })
      setTimeout(function () {
        this.loading = false
      }, 3000)
    }
  },
  mounted() {
    this.queryAllArticleByClass()
  }
}
</script>

<style scoped lang="scss">
#classify {
  max-width: 900px;

  .v-card {
    padding: 10px;
  }

  a {
    color: black;
  }

  a:hover {
    color: dodgerblue;
    text-decoration: underline dodgerblue;
  }
}
</style>
