<template>
  <div id="personal">
    <v-container>
      <v-row>
        <v-col>
          <v-sheet>
            <div style="width:50%;margin: 0 auto;text-align: center;padding: 2rem 0">
              <v-avatar
                  color="primary"
                  size="128"
                  tile
              ><img src="https://cdn.vuetifyjs.com/images/john.jpg"
                    alt="John"/>
              </v-avatar>
              <v-file-input
                  @change="changeFile"
                  accept="image/*"
                  label="上传你的头像"
                  placeholder="上传你的新头像"
                  style="margin-top: 30px"
              ></v-file-input>
              <v-text-field label="用户名"
                            placeholder="原用户名"
                            prepend-icon="mdi-cursor-default">
              </v-text-field>
              <v-text-field label="性别"
                            prepend-icon="mdi-cursor-default">
              </v-text-field>
              <v-text-field label="年龄"
                            prepend-icon="mdi-cursor-default">
              </v-text-field>
              <v-text-field label="学校"
                            prepend-icon="mdi-cursor-default">
              </v-text-field>
              <v-textarea
                  label="简介"
                  placeholder="简介"
                  prepend-icon="mdi-cursor-default"
                  outlined></v-textarea>
              <div style="display: flex;justify-content: center">
                <v-btn
                    outlined
                    color="green"
                    style="margin-right: 10px">
                  保存
                </v-btn>
                <v-btn
                    outlined
                    color="blue">
                  更改密码
                </v-btn>
              </div>
            </div>
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>

export default {
  name: "PersonalCenter",
  data() {
    return {
      imageFile: '',
    }
  },
  methods: {
    changeFile(file) {
      console.log(file)
      this.imageFile = file
    }
  },

}
</script>

<style scoped lang="scss">

</style>
