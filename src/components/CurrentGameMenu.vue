<template>
  <div>
    <v-card class="player-score">
      <v-card-title>
        <ActionHeader class="favorite-games-header" :header="gameName">
          <v-btn @click="editGameSettings = true" icon>
            <v-icon>mdi-cog</v-icon>
          </v-btn>
        </ActionHeader>
      </v-card-title>
      <v-card-subtitle>{{ gameDescription }}</v-card-subtitle>
      <v-card-actions>
        <v-btn
          :outlined="showRounds"
          :text="!showRounds"
          color="white"
          @click="
            () => {
              showGraph = false;
              showRounds = !showRounds;
            }
          "
        >
          <!-- <v-icon>{{
            showRounds ? "mdi-chevron-down" : "mdi-chevron-up"
          }}</v-icon> -->
          Rounds
        </v-btn>
        <v-btn
          :outlined="showGraph"
          :text="!showGraph"
          color="white"
          @click="
            () => {
              showRounds = false;
              showGraph = !showGraph;
            }
          "
        >
          <!-- <v-icon>{{
            showGraph ? "mdi-chevron-down" : "mdi-chevron-up"
          }}</v-icon> -->
          Graph
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn color="error" @click="$emit('endGame')"> End Game </v-btn>
      </v-card-actions>
      <v-expand-transition>
        <div v-show="showRounds">
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
            disable-pagination
            hide-default-footer
            no-data-text="No rounds entered"
            @click:row="(row, metadata) => $emit('editRound', metadata.index)"
          ></v-data-table>
        </div>
      </v-expand-transition>
      <v-expand-transition>
        <div v-if="showGraph">
          <br />
          <LineChart
            :players="currentGameSettings.players"
            :rounds="currentGameRounds"
          />
        </div>
      </v-expand-transition>
    </v-card>
    <v-dialog v-model="editGameSettings" max-width="500">
      <v-card>
        <v-card-title> Game Settings </v-card-title>

        <v-card-text>
          <GameSettings
            :gameSettings="editedCurrentGameSettings"
            :appSettings="editedAppSettings"
            :showHeader="false"
            :displayAppSettings="true"
            @change="(val) => (editedCurrentGameSettings = val)"
            @changeAppSettings="(val) => (editedAppSettings = val)"
            @valid="(newValid) => (valid = newValid)"
          />
        </v-card-text>

        <v-card-actions>
          <v-btn @click="editGameSettings = false">Cancel</v-btn>
          <v-btn color="primary" @click="saveSettings" :disabled="!valid"
            >Save</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";
import ActionHeader from "@/components/ActionHeader";
import GameSettings from "@/components/GameSettings";
import LineChart from "@/components/LineChart";

export default {
  name: "CurrentGameMenu",
  components: { ActionHeader, GameSettings, LineChart },
  props: {
    gameName: String,
    highestWins: Boolean,
    maxPoints: Number,
    rounds: Array,
    players: Array,
  },
  data: () => ({
    showRounds: false,
    showGraph: false,
    editGameSettings: false,
    valid: true,
    editedCurrentGameSettings: {},
    editedAppSettings: {},
  }),
  created() {
    this.editedCurrentGameSettings = this.currentGameSettings;
    this.editedAppSettings = this.appSettings;
  },
  watch: {
    currentGameSettings() {
      this.editedCurrentGameSettings = this.currentGameSettings;
    },
    appSettings() {
      this.editedAppSettings = this.appSettings;
    },
  },
  computed: {
    ...mapGetters(["currentGameSettings", "appSettings", "currentGameRounds"]),
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
  methods: {
    ...mapMutations(["setCurrentGameSettings", "setAppSettings"]),
    saveSettings() {
      this.setCurrentGameSettings({ ...this.editedCurrentGameSettings });
      this.setAppSettings({ ...this.editedAppSettings });
      this.editGameSettings = false;
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