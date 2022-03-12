import Vue from 'vue';
import Vuex from 'vuex';
import { getAllData, setAllData } from '@/scripts/localStorage';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    gameSettings: {
      previous: getAllData().gameSettings.previous, // []
      current: getAllData().gameSettings.current // {}
    },
    gameState: {
      current: {
        settings: getAllData().gameState.current.settings, // {}
        rounds: getAllData().gameState.current.rounds // {}
      },
      previous: getAllData().gameState.previous // []
    }
  },
  getters: {
    newGameSettings: state => {
      return {...state.gameSettings.current};
    },
    currentGameSettings: state => {
      return {...state.gameState.current.settings};
    },
    currentGameRounds: state => {
      return {...state.gameState.current.rounds};
    }
  },
  mutations: {
    setNewGameSettings(state, settings) {
      state.gameSettings.current = { ...settings};
      setAllData(state);
    },
    setCurrentGameSettings(state, settings) {
      state.gameState.current.settings = { ...settings };
      setAllData(state);
    },
    setCurrentGameScore(state, score) {
      state.gameState.current.score = { ...score };
      setAllData(state);
    }
  },
  actions: {
  },
  modules: {
  },
});
