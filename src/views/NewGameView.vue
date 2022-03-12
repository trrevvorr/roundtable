<template>
  <div class="new-game">
    <h1>New Game</h1>

    <v-form ref="form" v-model="valid" lazy-validation>
      <v-text-field
        :value="name"
        @input="
          (val) => {
            setNewGameSettings({
              ...newGameSettings,
              name: val,
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
        :value="maxPoints"
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
        :value="stepSize"
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

      <v-checkbox v-model="highestWins" label="Highest Score Wins"></v-checkbox>

      <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">
        Start Game
      </v-btn>
    </v-form>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";

export default {
  name: "NewGameView",
  data: () => ({
    valid: true,
    name: "",
    nameRules: [
      (v) => !!v || "Name is required",
      (v) => (v && v.length <= 15) || "Name must be less than 15 characters",
    ],
    maxPoints: null,
    maxPointsRules: [(v) => v === "" || parseInt(v) > 0 || "Must be positive"],
    stepSize: 1,
    stepSizeRules: [
      (v) => !!v || "Required",
      (v) => parseInt(v) > 0 || "Must be positive",
    ],
    highestWins: true,
  }),
  created() {
    this.name = this.newGameSettings.name;
    this.maxPoints = this.newGameSettings.maxPoints;
    this.highestWins = this.newGameSettings.highestWins;
  },
  computed: {
    ...mapGetters(["newGameSettings"]),
  },
  methods: {
    ...mapMutations(["setNewGameSettings"]),
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
  },
};
</script>

<style scoped>
.new-game {
  margin: 2rem;
}
</style>