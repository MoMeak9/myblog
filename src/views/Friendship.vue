<template>
  <v-container id="friend">
    <h1>sss</h1>
    <div class="FriendList">
      <v-card
          style="margin-bottom: 20px;flex:0 0 1"
          v-for="item in 10"
          :key="item"
          class="mx-auto"
          max-width="344"
          outlined
      >
        <v-list-item three-line>
          <v-list-item-content>
            <div class="mb-4">
              MU
            </div>
            <v-list-item-title class="text-h5 mb-1">
              Mengyu Rao
            </v-list-item-title>
            <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle>
          </v-list-item-content>
          <v-list-item-avatar
              tile
              size="80"
              color="grey"
          >
            <v-img src=""></v-img>
          </v-list-item-avatar>
        </v-list-item>
        <v-card-actions>
          <v-btn
              outlined
              rounded
              text
          >
            GO
          </v-btn>
        </v-card-actions>
      </v-card>
    </div>
    <h1>sss</h1>
    <div class="FriendList">
      <v-card
          style="margin-bottom: 20px;flex:0 0 1"
          v-for="item in 10"
          :key="item"
          class="mx-auto"
          max-width="344"
          outlined
      >
        <v-list-item three-line>
          <v-list-item-content>
            <div class="mb-4">
              MU
            </div>
            <v-list-item-title class="text-h5 mb-1">
              Mengyu Rao
            </v-list-item-title>
            <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle>
          </v-list-item-content>
          <v-list-item-avatar
              tile
              size="80"
              color="grey"
          >
            <v-img src=""></v-img>
          </v-list-item-avatar>
        </v-list-item>
        <v-card-actions>
          <v-btn
              @click="window.open('','_blank')"
              outlined
              rounded
              text
          >
            Button
          </v-btn>
        </v-card-actions>
      </v-card>
    </div>
  </v-container>
</template>

<script>
export default {
  name: " Friendship",
  data() {
    return {
      friends: [
        {}
      ]
    }
  }
}
</script>

<style scoped lang="scss">
#friend {
  .FriendList {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
}
</style>
