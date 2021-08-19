<template>
  <div id="articles">
    <v-card
        class="mx-auto"
        outlined
    >
      <v-list-item three-line>
        <v-list-item-content>
          <div class="text-overline mb-4">
            {{ item.create_time }}
          </div>
          <v-list-item-title class="text-h5 mb-1">
            {{ item.title }}
          </v-list-item-title>
          <v-list-item-subtitle>{{ item.synopsis }}</v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-avatar
            tile
            height="100%"
            size="150"
            color="grey"
        ></v-list-item-avatar>
      </v-list-item>

      <v-card-actions>
        <v-btn
            outlined
            rounded
            text
            type="primary"
            @click="toArticle(item.id)"
        >
          Learn more
        </v-btn>
        <a>
          <v-icon></v-icon>
        </a>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "Articles",
  data() {
    return {}
  },
  props: {
    item: {
      type: Object,
    }
  },
  methods: {
    toArticle(id) {
      this.$router.push({
        path: '/article',
        query: {
          id: id
        }
      })
    }
  }
}
</script>

<style scoped lang="scss">
#articles {
  margin: 10px 0 10px;
}
</style>
