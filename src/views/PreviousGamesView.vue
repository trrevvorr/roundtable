<template>
  <div class="previous-games">
    <h1>Previous Games</h1>
    <v-data-table
      :headers="[
        { text: 'Started On', value: 'startedOn' },
        { text: 'Started At', value: 'startedAt' },
        { text: 'Game', value: 'name' },
        { text: 'Players', value: 'players' },
        { text: 'Rounds', value: 'rounds' },
      ]"
      :items="gameItems"
      class="games-table"
      disable-filtering
      disable-sort
      no-data-text="No previous games"
      @click:row="(game) => resume(game)"
    >
    </v-data-table>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import router from "@/router";

export default {
  name: "PreviousGamesView",

  data: () => ({
    resumeGameConfirmation: false,
  }),
  computed: {
    ...mapGetters(["previousGameStates"]),
    gameItems() {
      const sortedGames = [...this.previousGameStates];
      sortedGames.sort((a, b) => b.data.startedAt - a.data.startedAt);
      return sortedGames.map((game) => ({
        startedOn: new Date(game.data.startedAt).toLocaleDateString(),
        startedAt: new Date(game.data.startedAt).toLocaleTimeString(),
        name: game.settings.name,
        players: game.settings.players.length,
        rounds: game.rounds.length,
        game: game,
      }));
    },
  },
  methods: {
    ...mapMutations(["endCurrentGame", "resumeGame"]),
    resume(gameItem) {
      this.endCurrentGame();
      this.resumeGame(gameItem.game);
      router.push("/current");
    },
  },
};
</script>

<style scoped>
.previous-games {
  margin: 2rem;
}

h1 {
  margin-bottom: 1rem;
}
</style>
