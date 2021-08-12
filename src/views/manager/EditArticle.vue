<template>
  <div id="manager">
    <v-card>
      <h3>发布新的文章</h3>
      <v-text-field
          label="文章标题"
          placeholder="文章标题"
          prepend-inner-icon="mdi-map-marker"
          outlined
          dense
      ></v-text-field>
      <v-textarea
          label="文章简介"
          outlined
          prepend-inner-icon="mdi-map-marker"
          height="80px"></v-textarea>
      <v-combobox
          v-model="chips"
          :items="items"
          chips
          clearable
          label="文章分类"
          multiple
          prepend-inner-icon="mdi-map-marker"
          outlined
      >
        <template v-slot:selection="{ attrs, item, select, selected }">
          <v-chip
              v-bind="attrs"
              :input-value="selected"
              close
              @click="select"
              @click:close="remove(item)"
          >
            <strong>{{ item }}</strong>&nbsp;
            <span>(interest)</span>
          </v-chip>
        </template>
      </v-combobox>
      <mavon-editor v-model="value" style="min-height: 50vh;z-index: 0"/>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="success">
          发布
        </v-btn>
        <v-btn color="primary">
          暂存草稿箱
        </v-btn>
      </v-card-actions>
    </v-card>
    <v-card>
      <h3>评论审核</h3>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "ManagerCenter",
  data() {
    return {
      chips: ['Java'],
    }
  },
  methods: {
    remove(item) {
      this.chips.splice(this.chips.indexOf(item), 1)
      this.chips = [...this.chips]
    },
  }
}
</script>

<style scoped lang="scss">
#manager {
  min-height: 100vh;

  h3 {
    margin-bottom: 10px;
  }

  .v-card {
    margin: 10px;
    padding: 1rem;
  }
}
</style>
