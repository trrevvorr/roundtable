<template>
  <div class="current-game">
    <CurrentGameMenu
      class="game-menu"
      :gameName="currentGameSettings.name"
      :highestWins="currentGameSettings.highestWins"
      :maxPoints="currentGameSettings.maxPoints"
      :roundDirty="roundDirty"
      :rounds="currentGameRounds"
      :players="currentGameSettings.players"
      @saveRound="saveRound"
      @endGame="endGame"
    />
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
        :highestScore="highestScore"
        :lowestScore="lowestScore"
      />
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";
import PlayerScore from "@/components/PlayerScore.vue";
import CurrentGameMenu from "@/components/CurrentGameMenu.vue";
import router from "@/router";

export default {
  name: "CurrentGameView",
  components: { PlayerScore, CurrentGameMenu },
  data: () => ({
    newRound: {},
    roundDirty: false,
  }),
  created() {
    this.resetRound();
  },
  computed: {
    ...mapGetters(["currentGameRounds", "currentGameSettings"]),
    highestScore() {
      return Math.max(
        ...this.currentGameSettings.players.map((player) =>
          this.getScoreForPlayer(player)
        )
      );
    },
    lowestScore() {
      return Math.min(
        ...this.currentGameSettings.players.map((player) =>
          this.getScoreForPlayer(player)
        )
      );
    },
  },
  methods: {
    ...mapMutations([
      "setCurrentGameRounds",
      "endCurrentGame",
      "setCurrentGameSettings",
    ]),
    resetRound() {
      const round = {};
      this.currentGameSettings.players.forEach((player) => {
        round[player] = 0;
      });
      this.newRound = Object.assign({}, round);
      this.roundDirty = false;
    },
    getScoreForPlayer(player) {
      let total = 0;
      this.currentGameRounds.forEach((round) => {
        total += round[player];
      });
      return total;
    },
    setRoundScore(player, newRoundScore) {
      this.newRound[player] = newRoundScore;
      this.roundDirty = true;
    },
    saveRound() {
      this.setCurrentGameRounds([...this.currentGameRounds, this.newRound]);
      this.resetRound();
    },
    endGame() {
      this.endCurrentGame();
      router.push("/new");
    },
  },
};
</script>

<style scoped>
.current-game {
  margin: 2rem;
}

.game-menu {
  margin-bottom: 1rem;
}

.players {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
}
</style>