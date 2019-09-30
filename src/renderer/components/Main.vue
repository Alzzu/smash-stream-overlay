<template>
  <div is="sui-container" class="edit" v-if="this.$store.state.Settings.settings.apiKey">
    <sui-segment basic>
      <div class="teams">
        <div class="team1">
          <Team team="1" :teamData="team1" :disableIcons="disableIcons" />
        </div>
        <sui-button @click="swapTeams" :style="{'height': '3em'}" primary>Swap</sui-button>
        <div class="team2">
          <Team team="2" :teamData="team2" :disableIcons="disableIcons" />
        </div>
      </div>
    </sui-segment>
    <sui-segment basic aligned="center">
      <Phase :phase="phase" @changePhase="changePhase" />
    </sui-segment>
    <sui-segment basic aligned="center">
      <Toggles @update:disableIcons="changeDisableIcon" :disableIcons="disableIcons" />
    </sui-segment>
    <sui-segment basic aligned="center">
      <sui-button @click="playerData" positive>Update</sui-button>
      <sui-button @click="resetScore" negative>Reset score</sui-button>
    </sui-segment>
  </div>
  <sui-segment v-else aligned="center">
    <sui-header color="red" block>Please add SmashGG api key in settings tab</sui-header>
  </sui-segment>
</template>

<script>
import Team from './Main/Team'
import Phase from './Main/Phase'
import Toggles from './Main/Toggles'

export default {
  name: 'main',
  components: { Team, Phase, Toggles },
  data: () => {
    return {
      phase: 'Winners Round 2',
      team1: {
        score: 0,
        players: [
          {
            name: { gamerTag: 'Alsu', prefix: 'BNKR' },
            character: 'Mario'
          }
        ],
        state: 'none'
      },
      team2: {
        score: 0,
        players: [
          {
            name: { gamerTag: 'tomi', prefix: null },
            character: 'Mario'
          }
        ],
        state: 'none'
      },
      disableIcons: false
    }
  },
  beforeMount() {
    const currentData = this.$store.getters.currentData
    this.disableIcons = currentData.disableIcons
    this.team1 = currentData.team1
    this.team2 = currentData.team2
    this.phase = currentData.phase
    this.$socket.emit('getEventEntrants')
  },
  methods: {
    updateName: function(data) {
      if (data.team === '1') this.team1.players[0].name.gamerTag = data.name
      else if (data.team === '2') {
        this.team2.players[0].name.gamerTag = data.name
      }
    },
    playerData: function() {
      console.log('Sending playerData')
      this.$socket.emit('playerData', {
        team1: this.team1,
        team2: this.team2,
        phase: this.phase,
        disableIcons: this.disableIcons
      })
    },
    swapTeams: function() {
      const team1Data = this.team1
      const team2Data = this.team2
      console.log('swap')
      this.team1 = team2Data
      this.team2 = team1Data
    },
    changePhase: function(phase) {
      this.phase = phase
    },
    resetScore: function() {
      this.team1.score = 0
      this.team2.score = 0
    },
    changeDisableIcon: function(disable) {
      this.disableIcons = disable
    }
  },
  sockets: {
    connect: function() {
      console.log('socket connected')
    }
  }
}
</script>

<style lang="scss" scoped>
.teams {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

  margin-top: 1em;
}
.edit {
  display: flex;
  flex-direction: column;
}
</style>
