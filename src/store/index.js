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
    isGameInProgress: state => {
      return JSON.stringify(state.gameState.current.settings) !== "{}";
    },
    previousGameStates: state => {
      return [...state.gameState.previous];
    },
  },
  mutations: {
    setNewGameSettings(state, settings) {
      state.gameSettings.current = { ...settings };
      setAllData(state);
    },
    setNewGamePlayers(state, players) {
      if (Array.isArray(players)) {
        state.gameSettings.players = [...players];
        setAllData(state);
      } else {
        console.error("setNewGamePlayers called with", players);
      }
    },
    setCurrentGameSettings(state, settings) {
      state.gameState.current.settings = { ...settings };
      setAllData(state);
    },
    setCurrentGameRounds(state, rounds) {
      if (Array.isArray(rounds)) {
        state.gameState.current.rounds = [...rounds];
        setAllData(state);
      } else {
        console.error("setCurrentGameRounds called with", rounds);
      }
    },
    setPreviousGameStates(state, prevGames) {
      if (Array.isArray(prevGames)) {
        state.gameState.previous = [...prevGames];
        setAllData(state);
      } else {
        console.error("setPreviousGameStates called with", prevGames);
      }
    },
    endCurrentGame(state) {
      if (JSON.stringify(state.gameState.current.settings) !== "{}") {
        const newPrevGames = [
          ...state.gameState.previous,
          {
            settings: { ...state.gameState.current.settings },
            rounds: [...state.gameState.current.rounds],
          },
        ];
        state.gameState.previous = newPrevGames;
        state.gameState.current.settings = {};
        state.gameState.current.rounds = [];
      } else {
        console.warn("Could not save current game to previous games because either settings was unset");
      }
    }
  },
  actions: {
  },
  modules: {
  },
});
