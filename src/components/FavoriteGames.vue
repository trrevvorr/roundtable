<template>
  <div class="favorite-games" v-if="Object.keys(newGameFavorites).length">
    <ActionHeader class="favorite-games-header" header="Favorite Games">
      <v-btn v-if="!editMode" @click="editMode = true" icon>
        <v-icon>mdi-pencil</v-icon>
      </v-btn>
      <v-btn v-else color="success" @click="editMode = false" icon>
        <v-icon>mdi-check</v-icon>
      </v-btn>
    </ActionHeader>
    <span v-for="fav in Object.values(newGameFavorites)" :key="fav.name">
      <v-btn
        v-if="editMode"
        @click="deleteFavorite(fav)"
        class="fav-button"
        rounded
        outlined
        color="error"
      >
        <v-icon left>mdi-delete</v-icon>
        {{ fav.name }}
      </v-btn>
      <v-btn
        v-else
        @click="applyFavorite(fav)"
        class="fav-button"
        rounded
        outlined
        color="yellow darken-3"
      >
        <v-icon left>mdi-star</v-icon>
        {{ fav.name }}
      </v-btn>
    </span>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";
import ActionHeader from "@/components/ActionHeader";

export default {
  name: "FavoriteGames",
  components: {
    ActionHeader,
  },
  props: {
    currentSettingsValid: Boolean,
  },
  data: () => ({
    editMode: false,
  }),
  computed: {
    ...mapGetters(["newGameSettings", "newGameFavorites"]),
  },
  methods: {
    ...mapMutations(["setNewGameSettings", "setNewGameFavorites"]),
    applyFavorite(fav) {
      this.setNewGameSettings({
        ...this.newGameSettings,
        ...fav,
      });
    },
    deleteFavorite(fav) {
      const newFavs = { ...this.newGameFavorites };
      delete newFavs[fav.name];

      this.setNewGameFavorites(newFavs);
    },
  },
};
</script>

<style scoped>
h2 {
  margin: 1rem 0;
}

.fav-button {
  margin-right: 1rem;
  margin-bottom: 1rem;
}

.favorite-games-header {
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
}
</style>