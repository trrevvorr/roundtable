<template>
  <div class="home">
    <h1>Home</h1>
    <v-list>
      <v-list-item v-for="item in items" :key="item.title" link :to="item.path">
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item v-if="isGameInProgress" link to="/current">
        <v-list-item-icon>
          <v-icon>mdi-play</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>Resume game in progress</v-list-item-title>
          <v-list-item-subtitle>
            {{ currentGameSettings.name }},
            {{ currentGameSettings.players.length }} players
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "HomeView",

  data: () => ({
    drawer: false,
    group: null,
    items: [{ title: "New game", icon: "mdi-plus", path: "/new" }],
    right: null,
  }),
  computed: {
    ...mapGetters(["isGameInProgress", "currentGameSettings"]),
  },
};
</script>

<style scoped>
.home {
  margin: 2rem;
}

h1 {
  margin-bottom: 2rem;
}
</style>
