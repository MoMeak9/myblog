<template>
  <v-container id="article">
    <v-row justify="center">
      <v-col :cols="$vuetify.breakpoint.xs?0:8"
             offset-sm="0">
        <v-sheet class="content">
          <div style="text-align: center;margin-bottom: 10px">
            <h1>{{ title }}</h1>
            <div>
              <v-chip
                  v-for="(item,index) in tag"
                  :key="index"
                  class="ma-2"
                  color="blue"
                  label
                  text-color="white"
                  small
              >
                <v-icon left>mdi-label</v-icon>
                {{ item }}
              </v-chip>
            </div>
            <div>
              <v-tooltip bottom v-for="(item,index) in statistics" :key=index>
                <template v-slot:activator="{ on, attrs }">
                  <v-icon
                      style="margin: 0 4px 0 10px"
                      color="primary"
                      small
                      dark
                      v-bind="attrs"
                      v-on="on"
                  >
                    {{ item.icon }}
                  </v-icon>
                  <span>{{ content.length }}</span>
                </template>
                <span>{{ item.label }}</span>
              </v-tooltip>
              <div> 作者：{{ writer }}</div>
            </div>
          </div>
          <v-alert
              text
              prominent
              color="info"
              icon="mdi-book-open-outline"
          >{{ synopsis }}
          </v-alert>
          <v-md-editor :value="content" mode="preview"></v-md-editor>
          <!--          <v-md-preview :text="content" ref="preview"/>-->
          <!--          <vue-simple-markdown :source="content" v-highlight></vue-simple-markdown>-->
          <div style="text-align: left">
            <h2>
              <v-icon class="mr-1" large>
                mdi-message-processing-outline
              </v-icon>
              评论区
            </h2>
            <comment></comment>
          </div>
        </v-sheet>
      </v-col>
      <v-col :cols="$vuetify.breakpoint.xs?0:3"
             v-if="!$vuetify.breakpoint.xs"
      >
        <v-sheet style="position: fixed;width: 400px">
          <!--          目录-->
          <!--          <div-->
          <!--              v-for="anchor in titles"-->
          <!--              :key="anchor"-->
          <!--              :style="{ padding: `10px 0 10px ${anchor.indent * 20}px` }"-->
          <!--              @click="handleAnchorClick(anchor)"-->
          <!--          >-->
          <!--            <a style="cursor: pointer">{{ anchor.title }}</a>-->
          <!--          </div>-->
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import comment from "@/components/article/comment";
import {getDetail} from "@/api/articles";

export default {
  name: "Articles",
  data() {
    return {
      id: this.$route.query.id,
      statistics: [
        {
          label: '文章字数统计',
          icon: 'mdi-chart-line-stacked'
        },
      ],
      title: '',
      synopsis: '',
      content: '',
      writer: '',
      tag: [],
      //  目录
      titles: [],
    }
  },
  mounted() {
    this.getDetail();
    // const anchors = this.$refs.preview.$el.querySelectorAll('h1,h2,h3,h4,h5,h6');
    // const titles = Array.from(anchors).filter((title) => !!title.innerText.trim());
    //
    // if (!titles.length) {
    //   this.titles = [];
    //   return;
    // }
    //
    // const hTags = Array.from(new Set(titles.map((title) => title.tagName))).sort();
    //
    // this.titles = titles.map((el) => ({
    //   title: el.innerText,
    //   lineIndex: el.getAttribute('data-v-md-line'),
    //   indent: hTags.indexOf(el.tagName),
    // }));
  },
  methods: {
    getDetail() {
      getDetail({
        article_id: this.id
      }).then(res => {
        this.content = res.data.content
        this.title = res.data.title
        this.synopsis = res.data.synopsis
        this.writer = res.data.userName
        this.tag = res.data.tag.split(',')
      })
    },
    // handleAnchorClick(anchor) {
    //   const {preview} = this.$refs;
    //   const {lineIndex} = anchor;
    //
    //   const heading = preview.$el.querySelector(`[data-v-md-line="${lineIndex}"]`);
    //
    //   if (heading) {
    //     preview.scrollToTarget({
    //       target: heading,
    //       scrollContainer: window,
    //       top: 60,
    //     });
    //   }
    // }
  },
  components: {
    comment,
  },
  computed: {}
}
</script>

<style lang="scss">
#article {
  min-height: 100vh;

  code {
    background-color: transparent;
  }

  .content {
    h1 {
      margin: 0 auto;
    }
  }
}


</style>
