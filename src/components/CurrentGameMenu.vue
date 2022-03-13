<template>
  <v-card class="player-score">
    <v-card-text>
      <p class="text-h4">
        {{ gameName }}
      </p>
      <ul>
        <li>{{ highestWins ? "Highest" : "Lowest" }} score wins</li>
        <li v-if="maxPoints">Play to {{ maxPoints }}</li>
      </ul>
    </v-card-text>
    <v-card-actions>
      <v-btn v-if="roundDirty" color="primary" @click="$emit('saveRound')">
        Save Round
      </v-btn>
      <v-btn @click="showRounds = !showRounds">
        {{ showRounds ? "Hide" : "Show" }} Rounds
      </v-btn>
      <v-btn color="error" @click="$emit('endGame')"> End Game </v-btn>
    </v-card-actions>
    <v-expand-transition>
      <v-card
        v-if="showRounds"
        class="transition-fast-in-fast-out v-card--reveal"
        style="height: 100%"
      >
        <v-card-text class="pb-0">
          <v-data-table
            :headers="
              players.map((player) => ({
                text: player,
                value: player,
              }))
            "
            :items="rounds"
            class="elevation-1"
            disable-filtering
            disable-sort
          ></v-data-table>
        </v-card-text>
      </v-card>
    </v-expand-transition>
  </v-card>
</template>

<script>
export default {
  name: "CurrentGameMenu",
  props: {
    gameName: String,
    highestWins: Boolean,
    maxPoints: Number,
    roundDirty: Boolean,
    rounds: Array,
    players: Array,
  },
  data: () => ({
    showRounds: false,
  }),
  methods: {},
};
</script>

<style scoped>
.score {
  display: grid;
  grid-template-columns: auto 1fr auto;
}
</style>