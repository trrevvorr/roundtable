<template>
  <div class="new-game">
    <h1>New Game</h1>
    <div class="game-favorites-and-settings">
      <div class="favorites">
        <FavoriteGames :currentSettingsValid="valid" />
      </div>
      <div class="settings">
        <GameSettings
          :gameSettings="newGameSettings"
          :allowSaveFavorite="true"
          @change="(val) => setNewGameSettings(val)"
          @saveFavorite="saveFavorite"
          @valid="(newValid) => (valid = newValid)"
        />
      </div>
    </div>

    <PlayerSelect
      :selectedPlayers="newGameSettings.players"
      @change="
        (players) =>
          setNewGameSettings({
            ...newGameSettings,
            players: players,
          })
      "
    />

    <div class="actions-row">
      <v-btn
        :disabled="!valid || !newGameSettings.players.length"
        color="primary"
        @click="startGame"
      >
        Start Game
      </v-btn>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";
import PlayerSelect from "@/components/PlayerSelect.vue";
import FavoriteGames from "@/components/FavoriteGames.vue";
import GameSettings from "@/components/GameSettings.vue";
import router from "@/router";

export default {
  name: "NewGameView",
  components: {
    PlayerSelect,
    FavoriteGames,
    GameSettings,
  },
  data: () => ({
    valid: true,
    nameRules: [
      (v) => (!!v && !!v.trim()) || "Required",
      (v) => (v && v.length <= 15) || "Too long",
    ],
    maxPointsRules: [
      (v) => v === null || parseInt(v) > 0 || "Must be positive",
    ],
    stepSizeRules: [
      (v) => !!v || "Required",
      (v) => parseInt(v) > 0 || "Must be positive",
    ],
  }),
  computed: {
    ...mapGetters(["newGameSettings", "newGameFavorites"]),
  },
  methods: {
    ...mapMutations([
      "setNewGameSettings",
      "setCurrentGameSettings",
      "endCurrentGame",
      "setCurrentGameData",
      "startNewGame",
      "setNewGameFavorites",
    ]),
    startGame() {
      this.endCurrentGame();
      this.startNewGame(this.newGameSettings);
      router.push("/current");
    },
    saveFavorite() {
      const favorite = { ...this.newGameSettings };
      delete favorite.players;

      this.setNewGameFavorites({
        ...this.newGameFavorites,
        [favorite.name]: favorite,
      });
    },
  },
};
</script>

<style scoped>
.new-game {
  padding: 2rem;
  margin: 0 auto;
  max-width: 50rem;
}

h2 {
  margin: 1rem 0;
}

.actions-row {
  margin-top: 2rem;
}

.actions-row {
  display: grid;
  grid-template-columns: auto auto 1fr;
  grid-gap: 1rem;
}

.game-favorites-and-settings {
  display: grid;
  grid-template-areas: "settings favorites";
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 3rem;
}

.game-favorites-and-settings .favorites {
  grid-area: favorites;
}

.game-favorites-and-settings .settings {
  grid-area: settings;
}

@media (max-width: 600px) {
  .game-favorites-and-settings {
    grid-template-areas:
      "favorites"
      "settings";
    grid-template-columns: 1fr;
  }
}
</style>