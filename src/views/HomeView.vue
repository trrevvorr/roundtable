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
            {{ currentGameSettings.players.length }} players, started on
            {{ new Date(currentGameData.startedAt).toLocaleString() }}
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>
    <div class="container">
      <div
        v-for="(color, index) in colors"
        :key="color.slice(1)"
        :class="'level l' + index"
        :style="{ backgroundColor: color }"
      ></div>
      <v-btn fab class="button"><v-icon x-large>mdi-plus</v-icon></v-btn>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

let colormap = require("colormap");

const colors = colormap({
  colormap: "viridis",
  nshades: 10,
  format: "hex",
});

export default {
  name: "HomeView",

  data: () => ({
    drawer: false,
    group: null,
    items: [
      { title: "New game", icon: "mdi-plus", path: "/new" },
      { title: "Past games", icon: "mdi-history", path: "/past-games" },
      { title: "Settings", icon: "mdi-cog", path: "/settings" },
    ],
    right: null,
    colors: colors,
  }),
  computed: {
    ...mapGetters([
      "isGameInProgress",
      "currentGameSettings",
      "currentGameData",
    ]),
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

.container {
  height: 200px;
  width: 200px;
  position: relative;
  transform: rotate(-45deg);
}
.level {
  height: 15px;
  width: 200px;
}

.l0 {
  /* height: 40px; */
}

.button {
  position: absolute;
  top: 47px;
  right: 62px;
  transform: rotate(45deg);
}
</style>
