<template>
  <div class="current-game">
    <h2>Settings</h2>
    <pre>{{ JSON.stringify(currentGameSettings, null, 2) }}</pre>
    <h2>Rounds</h2>
    <pre>{{ JSON.stringify(currentGameRounds, null, 2) }}</pre>
    <div class="players">
      <PlayerScore
        v-for="player in currentGameSettings.players"
        :key="player"
        :name="player"
        :gameScore="getScoreForPlayer(player)"
        :roundScore="newRound[player]"
        :step="currentGameSettings.stepSize"
        @change="(score) => setRoundScore(player, score)"
        :roundDirty="roundDirty"
      />
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";
import PlayerScore from "@/components/PlayerScore.vue";

export default {
  name: "CurrentGameView",
  components: { PlayerScore },
  data: () => ({
    newRound: {},
    roundDirty: false,
  }),
  created() {
    this.resetRound();
  },
  computed: {
    ...mapGetters(["currentGameRounds", "currentGameSettings"]),
  },
  methods: {
    ...mapMutations(["setCurrentGameRounds"]),
    resetRound() {
      const round = {};
      this.currentGameSettings.players.forEach((player) => {
        round[player] = 0;
      });
      this.newRound = Object.assign({}, round);
      this.roundDirty = false;
    },
    getScoreForPlayer(player) {
      const total = 0;
      this.currentGameRounds.forEach((round) => {
        total += round[player];
      });
      return total;
    },
    setRoundScore(player, newRoundScore) {
      this.newRound[player] = newRoundScore;
      this.roundDirty = true;
    },
  },
};
</script>

<style scoped>
.current-game {
  margin: 2rem;
}

.players {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
</style>