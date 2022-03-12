<template>
  <div class="new-game">
    <h1>New Game</h1>

    <InputField label="Game Name" type="text" id="game-name" :value="newGameSettings.name" @change="setNewGameSettings({...newGameSettings, name: $event.target.value})" />
    <InputField label="Max Points" type="number" id="max-points" :value="newGameSettings.maxPoints" @change="setNewGameSettings({...newGameSettings, maxPoints: $event.target.value})" />
  </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex';
import InputField from '@/components/InputField.vue';

export default {
  name: 'NewGameView',
  components: {
    InputField
  },
  computed: {
    ...mapGetters(['newGameSettings'])
  },
  methods: {
    ...mapMutations(['setNewGameSettings'])
  }
};
</script>

