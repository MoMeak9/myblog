<template>
  <div id="footer">
    <icon></icon>
    <div class="for-me">
      <a v-for="(item,index) in linkList" :title="item.label" :key="index" :href="item.link">{{ item.label }}</a>
    </div>
    <span><v-icon small>mdi-chart-line-stacked</v-icon>23</span>
    <v-icon small>mdi-coffee</v-icon>
    <v-icon small>mdi-cursor-default</v-icon>
    <v-icon small>mdi-eye</v-icon>
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
          label: '站点字数统计',
          num: 998,
          icon: 'mdi-chart-line-stacked'
        }]
    }
  }, components: {
    icon
  }
}
</script>

<style scoped lang="scss">
#footer {
  background-color: white;
  width: 100%;
  padding: 25px 0 15px;
  text-align: center;
  font-size: 14px;

  .for-me {
    padding: 5px 0 0;

    a {
      margin: 0 5px;
      color: black;
    }
  }
}
</style>
