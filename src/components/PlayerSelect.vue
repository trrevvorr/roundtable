<template>
  <div>
    <div class="section">
      <div class="available-header">
        <h2>Players</h2>
        <v-btn v-if="!editMode" color="primary" @click="editMode = true" icon>
          <v-icon>mdi-pencil</v-icon>
        </v-btn>
        <v-btn v-else color="success" @click="editMode = false" icon>
          <v-icon>mdi-check</v-icon>
        </v-btn>
      </div>
      <div class="available players">
        <span v-for="player in players" :key="player">
          <v-btn
            v-if="editMode"
            @click="removePlayer(player)"
            color="error"
            class="player-button edit-mode"
            rounded
            outlined
          >
            <v-icon>mdi-delete</v-icon>
            <span class="player">{{ player }}</span>
          </v-btn>
          <v-badge
            v-else-if="selectedPlayers.includes(player)"
            :content="selectedPlayers.indexOf(player) + 1"
            color="purple"
            overlap
            bordered
            left
          >
            <v-btn
              class="player-button"
              color="purple"
              rounded
              outlined
              @click="
                $emit(
                  'change',
                  selectedPlayers.filter((sp) => sp !== player)
                )
              "
            >
              {{ player }}
            </v-btn>
          </v-badge>
          <v-btn
            v-else
            @click="$emit('change', [...selectedPlayers, player])"
            class="player-button"
            rounded
            outlined
          >
            <span class="player">{{ player }}</span>
          </v-btn>
        </span>
        <div
          v-if="!players.length && !editMode"
          class="text-subtitle-2 text--secondary"
        >
          Click
          <v-icon class="text-subtitle-2 text--secondary">mdi-pencil</v-icon>
          to add players
        </div>
      </div>
    </div>

    <div class="section" v-if="editMode">
      <v-form ref="player-select-form" v-model="valid" lazy-validation>
        <div class="new-player-form">
          <v-text-field
            v-model="newPlayer"
            :counter="10"
            :rules="newPlayerRules"
            label="New Player"
            required
          ></v-text-field>
          <v-btn
            :disabled="!valid || !newPlayer"
            color="success"
            class="mr-4"
            @click="addPlayer"
          >
            Add Player
          </v-btn>
        </div>
      </v-form>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";

export default {
  name: "PlayerSelect",
  props: {
    selectedPlayers: [],
  },
  data: () => ({
    valid: true,
    newPlayer: "",
    newPlayerRules: [(v) => !v || v.length <= 10 || "Too long"],
    editMode: false,
  }),
  created() {
    this.newPlayerRules.push(
      (v) =>
        !v ||
        (v &&
          this.newGamePlayers &&
          !this.newGamePlayers.includes(v.toLowerCase())) ||
        "Must be unique"
    );
  },
  computed: {
    ...mapGetters(["newGamePlayers"]),
    players() {
      return [...this.newGamePlayers].sort();
    },
  },
  methods: {
    ...mapMutations(["setNewGamePlayers"]),
    addPlayer() {
      const newPlayer = this.newPlayer.trim();
      if (newPlayer) {
        this.setNewGamePlayers([
          ...this.newGamePlayers,
          newPlayer.toLowerCase(),
        ]);
        this.newPlayer = undefined;
      }
    },
    removePlayer(player) {
      this.setNewGamePlayers([
        ...this.newGamePlayers.filter((p) => p !== player),
      ]);
    },
  },
};
</script>

<style scoped>
.section {
  margin-top: 0.5rem;
}

h2 {
  margin-bottom: 1rem;
}

.player-button {
  margin-right: 0.75rem;
  margin-bottom: 1rem;
}

.player-button .order {
  background-color: white;
  color: black;
  border-radius: 8px;
  padding: 0 5px;
  font-size: 12px;
  line-height: 16px;
  margin-right: 0.5rem;
}

.new-player-form {
  margin-bottom: 1rem;
  display: grid;
  grid-template-columns: 1fr auto;
  grid-column-gap: 1rem;
}

.available-header {
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
}
</style>