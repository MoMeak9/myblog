<template>
  <div id="myArticle">
    <v-card>
      <h3>
        <v-icon>mdi-book-open-page-variant</v-icon>
        文章管理
      </h3>
      <v-card>
        <v-card-title>
          Nutrition
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
            <v-btn tile dark small v-if="item.state !== 0" color="green">发布</v-btn>
            <v-btn tile dark small color="blue">编辑</v-btn>
            <v-btn tile dark small v-if="item.state === 0" color="grey">下架</v-btn>
            <v-btn tile dark small color="red">彻底删除</v-btn>
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
                v-if="item.state === 1"
            ><span>草稿</span>
              <v-chip
                  dark
                  color="red"
                  v-if="item.state === -1"
              ><span>下线</span>
              </v-chip>
            </v-chip>
          </template>
        </v-data-table>
      </v-card>
    </v-card>
  </div>
</template>

<script>
import {queryAllArticle} from "@/api/articles";

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
        {text: '简介', value: 'synopsis'},
        {text: '标签', value: 'tag'},
        {text: '被浏览次数', value: 'reading_times'},
        {text: '点赞数', value: 'praise_times'},
        {text: '发布时间', value: 'create_time'},
      ],
      tableData: []
    }
  },
  method: {
    queryTableData() {
      queryAllArticle({}).then((res) => {
        console.log(res)
      })
    },
  },
  mounted() {
    if (!this.$store.state.userInfo) {
      this.$router.push({
        path: "/",
      })
    } else {
      queryAllArticle({}).then((res) => {
        console.log(res)
        this.tableData = res.data
      })
    }
  }
}
</script>

<style scoped lang="scss">
#myArticle {
  .v-card {
    margin: 10px;
    padding: 10px;
  }
}
</style>
