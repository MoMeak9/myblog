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
          v-model="title"
          :rules="titleRule"
      ></v-text-field>
      <v-textarea
          v-model="synopsis"
          label="文章简介"
          outlined
          prepend-inner-icon="mdi-map-marker"
          height="80px"
          :rules="synopsisRule"></v-textarea>
      <v-combobox
          v-model="tag"
          :items="chips"
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
      <mavon-editor v-model="contents" style="min-height: 50vh;z-index: 0"/>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="success" @click="issue">
          发布
        </v-btn>
        <v-btn color="primary">
          暂存草稿箱
        </v-btn>
      </v-card-actions>
    </v-card>
    <v-snackbar
        v-model="show"
        timeout="3000"
    >
      {{ text }}
      <template v-slot:action="{ attrs }">
        <v-btn
            color="blue"
            text
            v-bind="attrs"
            @click="show = false"
        >
          <v-icon>mdi-close-box</v-icon>
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
import {addArticle} from "@/api/articles";

export default {
  name: "ManagerCenter",
  data() {
    return {
      title: '',
      synopsis: '',
      tag: [],
      contents: '',
      chips: ['Java'],
      show: false,
      text: '',
      titleRule: [
        value => !!value || '必填.',
      ],
      synopsisRule: [
        value => !!value || '必填.',
      ],
    }
  },
  methods: {
    remove(item) {
      this.chips.splice(this.chips.indexOf(item), 1)
      this.chips = [...this.chips]
    },
    issue() {
      let tags = this.tag.join(',')
      addArticle({
        title: this.title,
        synopsis: this.synopsis,
        tag: tags,
        content: this.contents
      }).then((res) => {
        this.show = true
        this.text = res.msg
        console.log(res)
      })
    }
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
