<template>
  <div id="error">
    <v-img width="500px" :src="require('@/assets/404.svg')" style="margin: 20vh auto"></v-img>
  </div>
</template>
<script>
export default {
  name: "404"
}
</script>

<style scoped lang="scss">
#error {
  width: 100%;
  min-height: 100vh;
}
</style>
