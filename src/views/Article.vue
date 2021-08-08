<template>
  <v-container id="articles">
    <v-sheet>
      <h1>标题</h1>
      <div>标签</div>
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
      <div style="text-align: left">评论区</div>

    </v-sheet>
  </v-container>
</template>

<script>
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
