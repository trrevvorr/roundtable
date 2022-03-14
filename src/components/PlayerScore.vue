<template>
  <v-badge
    right
    overlap
    bordered
    color="primary"
    :value="newRoundMode && !roundScore"
  >
    <v-card class="player-score" :color="scoreColor">
      <v-card-text>
        <div class="text-h4">
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
          color="red"
          @click="updateRoundScore((roundScore || 0) - step)"
        >
          -{{ step }}
        </v-btn>
        <v-btn
          class="modify-score"
          color="green"
          @click="updateRoundScore((roundScore || 0) + step)"
        >
          +{{ step }}
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-badge>
</template>

<script>
import colors from "vuetify/lib/util/colors";
import tinycolor from "tinycolor2";

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
  },
  data: () => ({}),
  computed: {
    scoreColorRatio() {
      const range = this.highestScore - this.lowestScore;
      const normScore = this.gameScore - this.lowestScore;
      const percent = normScore / range;
      const upperPercentile = Math.max(percent - 0.5, 0.0) * 2 * 100;
      const lowerPercentile = Math.max(1 - percent - 0.5, 0.0) * 2 * 100;

      if (this.highestWins) {
        return { green: upperPercentile, red: lowerPercentile };
      } else {
        return { green: lowerPercentile, red: upperPercentile };
      }
    },
    scoreColor() {
      const { green, red } = this.scoreColorRatio;
      const darkColor = colors.grey.darken4;

      if (green > 0) {
        return (
          "#" + tinycolor.mix(darkColor, colors.green.darken4, green).toHex()
        );
      } else if (red > 0) {
        return "#" + tinycolor.mix(darkColor, colors.red.darken4, red).toHex();
      } else {
        return darkColor;
      }
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