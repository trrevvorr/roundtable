<template>
  <v-card class="player-score" :color="scoreColor">
    <v-card-text
      class="card-text"
      :style="{ color: pickTextColorBasedOnBgColor(scoreColor) }"
    >
      <div class="text-h4 text-capitalize">
        {{ name }}
      </div>
      <div
        :class="{
          'points-field': true,
          'large-score': highestScore > 99 || lowestScore < -99,
        }"
      >
        <span class="game-points" :class="{ subtle: newRoundMode }">{{
          gameScore
        }}</span>
        <span v-if="newRoundMode" class="symbol">+</span>
        <span class="round-points" v-if="newRoundMode">
          <input
            onClick="this.select();"
            type="number"
            max="999"
            min="-999"
            class="input"
            :value="roundScore"
            :step="step"
            @change="updateRoundScore($event.target.value)"
          />
        </span>
      </div>
    </v-card-text>
    <v-card-actions v-if="newRoundMode">
      <v-btn
        class="modify-score"
        @click="updateRoundScore((roundScore || 0) - step)"
        fab
      >
        <v-icon large>mdi-minus</v-icon>
      </v-btn>
      <v-spacer />
      <v-btn
        class="modify-score"
        @click="updateRoundScore((roundScore || 0) + step)"
        fab
      >
        <v-icon large>mdi-plus</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
let colormap = require("colormap");
const colorMaps = require("@/constants/colorMaps.json");

export default {
  name: "PlayerScore",
  props: {
    name: String,
    gameScore: Number,
    roundScore: Number,
    step: Number,
    newRoundMode: Boolean,
    highestScore: Number,
    lowestScore: Number,
    highestWins: Boolean,
    colormap: String,
  },
  data: () => ({
    colors: [],
  }),
  computed: {
    scoreColor() {
      const range = this.highestScore - this.lowestScore;
      if (range === 0) {
        return this.colors[50]; // if range is 0 then everyone has the same score
      }

      const normScore = this.gameScore - this.lowestScore;
      let percent = normScore / range;
      if (!this.highestWins) {
        percent = 1 - percent;
      }

      return this.colors[Math.round(percent * 100)];
    },
  },
  created() {
    this.setColors();
  },
  watch: {
    colormap() {
      this.setColors();
    },
  },
  methods: {
    updateRoundScore(newScore) {
      let validatedScore = parseInt(newScore) || 0;
      if (validatedScore > 999) {
        validatedScore = 999;
      }
      if (validatedScore < -999) {
        validatedScore = -999;
      }

      this.$emit("change", validatedScore);
    },
    setColors() {
      this.colors.splice(
        0,
        this.colors.length,
        ...colormap({
          colormap: this.colormap,
          nshades: colorMaps[this.colormap].shadeRange[1],
          format: "hex",
        })
      );

      if (colorMaps[this.colormap].reversed) {
        this.colors.reverse();
      }
    },
    pickTextColorBasedOnBgColor(bgColor) {
      const color =
        bgColor.charAt(0) === "#" ? bgColor.substring(1, 7) : bgColor;
      const r = parseInt(color.substring(0, 2), 16); // hexToR
      const g = parseInt(color.substring(2, 4), 16); // hexToG
      const b = parseInt(color.substring(4, 6), 16); // hexToB
      const uicolors = [r / 255, g / 255, b / 255];
      const c = uicolors.map((col) => {
        if (col <= 0.03928) {
          return col / 12.92;
        }
        return Math.pow((col + 0.055) / 1.055, 2.4);
      });
      const L = 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2]; // luminance
      return L > 0.179 ? "#00000099" : "#ffffffb3";
    },
  },
};
</script>

<style scoped>
.player-score {
  width: 100%;
}

.score {
  display: grid;
  grid-template-columns: auto 1fr auto;
}

.subtle {
  opacity: 50%;
}

.modify-score {
  touch-action: manipulation;
}

.points-field {
  display: grid;
  grid-template-columns: auto auto 1fr;
  grid-column-gap: 0.5rem;
}

.points-field .game-points,
.points-field .symbol,
.points-field .round-points {
  font-size: 50px;
  line-height: 50px;
}

.points-field.large-score .game-points,
.points-field.large-score .symbol,
.points-field.large-score .round-points {
  font-size: 30px;
  line-height: 30px;
}

.points-field .game-points,
.points-field .symbol {
  margin-top: 4px;
}

.round-points .input {
  max-width: 100px;
  color: inherit;
}
</style>