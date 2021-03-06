<template>
  <div id="manager">
    <v-card>
      <h3>发布新的文章</h3>
      <v-form
          ref="form"
          lazy-validation
      >
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
      </v-form>
      <v-combobox
          v-model="tag"
          :items="chips"
          chips
          clearable
          label="文章标签"
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
      <v-card-actions style="padding: 0">
        <v-select
            v-model="classify"
            prepend-inner-icon="mdi-map-marker"
            :items="items"
            label="分类"
            outlined
        ></v-select>
        <v-spacer></v-spacer>
        <v-btn color="success" @click="issue">
          发布
        </v-btn>
        <v-btn color="primary">
          暂存草稿箱
        </v-btn>
      </v-card-actions>
      <v-md-editor
          :disabled-menus="[]"
          v-model="contents"
          :include-level="[3, 4]"
          height="800px"
          @upload-image="handleUploadImage"
      ></v-md-editor>
    </v-card>
  </div>
</template>

<script>
import {addArticle, allClassAndTags, getDetail} from "@/api/articles";
import {uploadImage} from '@/api/user'

export default {
  name: "ManagerCenter",
  data() {
    return {
      title: '',
      synopsis: '',
      tag: [],
      contents: '',
      chips: ['Java'],
      titleRule: [
        value => !!value || '必填.',
      ],
      synopsisRule: [
        value => !!value || '必填.',
      ],
      classify: '',
      items: [],
      id: this.$route.query.id
    }
  },
  mounted() {
    allClassAndTags({}).then(res => {
      for (const i in res.data) {
        this.items.push(res.data[i].class)
      }
    })
    if (this.id != null && this.id !== '') {
      getDetail({
        article_id: this.id
      }).then(res => {
        this.contents = res.data.content
        this.classify = res.data.classify
        this.title = res.data.title
        this.synopsis = res.data.synopsis
        this.writer = res.data.userName
        this.tag = res.data.tag.split(',')
      })
    }
  },
  methods: {
    remove(item) {
      this.chips.splice(this.chips.indexOf(item), 1)
      this.chips = [...this.chips]
    },
    issue() {
      let tags = this.tag.join(',')
      if (this.$refs.form.validate()) {
        addArticle({
          title: this.title,
          synopsis: this.synopsis,
          tag: tags,
          content: this.contents
        }).then(res => {
          this.$Message.success({
            message: res.msg,
            time: 3000,
            light: false,
          })
        })
      }
    },
    handleUploadImage(event, insertImage, files) {
      console.log(files);
      const form = new FormData
      form.append('img', files[0])
      uploadImage(form).then((res) => {
        insertImage({
          url: res.data.imgUrl,
          desc: '图片',
        });
      })
    },
  }
}
</script>

<style lang="scss">
#manager {
  min-height: 100vh;

  h3 {
    margin-bottom: 10px;
  }

  .v-card {
    margin: 10px;
    padding: 1rem;
  }

  code {
    background-color: transparent;
  }
}
</style>
