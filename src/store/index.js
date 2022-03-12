import Vue from 'vue';
import Vuex from 'vuex';
import { getAllData, setAllData } from '@/scripts/localStorage';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    gameSettings: {
      players: getAllData().gameSettings.players || [],
      previous: getAllData().gameSettings.previous || [],
      current: getAllData().gameSettings.current || {}
    },
    gameState: {
      current: {
        settings: getAllData().gameState.current.settings || {},
        rounds: getAllData().gameState.current.rounds || []
      },
      previous: getAllData().gameState.previous || []
    }
  },
  getters: {
    newGameSettings: state => {
      return { ...state.gameSettings.current };
    },
    newGamePlayers: state => {
      return [...state.gameSettings.players];
    },
    currentGameSettings: state => {
      return { ...state.gameState.current.settings };
    },
    currentGameRounds: state => {
      return [...state.gameState.current.rounds];
    },
  },
  mutations: {
    setNewGameSettings(state, settings) {
      state.gameSettings.current = { ...settings };
      setAllData(state);
    },
    setNewGamePlayers(state, players) {
      state.gameSettings.players = [...players];
      setAllData(state);
    },
    setCurrentGameSettings(state, settings) {
      state.gameState.current.settings = { ...settings };
      setAllData(state);
    },
    setCurrentGameRounds(state, rounds) {
      state.gameState.current.rounds = { ...rounds };
      setAllData(state);
    }
  },
  actions: {
  },
  modules: {
  },
});
