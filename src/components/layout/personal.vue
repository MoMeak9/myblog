<template>
  <div id="personal">
    <v-avatar
        color="indigo"
        size="100"
    >
      <v-icon dark v-if="!userInfo"
              large>
        mdi-account-circle
      </v-icon>
      <img
          v-else
          :src="userInfo.head_img"
          alt="头像"
      >
    </v-avatar>
    <h3>{{ userInfo.nickname }}</h3>
    <span>{{ userInfo.intro }}</span>
    <v-divider style="margin: 20px 0 20px"
    ></v-divider>
    <div class="insertImage" v-if="!userInfo">
      你还没登入哦？
      <br>没账号的话可以考虑注册一下？
    </div>
    <!--    菜单-->
    <v-list
        nav
        dense
        v-if="userInfo"
    >
      <v-list-item-group
          color="primary"
      >
        <v-list-item
            v-for="(item,index) in userInfo.menuItems"
            :key="index"
            :to="item.link"
        >
          <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title v-text="item.text"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
    <v-dialog
        v-model="showSignUp"
        transition="dialog-bottom-transition"
        max-width="600"
        persistent
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
            style="margin-right: 10px"
            color="success"
            v-bind="attrs"
            v-on="on"
            v-if="!userInfo"
        >登入
        </v-btn>
      </template>
      <template v-slot:default="dialog">
        <v-card>
          <v-toolbar
              color="primary"
              dark
          >用户登入 Sign up
          </v-toolbar>
          <v-card-text>
            <v-form
                ref="form"
                v-model="valid"
                lazy-validation
            >
              <v-text-field
                  v-model="email"
                  :rules="emailRules"
                  label="邮箱 E-mail"
                  required
              ></v-text-field>
              <v-text-field
                  type="password"
                  :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                  v-model="password"
                  :rules="passwordRules"
                  label="密码"
                  required
                  @click:append="show = !show"
              ></v-text-field>
              <v-btn
                  :disabled="!valid"
                  color="success"
                  class="mr-4"
                  @click="validateForLogin"
              >登入
              </v-btn>
              <v-btn
                  color="error"
                  class="mr-4"
                  @click="reset"
              >重置
              </v-btn>
            </v-form>
          </v-card-text>
          <v-card-actions class="justify-end">
            <v-btn
                text
                @click="dialog.value = false;reset()"
            >
              <v-icon color="red">mdi-close-box</v-icon>
              Close
            </v-btn>
          </v-card-actions>
        </v-card>
      </template>
    </v-dialog>
    <v-dialog
        v-model="showSignIn"
        transition="dialog-bottom-transition"
        max-width="600"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
            color="primary"
            v-bind="attrs"
            v-on="on"
            v-if="!userInfo"
        >注册
        </v-btn>
      </template>
      <template v-slot:default="dialog">
        <v-card>
          <v-toolbar
              color="primary"
              dark
          >注册成为用户 Sign in
          </v-toolbar>
          <v-card-text>
            <v-form
                ref="form"
                v-model="valid"
                lazy-validation
            >
              <v-text-field
                  v-model="name"
                  :counter="10"
                  :rules="nameRules"
                  label="用户名 Nickname"
                  required
              ></v-text-field>
              <v-text-field
                  v-model="email"
                  :rules="emailRules"
                  label="邮箱 E-mail"
                  required
              ></v-text-field>
              <v-text-field
                  v-model="password"
                  :rules="passwordRules"
                  label="密码"
                  required
              ></v-text-field>
              <v-checkbox
                  v-model="checkbox"
                  :rules="[v => !!v || 'You must agree to continue!']"
                  label="遵守本站服务协议?"
                  required
              ></v-checkbox>
              <v-btn
                  :disabled="!valid"
                  color="success"
                  class="mr-4"
                  @click="validateForRegister"
              >注册 Sign in
              </v-btn>
              <v-btn
                  color="error"
                  class="mr-4"
                  @click="reset"
              >重置 Reset Form
              </v-btn>
            </v-form>
          </v-card-text>
          <v-card-actions class="justify-end">
            <v-btn
                text
                @click="dialog.value = false;"
            >Close
            </v-btn>
          </v-card-actions>
        </v-card>
      </template>
    </v-dialog>
    <v-btn
        color="primary"
        @click="loginOut"
        v-if="userInfo">
      登出
    </v-btn>
  </div>
</template>
<script>
import {register, login, getUserInfo} from "@/api/user";
import {mapGetters, mapActions} from "vuex";

export default {
  name: "personal",
  data() {
    return {
      text: '',
      showSignIn: false,
      showSignUp: false,
      selectedItem: 0,
      valid: true,
      name: '',
      nameRules: [
        v => !!v || '我们应该称呼你？',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || '填一下邮箱嘛',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      checkbox: false,
      password: '',
      passwordRules: [
        v => !!v || '密码很重要',
      ],
      head_img: '',
      show: false
    }
  },
  mounted() {
    if (this.$store.state.items) {
      this.items = this.$store.state.items
    }
    console.log(this.items = this.$store.state.userInfo)
  },
  methods: {
    ...mapActions(['Logout']),
    userRegister() {
      register({
        username: this.email,
        password: this.password,
        nickname: this.name,
      }).then(res => {
        if (res.code === 1) {
          this.showSignIn = false
          this.showSignUp = true
        }
      })
    },
    validateForRegister() {
      if (this.$refs.form.validate()) {
        this.userRegister()
      }
    },
    userLogin() {
      login({
        username: this.email,
        password: this.password,
      }).then(res => {
        if (res.code === 1) {
          this.showSignUp = false
          this.$store.state.token = res.token
          getUserInfo({}).then(res => {
            this.$Message.success({
              message: "登入成功!",
              time: 3000, //提示框显示的时间
              light: false,//设置为true则提示框背景为透明
            });
            this.$store.state.items = res.data.menuItems
            this.items = res.data.menuItems
            this.$store.state.userInfo = {
              ...res.data,
              menuItems: res.data.menuItems
            }
            this.head_img = res.data.head_img
          })
        } else {
          this.text = res.msg
        }
      })
    },
    validateForLogin() {
      if (this.$refs.form.validate()) {
        this.userLogin()
      }
    },
    reset() {
      this.$refs.form.reset()
    },
    resetValidation() {
      this.$refs.form.resetValidation()
    },
    loginOut() {
      this.Logout()
      location.reload()
    }
  },
  components: {},
  computed: {
    ...mapGetters(['token', 'userInfo'])
  }
}
</script>

<style scoped lang="scss">
#personal {
  padding: 20px 0 20px;
  text-align: center;

  .insertImage {
    background: url("~@/assets/insertImage/tired.png") center center no-repeat;
    background-size: 200px;
    width: 100%;
    height: 300px;
  }
}
</style>
