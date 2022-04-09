<template>
  <div class="current-game" v-if="!gameOver">
    <CurrentGameMenu
      class="game-menu"
      :gameName="currentGameSettings.name"
      :highestWins="currentGameSettings.highestWins"
      :maxPoints="currentGameSettings.maxPoints"
      :rounds="currentGameRounds"
      :players="currentGameSettings.players"
      @endGame="endGameConfirmation = true"
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
        :colormap="appSettings.colorMap"
      />
    </div>
    <div>
      <div v-if="newRoundMode">
        <v-btn
          key="save-round"
          large
          bottom
          right
          fixed
          rounded
          @click="saveRound"
        >
          <v-icon left>mdi-floppy</v-icon>
          Save
        </v-btn>
        <v-btn
          key="cancel-round"
          large
          bottom
          left
          fixed
          rounded
          @click="resetRound"
        >
          <v-icon left>mdi-cancel</v-icon>
          Cancel
        </v-btn>
      </div>
      <v-btn
        v-else
        key="new-round"
        rounded
        large
        bottom
        right
        fixed
        @click="newRoundMode = true"
      >
        <v-icon left>mdi-plus</v-icon>
        Round
      </v-btn>
    </div>
    <GameOverDialog
      v-model="gameOverDialog"
      :players="currentGameSettings.players"
      :rounds="currentGameRounds"
      :highestWins="currentGameSettings.highestWins"
      @endGame="endGame"
    />
    <ConfirmationDialog
      v-model="endGameConfirmation"
      confirmText="End Game"
      denyText="Go Back"
      title="End Game?"
      @confirm="endGame"
    />
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";
import PlayerScore from "@/components/PlayerScore.vue";
import CurrentGameMenu from "@/components/CurrentGameMenu.vue";
import GameOverDialog from "@/components/GameOverDialog.vue";
import ConfirmationDialog from "@/components/ConfirmationDialog.vue";
import router from "@/router";

export default {
  name: "CurrentGameView",
  components: {
    PlayerScore,
    CurrentGameMenu,
    GameOverDialog,
    ConfirmationDialog,
  },
  data: () => ({
    newRound: {},
    newRoundMode: false,
    gameOverDialog: false,
    endGameConfirmation: false,
    gameOver: false,
  }),
  created() {
    this.resetRound();
  },
  computed: {
    ...mapGetters(["currentGameRounds", "currentGameSettings", "appSettings"]),
    highestScore() {
      return (
        !this.gameOver &&
        Math.max(
          ...this.currentGameSettings.players.map((player) =>
            this.getScoreForPlayer(player)
          )
        )
      );
    },
    lowestScore() {
      return (
        !this.gameOver &&
        Math.min(
          ...this.currentGameSettings.players.map((player) =>
            this.getScoreForPlayer(player)
          )
        )
      );
    },
  },
  watch: {
    highestScore() {
      if (
        this.currentGameSettings.maxPoints &&
        this.highestScore >= this.currentGameSettings.maxPoints
      ) {
        this.gameOverDialog = true;
      }
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
      this.gameOver = true; // prevents errors during transition to game over
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
  margin-bottom: 3rem;
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