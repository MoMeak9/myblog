<template>
  <div id="manager">
    <v-card>
      <h3>发布新的文章</h3>

      <v-text-field
          label="文章标题"
          placeholder="文章标题"
          prepend-inner-icon="mdi-map-marker"
          outlined
          dense
      ></v-text-field>
      <v-textarea
          label="文章简介"
          outlined
          prepend-inner-icon="mdi-map-marker"
          height="80px"></v-textarea>
      <v-combobox
          v-model="chips"
          :items="items"
          chips
          clearable
          label="文章分类"
          multiple
          prepend-inner-icon="mdi-map-marker"
          outlined
      >
        <template v-slot:selection="{ attrs, item, select, selected }">
          <v-chip
              v-bind="attrs"
              :input-value="selected"
              close
              @click="select"
              @click:close="remove(item)"
          >
            <strong>{{ item }}</strong>&nbsp;
            <span>(interest)</span>
          </v-chip>
        </template>
      </v-combobox>
      <mavon-editor v-model="value" style="min-height: 50vh;z-index: 0"/>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="success">
          发布
        </v-btn>
        <v-btn color="primary">
          暂存草稿箱
        </v-btn>
      </v-card-actions>
    </v-card>
    <v-card>
      <h3>文章管理</h3>
      <v-card>
        <v-card-title>
          Nutrition
          <v-spacer></v-spacer>
          <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="Search"
              single-line
              hide-details
          ></v-text-field>
        </v-card-title>
        <v-data-table
            :headers="headers"
            :items="desserts"
            :search="search"
        >
          <template v-slot:item.calories="{ item }">
            <v-btn
                outlined
            >
              {{ item.calories }}
            </v-btn>
          </template>
        </v-data-table>
      </v-card>
    </v-card>
    <v-card>
      <h3>评论审核</h3>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "ManagerCenter",
  data() {
    return {
      chips: ['Java'],
      items: ['Streaming', 'Eating'],
      search: '',
      headers: [
        {
          text: 'Dessert (100g serving)',
          align: 'start',
          sortable: false,
          value: 'name',
        },
        {text: 'Calories', value: 'calories'},
        {text: 'Fat (g)', value: 'fat'},
        {text: 'Carbs (g)', value: 'carbs'},
        {text: 'Protein (g)', value: 'protein'},
        {text: 'Iron (%)', value: 'iron'},
      ],
      desserts: [
        {
          name: 'Frozen Yogurt',
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          iron: '1%',
        },
        {
          name: 'Ice cream sandwich',
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          iron: '1%',
        },
        {
          name: 'Eclair',
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          iron: '7%',
        },
        {
          name: 'Cupcake',
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          iron: '8%',
        },
        {
          name: 'Gingerbread',
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          iron: '16%',
        },
        {
          name: 'Jelly bean',
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          iron: '0%',
        },
        {
          name: 'Lollipop',
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
          iron: '2%',
        },
        {
          name: 'Honeycomb',
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
          iron: '45%',
        },
        {
          name: 'Donut',
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
          iron: '22%',
        },
        {
          name: 'KitKat',
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: '6%',
        },
      ],
    }
  },
  methods: {
    remove(item) {
      this.chips.splice(this.chips.indexOf(item), 1)
      this.chips = [...this.chips]
    },
  }
}
</script>

<style scoped lang="scss">
#manager {
  min-height: 100vh;

  h3 {
    margin-bottom: 10px;
  }

  .v-card {
    margin: 10px;
    padding: 1rem;
  }
}
</style>
