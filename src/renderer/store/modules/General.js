const state = {
  currentData: null,
  players: [],
  tournamentSlug: 'bunkkeri-smash-weekly-5',
  tournamentInfo: null,
  events: null,
  selectedEvent: null
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
  },
  setSelectedEvent(state, data) {
    state.selectedEvent = data
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
  changeSelectedEvent({ commit }, data) {
    commit('setSelectedEvent', data)
  },
  setCurrentData({ commit }, data) {
    commit('setCurrentData', data)
  }
}

const getters = {
  tournamentEvents: state => {
    return state.tournamentInfo.events.map(event => ({
      text: event.name,
      value: event.id
    }))
  },
  playersList: state => {
    return state.players.map(player => ({
      value: player.gamerTag,
      text: player.gamerTag
    }))
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
