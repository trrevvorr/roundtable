<template>
  <div class="new-game">
    <h1>New Game</h1>

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
        :counter="10"
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
          color="success"
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
import router from "@/router";

export default {
  name: "NewGameView",
  components: {
    PlayerSelect,
  },
  data: () => ({
    valid: true,
    nameRules: [
      (v) => (!!v && !!v.trim()) || "Required",
      (v) => (v && v.length <= 10) || "Too long",
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
    ...mapGetters(["newGameSettings"]),
  },
  methods: {
    ...mapMutations([
      "setNewGameSettings",
      "setCurrentGameSettings",
      "endCurrentGame",
      "setCurrentGameData",
      "startNewGame",
    ]),
    startGame() {
      this.endCurrentGame();
      this.startNewGame(this.newGameSettings);
      router.push("/current");
    },
  },
};
</script>

<style scoped>
.new-game {
  margin: 2rem;
}

.actions-row {
  margin-top: 2rem;
}
</style>