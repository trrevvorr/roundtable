<template>
  <div class="player-select">
    <h3>Selected</h3>
    <div class="section">
      <div class="selected players">
        <v-badge
          v-for="(player, index) in selectedPlayers"
          :key="player"
          :content="index + 1"
          color="primary"
          overlap
          bordered
          left
        >
          <v-btn
            class="player-button"
            color="primary"
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
      </div>
    </div>

    <h3>Available</h3>
    <div class="section">
      <div class="available players">
        <v-btn
          v-for="player in nonSelectedPlayers"
          :key="player"
          @click="$emit('change', [...selectedPlayers, player])"
          class="player-button"
        >
          <span class="player">{{ player }}</span>
        </v-btn>
      </div>
    </div>

    <div class="section">
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
  }),
  created() {
    this.newPlayerRules.push(
      (v) =>
        !v ||
        (v && this.newGamePlayers && !this.newGamePlayers.includes(v)) ||
        "Must be unique"
    );
  },
  computed: {
    ...mapGetters(["newGamePlayers"]),
    nonSelectedPlayers() {
      return this.newGamePlayers
        .filter((player) => !this.selectedPlayers.includes(player))
        .sort();
    },
  },
  methods: {
    ...mapMutations(["setNewGamePlayers"]),
    addPlayer() {
      const newPlayer = this.newPlayer.trim();
      if (newPlayer) {
        this.setNewGamePlayers([...this.newGamePlayers, newPlayer]);
        this.newPlayer = undefined;
      }
    },
  },
};
</script>

<style scoped>
.section {
  margin-top: 0.5rem;
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
</style>