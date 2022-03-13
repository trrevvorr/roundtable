<template>
  <v-card class="player-score">
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
        color="error"
        @click="$emit('change', (roundScore || 0) - step)"
      >
        -{{ step }}
      </v-btn>
      <v-btn
        class="modify-score"
        color="success"
        @click="$emit('change', (roundScore || 0) + step)"
      >
        +{{ step }}
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "PlayerSelect",
  props: {
    name: String,
    gameScore: Number,
    roundScore: Number,
    step: Number,
    roundDirty: Boolean,
  },
  data: () => ({}),
  methods: {},
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