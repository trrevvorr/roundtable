<template>
  <v-card class="player-score" :color="scoreColor">
    <v-card-text>
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
        rounded
      >
        <v-icon>mdi-minus</v-icon>
      </v-btn>
      <v-spacer />
      <v-btn
        class="modify-score"
        @click="updateRoundScore((roundScore || 0) + step)"
        rounded
      >
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
let colormap = require("colormap");

const colors = colormap({
  colormap: "viridis",
  nshades: 130, // greater than 100 to cut out undesirable yellow part of spectrum
  format: "hex",
});

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
  computed: {
    scoreColor() {
      const range = this.highestScore - this.lowestScore;
      if (range === 0) {
        return colors[50]; // if range is 0 then everyone has the same score
      }

      const normScore = this.gameScore - this.lowestScore;
      let percent = normScore / range;
      if (!this.highestWins) {
        percent = 1 - percent;
      }

      return colors[Math.round(percent * 100)];
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