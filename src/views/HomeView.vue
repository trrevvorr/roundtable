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

    <br />
    <v-list class="install-app">
      <v-list-group
        :value="false"
        no-action
        prepend-icon="mdi-download"
        color="white"
      >
        <template v-slot:activator>
          <v-list-item-content>
            <v-list-item-title>How To Install App</v-list-item-title>
          </v-list-item-content>
        </template>

        <v-list-item class="step">
          <v-list-item-icon class="step-icon">
            <v-icon large> mdi-numeric-1 </v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <img src="../assets/install_1.png" />
          </v-list-item-content>
        </v-list-item>
        <v-list-item class="step">
          <v-list-item-icon class="step-icon">
            <v-icon large> mdi-numeric-2 </v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <img src="../assets/install_2.png" />
          </v-list-item-content>
        </v-list-item>
        <v-list-item class="step">
          <v-list-item-icon class="step-icon">
            <v-icon large> mdi-numeric-3 </v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <img src="../assets/install_3.png" />
          </v-list-item-content>
        </v-list-item>
      </v-list-group>
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
    items: [
      { title: "New game", icon: "mdi-plus", path: "/new" },
      { title: "Past games", icon: "mdi-history", path: "/past-games" },
      { title: "Settings", icon: "mdi-cog", path: "/settings" },
    ],
    right: null,
    expandInstallApp: false,
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

.install-app img {
  width: 100%;
  border-radius: 5px;
  max-width: 20rem;
}

.install-app .step {
  padding-left: 1rem !important;
}
.step-icon {
  margin: auto;
}
</style>
