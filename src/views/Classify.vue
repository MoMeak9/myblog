<template>
  <v-container id="classify">
    <v-card class="d-flex flex-wrap justify-space-around ">
      <v-card
          v-for="n in 10"
          :key="n"
          outlined
          tile
          style="width: 400px;margin-top: 10px"
      >
        <h4>类别</h4>
      </v-card>
    </v-card>
    <div v-for="n in 10" :key="n" style="margin:10px 0 0" class="transparent">
      <v-card-title>
        <span>
          <v-icon>
            mdi-file-document
          </v-icon>
          2333
        </span>
      </v-card-title>
      <v-card-actions v-for="n in 10" :key="n" style="margin-left: 30px">
        <a>2019-03-07 |
          深度学习基础：概率论(1)_正态分布(高斯分布)</a>
      </v-card-actions>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "Classify"
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
