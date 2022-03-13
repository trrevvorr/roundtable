<template>
  <v-card class="player-score" :color="scoreColor">
    <v-card-text>
      <p class="text-h4">
        {{ name }}
      </p>
      <p class="text-h2 points-field">
        <span class="game-points" :class="{ subtle: roundDirty }">{{
          gameScore
        }}</span>
        <span v-if="roundDirty" class="text-h2 symbol">+</span>
        <span class="round-points" v-if="roundDirty">
          <input
            type="number"
            class="text-h2 input"
            :value="roundScore"
            :step="step"
            @change="$emit('change', parseInt($event.target.value) || 0)"
          />
        </span>
      </p>
    </v-card-text>
    <v-card-actions>
      <v-btn
        class="modify-score"
        color="red"
        @click="$emit('change', (roundScore || 0) - step)"
      >
        -{{ step }}
      </v-btn>
      <v-btn
        class="modify-score"
        color="green"
        @click="$emit('change', (roundScore || 0) + step)"
      >
        +{{ step }}
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import colors from "vuetify/lib/util/colors";
import tinycolor from "tinycolor2";

export default {
  name: "PlayerSelect",
  props: {
    name: String,
    gameScore: Number,
    roundScore: Number,
    step: Number,
    roundDirty: Boolean,
    highestScore: Number,
    lowestScore: Number,
  },
  data: () => ({}),
  computed: {
    scoreColorRatio() {
      const range = this.highestScore - this.lowestScore;
      const normScore = this.gameScore - this.lowestScore;
      const percent = normScore / range;
      const greenPercent = Math.max(percent - 0.5, 0.0) * 2 * 100;
      const redPercent = Math.max(1 - percent - 0.5, 0.0) * 2 * 100;

      return { green: greenPercent, red: redPercent };
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
};
</script>

<style scoped>
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
.points-field .symbol {
  margin-top: 4px;
}

.round-points .input {
  max-width: 120px;
  color: inherit;
}
</style>