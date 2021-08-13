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
              ><img :src="userInfo.head_img"
                    alt="John"
                    v-if="userInfo.head_img"/>
                <v-icon color="white" large v-else>mdi-account-circle</v-icon>
              </v-avatar>
              <v-file-input
                  @change="changeFile"
                  accept="image/*"
                  label="上传你的头像"
                  placeholder="上传你的新头像"
                  style="margin-top: 30px"
              ></v-file-input>
              <v-text-field label="用户名"
                            :value="userInfo.nickname"
                            placeholder="用户名"
                            prepend-icon="mdi-cursor-default">
              </v-text-field>
              <v-radio-group
                  v-model="userInfo.sex"
                  row
                  prepend-icon="mdi-cursor-default"
              >
                <v-radio
                    label="男的"
                    value="1"
                ></v-radio>
                <v-radio
                    label="女的"
                    value="0"
                ></v-radio>
                <v-radio
                    label="不男不女的"
                    value="-1"
                ></v-radio>
              </v-radio-group>
              <v-text-field label="年龄"
                            :value="userInfo.age"
                            prepend-icon="mdi-cursor-default">
              </v-text-field>
              <v-text-field label="学校"
                            :value="userInfo.school"
                            prepend-icon="mdi-cursor-default">
              </v-text-field>
              <v-textarea
                  label="简介"
                  :value="userInfo.intro"
                  placeholder="这个人很懒，什么也没留下"
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
  mounted() {
    if(!this.$store.state.userInfo){
      this.$router.push({
        path: "/",
      })
    }
  },
  data() {
    return {
      imageFile: '',
      userInfo: this.$store.state.userInfo
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
