<template>
  <div id="personal">
    <v-avatar
        color="orange"
        size="100"
    >
      <img
          src="https://cdn.vuetifyjs.com/images/john.jpg"
          alt="John"
      >
    </v-avatar>
    <h3>sss</h3>
    <span>sss</span>
    <v-divider style="margin-top: 20px"
    ></v-divider>
    <!--    菜单-->
    <v-list
        nav
        dense
    >
      <v-list-item-group
          color="primary"
      >
        <v-list-item
            v-for="(item) in items"
            :key="item.text"
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
        v-if="!token"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
            style="margin-right: 10px"
            color="success"
            v-bind="attrs"
            v-on="on"
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
                  v-model="password"
                  :rules="passwordRules"
                  label="密码"
                  required
              ></v-text-field>
              <v-btn
                  :disabled="!valid"
                  color="success"
                  class="mr-4"
                  @click="validateForLogin"
              >登入 Sign up
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
                @click="dialog.value = false;reset()"
            >Close
            </v-btn>
          </v-card-actions>
        </v-card>
      </template>
    </v-dialog>
    <v-dialog
        v-model="showSignIn"
        transition="dialog-bottom-transition"
        max-width="600"
        v-if="!token"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
            color="primary"
            v-bind="attrs"
            v-on="on"
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
    <v-dialog
        v-model="dialog"
        width="500"
    >
      <v-card>
        <v-card-title class="text-h5 red lighten-2">
          错误！{{ text }}
        </v-card-title>

        <v-card-text>
          {{ text }}，请再次检查您所填的内容
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
              color="primary"
              text
              @click="dialog = false"
          >
            关闭
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-btn
        color="primary"
        @click="loginOut"
        v-if="token">
      登出
    </v-btn>
  </div>
</template>
<script>
import {register, login, getUserInfo} from "@/api/user";
import {mapGetters} from "vuex";

export default {
  name: "personal",
  data() {
    return {
      dialog: false,
      text: '',
      showSignIn: false,
      showSignUp: false,
      selectedItem: 0,
      items: [{}
      ],
      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      checkbox: false,
      password: '',
      passwordRules: [
        v => !!v || 'password is required',
      ]
    }
  },
  mounted() {
    if(this.$store.state.items){
      this.items =this.$store.state.items
    }
  },
  methods: {
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
            this.$store.state.items = res.data.menuItems
            this.items = res.data.menuItems
          })
        } else {
          this.dialog = true
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
      this.$store.commit('loginOut')
    }
  },
  components: {},
  computed: {
    ...mapGetters(['token'])
  }
}
</script>

<style scoped lang="scss">
#personal {
  padding: 20px 0 20px;
  text-align: center;
}
</style>
