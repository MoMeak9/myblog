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
                  id="uploadImage"
                  ref="uploadImage"
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
                    @click="editUserInfo"
                    outlined
                    color="green"
                    style="margin-right: 10px">
                  保存
                </v-btn>
                <v-btn
                    @click="changePassword"
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
import {mapActions} from "vuex";
import {updateUser} from "@/api/user";

export default {
  name: "PersonalCenter",
  data() {
    return {
      imageFile: '',
      userInfo: this.$store.state.userInfo
    }
  },
  methods: {
    ...mapActions(['getUserInfo']),
    changeFile(file) {
      return new Promise(function (resolve, reject) {
        const reader = new FileReader()
        let imgResult = ''
        reader.readAsDataURL(file)
        reader.onload = function () {
          return imgResult = reader.result
        }
        reader.onerror = function (error) {
          reject(error)
        }
        reader.onloadend = function () {
          resolve(imgResult)
        }
      }).then((res) => {
        this.userInfo.head_img = res
      })
    },
    editUserInfo() {
      let Form = new FormData
      Form.append('userInfo', this.userInfo)
      updateUser({...this.userInfo}).then(res => {
        this.$Message.success({
          message: "修改成功!",
          time: 3000, //提示框显示的时间
          light: false,//设置为true则提示框背景为透明
        })
      })
    },
    changePassword() {

    }
  },

}
</script>

<style scoped lang="scss">

</style>
