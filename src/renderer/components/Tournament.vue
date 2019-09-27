<template>
  <div is="sui-container">
    <div class="settings">
      <h1>Tournament Setup</h1>
      <div class="section">
        <label>Tournament Slug</label>
        <sui-input v-model="tournamentSlug" />
      </div>
      <sui-button v-on:click="getTournamentInfo">Get tournament info</sui-button>
      <div class="section">
        <label>Tournament Events</label>
        <sui-dropdown
          search
          selection
          fluid
          :options="this.$store.getters.tournamentEvents"
          v-model="selectedEvent"
        ></sui-dropdown>
      </div>
    </div>
    <div v-if="this.$store.state.General.tournamentInfo.name">
      <span>{{ this.$store.state.General.tournamentInfo.name }}</span>
      <span>{{ this.$store.state.General.tournamentInfo.startAt }}</span>
      <span>{{ this.$store.state.General.tournamentInfo.venueName }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tournament',
  data: () => {
    return {
      tournamentSlug: '',
      selectedEvent: null
    }
  },
  beforeMount() {
    this.tournamentSlug = this.$store.state.General.tournamentSlug
    this.selectedEvent = this.$store.state.General.selectedEvent
  },
  methods: {
    getTournamentInfo: function() {
      this.$socket.emit(
        'getTournamentInfo',
        this.$store.state.General.tournamentSlug
      )
      this.$socket.emit(
        'getTournamentEvents',
        this.$store.state.General.tournamentSlug
      )
    }
  },
  watch: {
    tournamentSlug: function(newValue, oldValue) {
      this.$store.dispatch('changeTournamentSlug', newValue)
    },
    selectedEvent: function(newValue, oldValue) {
      this.$store.dispatch('changeSelectedEvent', newValue)
    }
  }
}
</script>

<style lang="scss" scoped>
.settings {
  display: flex;
  flex-direction: column;
  .section {
    display: flex;
    flex-direction: column;
    margin: 1em 0;
  }
}
</style>