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

        <div v-if="displayAppSettings">
          <div class="color-map">
            <v-select
              v-model="selectedColor"
              :items="Object.keys(colorMaps)"
              label="Color Map"
            ></v-select>
            <div class="color-example">
              <span
                v-for="color in colors"
                :key="color"
                :style="{ backgroundColor: color }"
                class="color-swatch"
              ></span>
            </div>
          </div>

          <v-select
            v-model="sortPlayersBy"
            :items="Object.values(playerSortOptions)"
            label="Sort Players By"
          ></v-select>
        </div>
      </div>
    </v-form>
  </div>
</template>

<script>
import ActionHeader from "@/components/ActionHeader";
let colormap = require("colormap");
const colorMaps = require("@/constants/colorMaps.json");
const playerSortOptions = require("@/constants/playerSortOptions.json");

export default {
  name: "GameSettings",
  components: { ActionHeader },
  props: {
    gameSettings: Object,
    showHeader: Boolean,
    appSettings: Object,
    displayAppSettings: Boolean,
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
    colors: [],
    selectedColor: null,
    colorMaps: colorMaps,
    playerSortOptions: playerSortOptions,
    sortPlayersBy: null,
  }),
  created() {
    if (this.appSettings) {
      this.sortPlayersBy = this.appSettings.sortPlayersBy;
      this.selectedColor = this.appSettings.colorMap;
    }
  },
  watch: {
    valid() {
      this.$emit("valid", this.valid);
    },
    appSettings() {
      this.sortPlayersBy = this.appSettings.sortPlayersBy;
      this.selectedColor = this.appSettings.colorMap;
    },
    selectedColor() {
      this.setColors();
      this.$emit("changeAppSettings", {
        ...this.appSettings,
        colorMap: this.selectedColor,
      });
    },
    sortPlayersBy() {
      this.$emit("changeAppSettings", {
        ...this.appSettings,
        sortPlayersBy: this.sortPlayersBy,
      });
    },
  },
  methods: {
    setColors() {
      const fullColors = colormap({
        colormap: this.selectedColor,
        nshades: colorMaps[this.selectedColor].shadeRange[1],
        format: "hex",
      });
      if (colorMaps[this.selectedColor].reversed) {
        fullColors.reverse();
      }
      const sampleColors = [];
      for (let i = 0; i < 100; i += 10) {
        sampleColors.push(fullColors[i]);
      }

      this.colors.splice(0, this.colors.length, ...sampleColors);
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

.color-map {
  display: grid;
  grid-template-columns: 1fr auto;
  grid-column-gap: 1rem;
  align-items: center;
}

.color-swatch {
  height: 2rem;
  width: 0.5rem;
  display: inline-block;
}
</style>