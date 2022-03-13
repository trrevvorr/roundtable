<template>
  <v-app>
    <v-app-bar app color="primary">
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <v-toolbar-title>Roundtable</v-toolbar-title>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <br />
      <br />
      <br />
      <v-list dense nav>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          :to="item.path"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import { mapGetters } from "vuex";

const currentGameItem = {
  title: "Active Game",
  icon: "mdi-play",
  path: "/current",
};

const otherItems = [
  { title: "Home", icon: "mdi-home", path: "/" },
  { title: "New Game", icon: "mdi-plus", path: "/new" },
];

export default {
  name: "App",

  data: () => ({
    drawer: false,
    group: null,
    items: [],
    right: null,
  }),
  created() {
    this.setNavItems();
  },
  computed: {
    ...mapGetters(["currentGameSettings"]),
    isGameActive() {
      return !!this.currentGameSettings;
    },
  },
  watch: {
    isGameActive() {
      this.setNavItems();
    },
  },
  methods: {
    setNavItems() {
      if (this.isGameActive) {
        this.items = [...otherItems, currentGameItem];
      } else {
        this.items = [...otherItems];
      }
    },
  },
};
</script>
