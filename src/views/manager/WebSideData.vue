<template>
  <div id="websiteData">
    <v-sheet>
      <h3>浏览量</h3>
      <div id="main" style="height: 50vh;width: 100%">
      </div>
    </v-sheet>
    <v-sheet>
      <h3>文章字数</h3>
      <div style="height: 50vh;width: 100%">

      </div>
    </v-sheet>
  </div>
</template>

<script>
export default {
  name: "WebSideData",
  methods: {
    myEcharts() {
      const myChart = this.$echarts.init(document.getElementById('main'));
      //配置图表
      let option = {
        title: {
          text: '',
        },
        tooltip: {},
        legend: {
          data: ['销量']
        },
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [{
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }]
      };
      myChart.setOption(option);
    }
  },
  mounted() {
    this.myEcharts();
  }
}
</script>

<style scoped lang="scss">
#websiteData {
  min-height: 100vh;
  padding-top: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  .v-sheet {
    height: 55vh;
    flex: 1 0 400px;
    margin: 5px 10px;
    padding: 10px;
  }
}
</style>
