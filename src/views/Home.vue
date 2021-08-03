<template>
  <v-container id="home">
    <hello-world/>
  </v-container>
</template>

<script>
import HelloWorld from '../components/HelloWorld'

export default {
  name: 'Home',

  components: {
    HelloWorld,
  },
}
</script>
<style lang="scss" scoped>
#home {
  min-height: 100vh;
}
</style>
