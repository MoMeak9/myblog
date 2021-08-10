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
    <div>
      <v-chip
          class="ma-2"
          label
      >
        Label
      </v-chip>
      <v-chip
          class="ma-2"
          color="pink"
          label
          text-color="white"
      >
        <v-icon left>
          mdi-label
        </v-icon>
        Tags
      </v-chip>

      <v-chip
          class="ma-2"
          color="primary"
          label
      >
        <v-icon left>
          mdi-account-circle-outline
        </v-icon>
        John Leider
      </v-chip>

      <v-chip
          class="ma-2"
          color="pink"
          label
          text-color="white"
      >
        <v-icon left>
          mdi-label
        </v-icon>
        Tags
      </v-chip>

      <v-chip
          class="ma-2"
          color="primary"
          label
      >
        <v-icon left>
          mdi-account-circle-outline
        </v-icon>
        John Leider
      </v-chip>
    </div>
    <v-divider>sss</v-divider>
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
                @click="dialog.value = false;"
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
  </div>
</template>
<script>
import {register, login} from "@/api/user";

export default {
  name: "personal",
  data() {
    return {
      showSignIn: false,
      showSignUp: false,
      selectedItem: 0,
      items: [
        {text: 'My Files', icon: 'mdi-folder'},
        {text: 'Shared with me', icon: 'mdi-account-multiple'},
        {text: 'Starred', icon: 'mdi-star'},
        {text: 'Recent', icon: 'mdi-history'},
        {text: 'Offline', icon: 'mdi-check-circle'},
        {text: 'Uploads', icon: 'mdi-upload'},
        {text: 'Backups', icon: 'mdi-cloud-upload'},
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
  methods: {
    userRegister() {
      register({
        username: this.email,
        password: this.password,
        nickname: this.name,
      }).then(res => {
        if (res.code === 1) {
          this.showSignIn = false
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
        console.log(res)
        if (res.code === 1) {
          this.showSignUp = false
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
  },
  components: {
  }
}
</script>

<style scoped lang="scss">
#personal {
  padding: 20px 0 20px;
  text-align: center;
}
</style>
