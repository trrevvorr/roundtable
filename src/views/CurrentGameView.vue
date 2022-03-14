<template>
  <div class="current-game">
    <CurrentGameMenu
      class="game-menu"
      :gameName="currentGameSettings.name"
      :highestWins="currentGameSettings.highestWins"
      :maxPoints="currentGameSettings.maxPoints"
      :rounds="currentGameRounds"
      :players="currentGameSettings.players"
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
        :newRoundMode="newRoundMode"
        :highestScore="highestScore"
        :lowestScore="lowestScore"
        :highestWins="currentGameSettings.highestWins"
      />
    </div>
    <!-- <v-fab-transition> -->
    <v-btn
      v-if="newRoundMode"
      key="save-round"
      color="primary"
      large
      bottom
      right
      fixed
      rounded
      @click="saveRound"
    >
      Save Round
    </v-btn>
    <v-btn
      v-else
      key="new-round"
      color="primary"
      rounded
      large
      bottom
      right
      fixed
      @click="newRoundMode = true"
    >
      Add Round
    </v-btn>
    <!-- </v-fab-transition> -->
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
    newRoundMode: false,
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
      this.newRoundMode = false;
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
  margin: 0 auto;
  padding: 30px;
  max-width: 2500px;
}

.game-menu {
  margin-bottom: 1rem;
}

.players {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 15px;
}
/* 
cards must be at least 245 px wide 
+ 15px of gap between cards
+ 60px padding around page
max-width = n(245 + 15) - 15 + 60
*/

/*  6(245 + 15) - 15 + 60 = 1605 */
@media (max-width: 1605px) {
  .players {
    grid-template-columns: repeat(5, 1fr);
  }
}
/*  5(245 + 15) - 15 + 60 = 1345 */
@media (max-width: 1345px) {
  .players {
    grid-template-columns: repeat(4, 1fr);
  }
}
/*  4(245 + 15) - 15 + 60 = 1085 */
@media (max-width: 1085px) {
  .players {
    grid-template-columns: repeat(3, 1fr);
  }
}
/*  3(245 + 15) - 15 + 60 = 825 */
@media (max-width: 825px) {
  .players {
    grid-template-columns: repeat(2, 1fr);
  }
}
/* 2(245 + 15) - 15 + 60 = 565 */
@media (max-width: 565px) {
  .players {
    grid-template-columns: 1fr;
  }
}
</style>