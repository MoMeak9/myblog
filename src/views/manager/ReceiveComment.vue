<template>
  <div id="receiveComments">
    <v-card>
      <h3>
        <v-icon>mdi-comment</v-icon>
        文章评论管理
      </h3>
      表格
    </v-card>
    <v-card>
      <h3>
        <v-icon>mdi-email-newsletter</v-icon>
        留言板
      </h3>
      表格or在线对话框
    </v-card>
  </div>
</template>

<script>
export default {
  name: "Comment"
}
</script>

<style scoped>
.v-card {
  margin: 10px;
  padding: 10px;
}
</style>
