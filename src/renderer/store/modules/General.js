const state = {
  currentData: null,
  players: [],
  tournamentSlug: 'bunkkeri-smash-weekly-5',
  tournamentInfo: null,
  events: null,
  selectedEvent: null,
  streamQueue: null
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
  },
  setStreamQueue(state, data) {
    state.streamQueue = data
  },
  setCurrentSet(state, data) {
    state.currentData.team1.players = data.team1
    state.currentData.team2.players = data.team2
    state.currentData.phase = data.phase
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
  SOCKET_streamQueue({ commit }, data) {
    commit('setStreamQueue', data)
  },
  changeTournamentSlug({ commit }, data) {
    commit('setTournamentSlug', data)
  },
  changeSelectedEvent({ commit }, data) {
    commit('setSelectedEvent', data)
  },
  setCurrentData({ commit }, data) {
    commit('setCurrentData', data)
  },
  setCurrentSet({ commit }, data) {
    const players = {
      phase: data.fullRoundText,
      team1: [],
      team2: []
    }
    data.slots.map((slot, index) => {
      switch (index) {
        case 0:
          slot.entrants.map(entrant => {
            players.team1.push({ name: { ...entrant }, character: 'Mario' })
          })
          break
        case 1:
          slot.entrants.map(entrant => {
            players.team2.push({ name: { ...entrant }, character: 'Mario' })
          })
          break
      }
    })
    commit('setCurrentSet', players)
  }
}

const getters = {
  currentData: state => {
    if (state.currentData === null) {
      return {
        phase: '',
        team1: {
          score: 0,
          players: [
            {
              name: { gamerTag: '', prefix: null },
              character: 'Mario'
            }
          ],
          state: 'none'
        },
        team2: {
          score: 0,
          players: [
            {
              name: { gamerTag: '', prefix: null },
              character: 'Mario'
            }
          ],
          state: 'none'
        },
        disableIcons: false
      }
    } else {
      return state.currentData
    }
  },
  tournamentEvents: state => {
    try {
      return state.tournamentInfo.events.map(event => ({
        text: event.name,
        value: event.id
      }))
    } catch (err) {
      return null
    }
  },
  playersList: state => {
    try {
      return state.players.map(player => ({
        value: player.gamerTag,
        text: player.gamerTag
      }))
    } catch (err) {
      return null
    }
  },
  streamQueue: state => {
    try {
      return state.streamQueue.map(queue => ({
        stream: queue.stream.streamName,
        sets: queue.sets.map(set => ({
          ...set,
          slots: set.slots.map(slot =>
            slot.entrant
              ? {
                entrants: slot.entrant.participants.map(participant => ({
                  ...participant
                }))
              }
              : null
          )
        }))
      }))
    } catch (err) {
      return null
    }
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
