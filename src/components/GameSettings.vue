<template>
  <div class="game-settings">
    <ActionHeader
      v-if="showHeader"
      class="custom-game-header"
      header="Game Settings"
    >
      <v-btn
        color="primary"
        :disabled="!valid"
        @click="$emit('saveFavorite', gameSettings)"
        icon
      >
        <v-icon color="accent">mdi-star-plus</v-icon>
      </v-btn>
    </ActionHeader>
    <v-form ref="form" v-model="valid" lazy-validation>
      <div class="game-settings-fields">
        <v-text-field
          :value="gameSettings.name"
          @input="
            (val) => {
              $emit('change', {
                ...gameSettings,
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
          :value="gameSettings.maxPoints"
          :rules="maxPointsRules"
          @input="
            (val) =>
              $emit('change', {
                ...gameSettings,
                maxPoints: parseInt(val) || null,
              })
          "
          label="Max Points"
        ></v-text-field>

        <v-text-field
          type="number"
          :value="gameSettings.stepSize"
          :rules="stepSizeRules"
          required
          @input="
            (val) =>
              $emit('change', {
                ...gameSettings,
                stepSize: parseInt(val) || 1,
              })
          "
          label="Step Size"
        ></v-text-field>

        <v-checkbox
          :input-value="gameSettings.highestWins"
          @change="
            (val) =>
              $emit('change', {
                ...gameSettings,
                highestWins: val,
              })
          "
          label="Highest Score Wins"
        ></v-checkbox>
      </div>
    </v-form>
  </div>
</template>

<script>
import ActionHeader from "@/components/ActionHeader";

export default {
  name: "GameSettings",
  components: { ActionHeader },
  props: {
    gameSettings: Object,
    showHeader: Boolean,
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
  watch: {
    valid() {
      this.$emit("valid", this.valid);
    },
  },
};
</script>

<style scoped>
h2 {
  margin: 1rem 0;
}

.custom-game-header {
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
}
</style>