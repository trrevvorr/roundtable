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
        <v-divider></v-divider>
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
          this.highestWins ? "wins" : "looses"
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
</style>