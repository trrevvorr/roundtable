<template>
  <div class="new-game">
    <h1>New Game</h1>
    <FavoriteGames :currentSettingsValid="valid" />
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-text-field
        :value="newGameSettings.name"
        @input="
          (val) => {
            setNewGameSettings({
              ...newGameSettings,
              name: val.trim(),
            });
          }
        "
        :counter="15"
        :rules="nameRules"
        label="Name"
        required
      ></v-text-field>

      <v-text-field
        type="number"
        :value="newGameSettings.maxPoints"
        :rules="maxPointsRules"
        @input="
          (val) =>
            setNewGameSettings({
              ...newGameSettings,
              maxPoints: parseInt(val) || null,
            })
        "
        label="Max Points"
      ></v-text-field>

      <v-text-field
        type="number"
        :value="newGameSettings.stepSize"
        :rules="stepSizeRules"
        required
        @input="
          (val) =>
            setNewGameSettings({
              ...newGameSettings,
              stepSize: parseInt(val) || 1,
            })
        "
        label="Step Size"
      ></v-text-field>

      <v-checkbox
        :input-value="newGameSettings.highestWins"
        @change="
          (val) =>
            setNewGameSettings({
              ...newGameSettings,
              highestWins: val,
            })
        "
        label="Highest Score Wins"
      ></v-checkbox>

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
    </v-form>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";
import PlayerSelect from "@/components/PlayerSelect.vue";
import FavoriteGames from "@/components/FavoriteGames.vue";
import router from "@/router";

export default {
  name: "NewGameView",
  components: {
    PlayerSelect,
    FavoriteGames,
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
    applyFavorite(fav) {
      this.setNewGameSettings({
        ...this.newGameSettings,
        ...fav,
      });
    },
  },
};
</script>

<style scoped>
.new-game {
  margin: 2rem;
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

.fav-button {
  margin-right: 1rem;
  margin-bottom: 1rem;
}

.custom-game-header {
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
}
</style>