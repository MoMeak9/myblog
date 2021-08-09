<template>
  <v-container id="articles">
    <v-sheet>
      <h1>标题</h1>
      <div>
        <v-chip
            class="ma-2"
            color="blue"
            label
            text-color="white"
        >
          <v-icon left>mdi-label</v-icon>
          Java
        </v-chip>
      </div>
      <div>
        <v-tooltip bottom v-for="item in statistics" :key=item>
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
            <span>{{ item.num }}</span>
          </template>
          <span>{{ item.label }}</span>
        </v-tooltip>
        作者：
      </div>
      <div>正文</div>
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
  </v-container>
</template>

<script>
import comment from "@/components/article/comment";

export default {
  name: "Articles",
  data() {
    return {
      statistics: [
        {
          label: '站点字数统计',
          num: 998,
          icon: 'mdi-chart-line-stacked'
        },
      ]
    }
  },
  components: {
    comment
  }
}
</script>

<style lang="scss">
#articles {
  min-height: 100vh;
  text-align: center;

  .v-sheet {
    padding: 1rem;

    h1 {
      margin: 0 auto;
    }
  }
}


</style>
