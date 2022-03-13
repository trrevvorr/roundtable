<template>
  <v-card class="player-score">
    <v-card-text>
      <p class="text-h4">
        {{ name }}
      </p>
      <p class="text-h2">
        <span :class="{ subtle: roundDirty }">{{ gameScore }}</span>
        <span v-if="roundDirty"
          >{{ roundScore >= 0 ? " + " : " - " }}{{ Math.abs(roundScore) }}</span
        >
      </p>
    </v-card-text>
    <v-card-actions>
      <v-btn color="error" @click="$emit('change', (roundScore || 0) - step)">
        -{{ step }}
      </v-btn>
      <v-btn color="success" @click="$emit('change', (roundScore || 0) + step)">
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
</style>