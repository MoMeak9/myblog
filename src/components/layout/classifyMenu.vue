<template>
  <v-card
      tile
  >
    <v-toolbar
        color="primary"
        dark
    >文章分类
    </v-toolbar>
    <v-list>
      <v-list-group
          v-for="(item,index) in classItem"
          :key="index"
          :prepend-icon="item.icon"
          no-action
      >
        <template v-slot:activator>
          <v-list-item-content>
            <v-list-item-title v-text="item.class"></v-list-item-title>
          </v-list-item-content>
        </template>
        <v-list-item
            v-for="(child,index) in item.sub_items"
            :key="index"
            link
            to=""
        >
          <v-list-item-content>
            <v-list-item-title>{{ child.title }} ({{ child.num }})</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-group>
    </v-list>
  </v-card>
</template>

<script>
export default {
  name: "classifyMenu",
  data() {
    return {
      items: [
        {
          action: 'mdi-ticket',
          items: [
            {title: 'List Item', id: 99},
            {title: 'List Item'},
          ],
          title: 'Java',
          active: true,
        },
        {
          action: 'mdi-silverware-fork-knife',
          active: true,
          items: [
            {title: 'Breakfast & brunch'},
            {title: 'New American'},
            {title: 'Sushi'},
          ],
          title: 'Dining',
        },
        {
          action: 'mdi-school',
          items: [{title: 'List Item'}],
          title: 'Education',
        },
        {
          action: 'mdi-run',
          items: [{title: 'List Item'}],
          title: 'Family',
        },
        {
          action: 'mdi-bottle-tonic-plus',
          items: [{title: 'List Item'}],
          title: 'Health',
        },
        {
          action: 'mdi-content-cut',
          items: [{title: 'List Item'}],
          title: 'Office',
        },
        {
          action: 'mdi-tag',
          items: [{title: 'List Item'}],
          title: 'Promotions',
        },
      ]
    }
  },
  props: {
    classItem: {}
  }
}
</script>

<style scoped>

</style>
