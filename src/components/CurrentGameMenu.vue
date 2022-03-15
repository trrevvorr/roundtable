<template>
  <v-card class="player-score">
    <v-card-title> {{ gameName }} </v-card-title>
    <v-card-subtitle>{{ gameDescription }}</v-card-subtitle>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn text @click="showRounds = !showRounds">
        {{ showRounds ? "Hide" : "Show" }} Rounds
      </v-btn>
      <v-btn color="error" @click="$emit('endGame')"> End Game </v-btn>
    </v-card-actions>
    <v-expand-transition>
      <div v-show="showRounds">
        <br />
        <v-data-table
          :headers="[
            { text: 'Round', value: 'round', divider: true },
            ...players.map((player) => ({
              text: player.charAt(0).toUpperCase() + player.slice(1), // capitalize
              value: player,
            })),
          ]"
          :items="
            rounds.map((round, index) => ({ ...round, round: index + 1 }))
          "
          class="rounds-table"
          disable-filtering
          disable-sort
          no-data-text="No rounds entered"
        ></v-data-table>
      </div>
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
    rounds: Array,
    players: Array,
  },
  data: () => ({
    showRounds: false,
  }),
  computed: {
    gameDescription() {
      if (this.maxPoints) {
        return `First to ${this.maxPoints} ${
          this.highestWins ? "wins" : "loses"
        }`;
      } else {
        return `${this.highestWins ? "Highest" : "Lowest"} score wins`;
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

.rounds-table {
  margin: 0 2rem;
}
</style>