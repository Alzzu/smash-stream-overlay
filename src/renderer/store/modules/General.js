const state = {
  currentData: null,
  players: [],
  tournamentSlug: 'bunkkeri-smash-weekly-5',
  tournamentInfo: null,
  events: null
}

const mutations = {
  setPlayers(state, data) {
    state.players = data
  },
  setTournamentInfo(state, data) {
    state.tournamentInfo = data
  },
  setTournamentEvents(state, data) {
    state.events = data
  },
  setTournamentSlug(state, data) {
    state.tournamentSlug = data
  },
  setCurrentData(state, data) {
    state.currentData = data
  }
}

const actions = {
  SOCKET_tournamentInfo({ commit }, data) {
    commit('setTournamentInfo', data)
  },
  SOCKET_tournamentEvents({ commit }, data) {
    commit('setTournamentEvents', data.tournament.events)
  },
  SOCKET_eventAttendees({ commit }, data) {
    commit('setPlayers', data)
  },
  changeTournamentSlug({ commit }, data) {
    commit('setTournamentSlug', data)
  },
  setCurrentData({ commit }, data) {
    commit('setCurrentData', data)
  }
}

export default {
  state,
  mutations,
  actions
}
