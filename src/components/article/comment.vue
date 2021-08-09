<template>
  <div id="comment">
    <v-card
        class="mx-auto"
        color="blue"
        dark
        max-width="95%"
        style="padding:0"
    >
      <v-card-title>
        <v-list-item>
          <v-list-item-avatar color="grey darken-3">
            <v-img
                class="elevation-6"
                alt=""
                src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
            ></v-img>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class="font-weight-bold">Evan You</v-list-item-title>
            <span style="font-size: 14px">20211212</span>
          </v-list-item-content>
        </v-list-item>
      </v-card-title>
      <v-card-text class="text-h6 font-weight-bold" style="color: white">
        "Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type invalid as
        well."
      </v-card-text>
      <v-card-actions>
        <v-list-item class="grow">
          <v-row
              align="center"
              justify="end"
          >
            <v-icon class="mr-1">
              mdi-chevron-up-box-outline
            </v-icon>
            <v-icon class="mr-1">
              mdi-chevron-up-box
            </v-icon>
            <span class="subheading mr-2">256</span>
            <v-icon class="mr-1">
              mdi-chevron-down-box-outline
            </v-icon>
            <v-icon class="mr-1">
              mdi-chevron-down-box
            </v-icon>
            <span class="subheading mr-2">256</span>
            <v-icon class="mr-1">
              mdi-message-processing-outline
            </v-icon>
            <span class="subheading mr-2">256</span>
          </v-row>
        </v-list-item>
      </v-card-actions>
    </v-card>
    <div style="width: 95%;margin: 0 auto">
      <v-form
          ref="form"
          v-model="valid"
          lazy-validation
          style="margin-top: 20px"
      >
        <v-textarea
            v-model="name"
            label="Your Comment"
            outlined
        ></v-textarea>

        <v-checkbox
            v-model="checkbox"
            :rules="[v => !!v || 'You must agree to continue!']"
            label="遵守我们的社区约定？"
            required
        ></v-checkbox>

        <v-btn
            :disabled="!valid"
            color="success"
            class="mr-4"
            @click="validate"
        >
          发表评论
        </v-btn>

        <v-btn
            color="error"
            class="mr-4"
            @click="reset"
        >
          清空
        </v-btn>
      </v-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "comment",
  data() {
    return {
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
      select: null,
      items: [
        'Item 1',
        'Item 2',
        'Item 3',
        'Item 4',
      ],
      checkbox: false,
    }
  },
  methods: {
    validate() {
      this.$refs.form.validate()
      //  登入后允许发表
    },
    reset() {
      this.$refs.form.reset()
    },
    resetValidation() {
      this.$refs.form.resetValidation()
    },
  }
}
</script>

<style scoped>

</style>
