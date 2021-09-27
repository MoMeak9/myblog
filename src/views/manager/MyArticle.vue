<template>
  <v-card>
    <h3>
      <v-icon>mdi-book-open-page-variant</v-icon>
      文章管理
    </h3>
    <v-card>
      <v-card-title>
        所有文章
        <v-spacer></v-spacer>
        <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details
        ></v-text-field>
      </v-card-title>
      <v-data-table
          :headers="headers"
          :items="tableData"
          :search="search"
          :sort-desc="[false, true]"
      >
        <template v-slot:item.actions="{ item }">
          <v-btn tile dark small color="blue" @click="toEditArticle(item.id)">
            编辑
          </v-btn>
          <v-btn tile dark small v-if="item.state !== 0" color="green" @click="editArticleState(0,item.id)">
            发布
          </v-btn>
          <v-btn tile dark small v-if="item.state === 0" color="grey" @click="editArticleState(-1,item.id)">
            下架
          </v-btn>
          <v-btn tile dark small color="red" @click="editArticleState(-2,item.id)">
            彻底删除
          </v-btn>
        </template>
        <template v-slot:item.state="{ item }">
          <v-chip
              dark
              color="green"
              v-if="item.state === 0"
          ><span>正常</span>
          </v-chip>
          <v-chip
              dark
              color="red"
              v-if="item.state === -1"
          ><span>下架</span>
          </v-chip>
          <v-chip
              dark
              color="gray"
              v-if="item.state === 1"
          ><span>草稿</span>
          </v-chip>
        </template>
      </v-data-table>
    </v-card>
  </v-card>
</template>

<script>
import {queryAllList, editState} from "@/api/articles";

export default {
  name: "MyArticle",
  data() {
    return {
      search: '',
      items: ['Streaming', 'Eating'],
      headers: [
        {text: '标题', value: 'title'},
        {text: '文章状态', value: 'state'},
        {text: '操作', value: 'actions', sortable: false},
        {text: '标签', value: 'tag'},
        {text: '被浏览次数', value: 'reading_times'},
        {text: '点赞数', value: 'praise_times'},
        {text: '发布时间', value: 'create_time'},
      ],
      tableData: []
    }
  },
  methods: {
    // 查询
    queryAllTableData() {
      queryAllList({}).then((res) => {
        this.tableData = res.data
      })
    },
    //  文章状态更改
    editArticleState(state, article_id) {
      editState({
        state: state,
        article_id: article_id,
        user_uuid: this.$store.state.userInfo.uuid
      }).then(res => {
        this.queryAllTableData()
        this.$Message.success({
          message: res.msg,
          time: 3000,
          light: false,
        })
      })
    },
    toEditArticle(id) {
      this.$router.push({
        path: '/manager/editor',
        query: {
          id: id
        }
      })
    }
  },
  mounted() {
    this.queryAllTableData()
  }
}
</script>

<style scoped lang="scss">
.v-card {
  margin: 10px;
  padding: 10px;
}
</style>
