<template>
  <v-app>
    <v-app-bar app color="primary">
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <v-toolbar-title>Roundtable</v-toolbar-title>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list-item-title class="text-h6 nav-title">
        Navigation
      </v-list-item-title>
      <v-divider></v-divider>
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
    <v-snackbar bottom :value="updateExists" :timeout="-1">
      An update is available
      <template v-slot:action>
        <v-btn text color="primary" @click="refreshApp"> Update </v-btn>
      </template>
    </v-snackbar>
  </v-app>
</template>

<script>
import { mapGetters } from "vuex";
import update from "./mixins/update";

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
  mixins: [update],
  metaInfo: {
    title: "Roundtable",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width" },
    ],
  },
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
    ...mapGetters(["isGameInProgress"]),
  },
  watch: {
    isGameInProgress() {
      this.setNavItems();
    },
  },
  methods: {
    setNavItems() {
      if (this.isGameInProgress) {
        this.items = [...otherItems, currentGameItem];
      } else {
        this.items = [...otherItems];
      }
    },
  },
};
</script>

<style scoped>
.nav-title {
  margin: 1rem;
}
</style>
