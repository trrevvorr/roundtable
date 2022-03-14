<template>
  <v-dialog
    :value="value"
    @input="(val) => $emit('input', val)"
    max-width="400"
  >
    <v-card>
      <v-card-title> Game Over </v-card-title>

      <v-card-text>
        <b>Final Standings</b>

        <ol>
          <li v-for="playerScore in playerScores" :key="playerScore.player">
            {{ playerScore.player }} scored {{ playerScore.score }}
          </li>
        </ol>
      </v-card-text>

      <v-card-actions>
        <v-btn color="error" @click="endGame">End Game</v-btn>
        <v-btn @click="$emit('input', false)">Continue</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "GameOverDialog",
  props: {
    value: Boolean,
    players: Array,
    rounds: Array,
    highestWins: Boolean,
  },
  data: () => ({}),
  computed: {
    playerScores() {
      const scores = {};
      this.players.forEach((player) => {
        scores[player] = 0;
      });

      this.rounds.forEach((round) => {
        this.players.forEach((player) => {
          scores[player] += round[player];
        });
      });

      const sortedScores = this.players.map((player) => ({
        score: scores[player],
        player: player,
      }));

      if (this.highestWins) {
        sortedScores.sort((a, b) => b.score - a.score);
      } else {
        sortedScores.sort((a, b) => a.score - b.score);
      }

      return sortedScores;
    },
  },
  methods: {
    endGame() {
      this.$emit("input", false);
      this.$emit("endGame");
    },
  },
};
</script>

<style scoped>
</style>