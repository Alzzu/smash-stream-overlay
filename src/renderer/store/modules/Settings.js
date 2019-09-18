const state = {
  settings: { apiKey: '', twitch: '' },
  existingSettings: false
}

const mutations = {
  SAVE_SETTINGS(state, settings) {
    state.settings = settings
  },
  GET_SETTINGS(state) {},
  CHANGE_APIKEY(state, newApikey) {
    state.apiKey = newApikey
  }
}

const actions = {
  saveSettings({ commit }, settings) {
    commit('SAVE_SETTINGS', settings)
  },
  getSettings({ commit }) {
    commit('GET_SETTINGS')
  }
}

export default {
  state,
  mutations,
  actions
}
