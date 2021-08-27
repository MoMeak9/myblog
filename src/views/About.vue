<template>
  <v-container id="about">
    <v-row justify="center">
      <v-col :cols="$vuetify.breakpoint.xs?0:3"
             v-if="!$vuetify.breakpoint.xs"
      >
        <v-sheet class="animate__animated animate__backInDown">
          <div>
            <h4>天气数据</h4>
          </div>
          <div>
            <h4>Github数据</h4>
            <img src="https://github-readme-stats.vercel.app/api?username=MoMeak9&show_icons=true" alt="" width="100%">
          </div>
          <div>
            <h4>站点统计</h4>
            <div style="display: flex;justify-content: space-around;margin-top: 10px">
              <div v-for="(item,index) in webData" :key="index">
                <h5>
                  <v-icon></v-icon>
                  {{ item.label }}
                </h5>
                <h1>{{ item.number }}</h1>
              </div>
            </div>
          </div>
        </v-sheet>
      </v-col>
      <v-col :cols="$vuetify.breakpoint.xs?0:8"
             offset-sm="0">
        <v-sheet class="my-info animate__animated animate__backInDown">
          <div class="github-logo"></div>
          <v-avatar
              style="margin-top: 30px"
              color="primary"
              size="220"
          >
            <img src="https://avatars.githubusercontent.com/u/57096538?v=4" alt="myImg">
          </v-avatar>
          <h1>MoMeak9</h1>
          <h3>
            <v-icon></v-icon>
            Yihui Shi
            <v-icon></v-icon>
            Fuzhou China
          </h3>
          <div>
          </div>
          <div class="readme">I am a college student in China 🏫, like to pay attention to current affairs hot spots 🆕,
            Bilibili users 📺.<br>
            🤺Use daily:
            <img v-for="item in dailyTags" :key="item" :src="item" alt=""><br>
            💻Work using language:
            <img v-for="item in languageTags" :key="item" :src="item" alt=""><br>
            🖥️Using：
            <img v-for="item in usingTags" :key="item" :src="item" alt="">
          </div>
          <v-divider></v-divider>
          <div><h3 style="display: inline">教育背景 Education</h3><h5 style="display: inline">_Student in School</h5></div>
          <v-divider></v-divider>
          <h3>技术栈 Technology Stack</h3>
          前端<br>
          HTML CSS JS Vue Node.js webpack Element_Ui vant_Ui<br>
          后端<br>
          Java JDBC MySql<br>
          学习中<br>
          <v-divider></v-divider>
          <h3>项目经历 Project</h3>
          二手交易市场（Vue）<br>
          网络云盘（Vue）<br>
          仿写移动端电商（uni-app）<br>
          HR员工信息管理系统（Java）<br>
          网络云盘（Vue）
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>

export default {
  name: 'about',
  data() {
    return {
      webData: [
        {
          label: "文章总数",
          number: 1,
        }, {
          label: "浏览量",
          number: 1,
        }
        , {
          label: "字数总和",
          number: 1,
        }
        , {
          label: "站点用户",
          number: 1,
        }
      ],
      dailyTags: [
        "https://img.shields.io/badge/OS-Arch%20Linux-33aadd?style=flat-square&logo=arch-linux&logoColor=ffffff",
        "https://img.shields.io/badge/Windows-0078D6?style=flat-square&logo=windows&logoColor=ffffff",
        "https://img.shields.io/badge/IntelliJ-IDEA-000000?style=flat-square&logo=IntelliJ-IDEA&logoColor=ffffff",
        "https://img.shields.io/badge/WebStorm-001010?style=flat-square&logo=WebStorm&logoColor=ffffff",
        "https://img.shields.io/badge/Eclipse-IDE-2C2255?style=flat-square&logo=Eclipse-IDE&logoColor=ffffff"
      ],
      languageTags: [
        "https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=JavaScript&logoColor=ffffff",
        "https://img.shields.io/badge/Java-007396?style=flat-square&logo=Java&logoColor=ffffff",
        "https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=HTML5&logoColor=ffffff",
        "https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=CSS3&logoColor=ffffff",
        "https://img.shields.io/badge/SCSS-CC6699?style=flat-square&logo=SASS&logoColor=ffffff"
      ],
      usingTags: [
        "https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=Node.js&logoColor=ffffff",
        "https://img.shields.io/badge/Vue.js-4FC08D?style=flat-square&logo=Vue.js&logoColor=ffffff",
        "https://img.shields.io/badge/Webpack-8DD6F9?style=flat-square&logo=Webpack&logoColor=ffffff",
        "https://img.shields.io/badge/ESLint-4B32C3?style=flat-square&logo=ESLint&logoColor=ffffff",
      ]
    }
  },
  methods: {},
  mounted() {
  }
}
</script>
<style lang="scss" scoped>
#about {
  min-height: 100vh;
  text-align: center;

  .my-info {
    padding: 1rem;
    position: relative;

    .github-logo {
      position: absolute;
      top: -50px;
      right: -50px;
      width: 0;
      height: 0;
      border: 50px solid transparent;
      border-right-color: dodgerblue;
      transform: rotateZ(135deg);
      cursor: pointer;
    }
  }

  .readme {
    line-height: 2rem;

    img {
      padding-left: 5px;
    }
  }
}
</style>
