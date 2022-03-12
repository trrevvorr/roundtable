<template>
  <v-card class="player-score">
    <v-card-text>
      <p class="text-h4">
        {{ name }}
      </p>
      <p
        :class="{
          'game-score': true,
          'text-h1': !roundDirty,
          'text-h4': roundDirty,
        }"
      >
        {{ gameScore }}
      </p>
      <p v-if="roundDirty" class="round-score text-h1">
        {{ roundScore >= 0 ? "+" : "-" }} {{ Math.abs(roundScore) }}
      </p>
    </v-card-text>
    <v-card-actions>
      <v-btn
        color="error"
        rounded
        @click="$emit('change', (roundScore || 0) - step)"
      >
        -{{ step }}
      </v-btn>
      <v-btn
        color="success"
        rounded
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

.player-score {
  margin: 1rem;
}
</style>