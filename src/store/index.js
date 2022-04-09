import Vue from 'vue';
import Vuex from 'vuex';
import { getAllData, setAllData } from '@/scripts/localStorage';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    gameSettings: {
      players: getAllData().gameSettings.players || [],
      favorites: getAllData().gameSettings.favorites || {},
      previous: getAllData().gameSettings.previous || [],
      current: getAllData().gameSettings.current || {}
    },
    gameState: {
      current: {
        settings: getAllData().gameState.current.settings || {},
        rounds: getAllData().gameState.current.rounds || [],
        data: getAllData().gameState.current.data || []
      },
      previous: getAllData().gameState.previous || []
    },
    appSettings: {
      colorMap: (getAllData().appSettings && getAllData().appSettings.colorMap) || "viridis",
      sortPlayersBy: (getAllData().appSettings && getAllData().appSettings.sortPlayersBy) || "turn",
    }
  },
  getters: {
    newGameFavorites: state => {
      return { ...state.gameSettings.favorites };
    },
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
    currentGameData: state => {
      return { ...state.gameState.current.data };
    },
    isGameInProgress: state => {
      return JSON.stringify(state.gameState.current.settings) !== "{}";
    },
    previousGameStates: state => {
      return [...state.gameState.previous];
    },
    appSettings: state => {
      return { ...state.appSettings };
    },
  },
  mutations: {
    setNewGameFavorites(state, favorites) {
      state.gameSettings.favorites = { ...favorites };
      setAllData(state);
    },
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
    setCurrentGameData(state, data) {
      state.gameState.current.data = { ...data };
      setAllData(state);
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
        // check for prev game
        let indexOfPrevGame = state.gameState.previous.length;
        for (let i = 0; i < state.gameState.previous.length; i++) {
          const game = state.gameState.previous[i];
          if (game.data.startedAt === state.gameState.current.data.startedAt) {
            indexOfPrevGame = i;
            break;
          }
        }

        // build new prev game
        const newPrevGame = {
          settings: { ...state.gameState.current.settings },
          rounds: [...state.gameState.current.rounds],
          data: { ...state.gameState.current.data, endedAt: Date.now() },
        };

        // insert game into previous games
        state.gameState.previous.splice(indexOfPrevGame, 1, newPrevGame)

        // reset the current game settings
        state.gameState.current.settings = {};
        state.gameState.current.rounds = [];
        state.gameState.current.data = {};
        setAllData(state);
      } else {
        console.warn("Could not save current game to previous games because settings was unset");
      }
    },
    startNewGame(state, newGameSettings) {
      if (JSON.stringify(newGameSettings) !== "{}") {
        state.gameState.current.settings = { ...newGameSettings };
        state.gameState.current.rounds = [];
        state.gameState.current.data = { startedAt: Date.now() };
        setAllData(state);
      } else {
        console.warn("Could not start new game because settings was unset");
      }
    },
    resumeGame(state, game) {
      if (game) {
        state.gameState.current.settings = { ...game.settings };
        state.gameState.current.rounds = [...game.rounds];
        state.gameState.current.data = { ...game.data };
        setAllData(state);
      } else {
        console.warn("Could not resume game because game was unset");
      }
    },
    setAppSettings(state, settings) {
      state.appSettings = { ...settings };
      setAllData(state);
    },
  },
  actions: {
  },
  modules: {
  },
});
