<template>
  <div id="footer">
    <icon></icon>
    <div class="for-me">
      <a v-for="(item,index) in linkList" :title="item.label" :key="index" :href="item.link">{{ item.label }}</a>
    </div>
    <v-tooltip bottom v-for="(item,index) in statistics" :key=index>
      <template v-slot:activator="{ on, attrs }">
        <span>{{ item.num }}</span>
        <v-icon
            style="margin: 0 4px 0 10px"
            color="primary"
            small
            dark
            v-bind="attrs"
            v-on="on"
        >
          {{ item.icon }}
        </v-icon>
      </template>
      <span>{{ item.label }}</span>
    </v-tooltip>
    <div>
      © 2021 Yihui's Blog. All Rights Reserved.
    </div>
    <div>
      <a href="https://beian.miit.gov.cn/">闽ICP备19026932号-1</a>
    </div>
  </div>
</template>

<script>
import icon from "@/components/icon";

export default {
  name: "footerInfo",
  data() {
    return {
      linkList: [
        {
          label: "关于站长",
          link: 'about'
        },
        {
          label: "联系站长",
          link: 'about'
        },
        {
          label: "站点详情",
          link: 'about'
        },
        {
          label: "合作",
          link: 'about'
        },
        {
          label: "友情链接",
          link: 'about'
        }
      ],
      statistics: [
        {
          label: '站点字数统计',
          num: 998,
          icon: 'mdi-chart-line-stacked'
        },
        {
          label: '站点访问统计',
          num: 998,
          icon: 'mdi-cursor-default'
        },
        {
          label: '站点文章浏览',
          num: 998,
          icon: 'mdi-eye'
        },
        {
          label: '风里雨里运行了',
          num: 998,
          icon: 'mdi-coffee'
        }
      ]
    }
  },
  methods: {
    initData() {
      setInterval(() => {
        let BootDate = new Date("2021/07/25 00:00:00");
        let NowDate = new Date();
        let RunDateM = parseInt(NowDate - BootDate);
        let RunDays = Math.floor(RunDateM / (24 * 3600 * 1000));
        let RunHours = Math.floor(RunDateM % (24 * 3600 * 1000) / (3600 * 1000));
        let RunMinutes = Math.floor(RunDateM % (24 * 3600 * 1000) % (3600 * 1000) / (60 * 1000));
        let RunSeconds = Math.round(RunDateM % (24 * 3600 * 1000) % (3600 * 1000) % (60 * 1000) / 1000);
        this.statistics[3].num = RunDays + "天" + RunHours + "时" + RunMinutes + "分" + RunSeconds + "秒"
      }, 1000)
    }
  },
  components: {
    icon
  },
  mounted() {
    this.initData()
  }
}
</script>

<style scoped lang="scss">
#footer {
  background-color: white;
  width: 100%;
  margin-top: 40px;
  padding: 25px 0 15px;
  text-align: center;
  font-size: 14px;

  .for-me {
    padding: 5px 0 10px;

    a {
      margin: 0 5px;
      color: black;
    }
  }
}
</style>
