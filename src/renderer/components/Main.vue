<template>
  <div is="sui-container" class="edit">
    <div class="teams">
      <div class="team1">
        <Team team="1" :teamData="team1" />
      </div>

      <div class="team2">
        <Team team="2" :teamData="team2" />
      </div>
    </div>
    <Phase :phase="phase" @changePhase="changePhase" />
    <sui-button @click="playerData">Update</sui-button>
  </div>
</template>

<script>
import Team from './Main/Team'
import Phase from './Main/Phase'

export default {
  name: 'main',
  components: { Team, Phase },
  data: () => {
    return {
      test2: '',
      test3: '',
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
      }
    }
  },
  beforeMount() {
    this.team1 = this.$store.state.General.currentData.team1
    this.team2 = this.$store.state.General.currentData.team2
    this.phase = this.$store.state.General.currentData.phase
    this.$socket.emit('getEventAttendees', {
      slug: 'bunkkeri-smash-weekly-8',
      event: 'ultimate-singles'
    })
  },
  methods: {
    updateName: function(data) {
      console.log(data)
      if (data.team === '1') this.team1.players[0].name.gamerTag = data.name
      else if (data.team === '2') {
        this.team2.players[0].name.gamerTag = data.name
      }
    },
    emitTest: function() {
      console.log('Sending emitTest')
      this.$socket.emit('emitTest2', 'Test data')
    },
    playerData: function() {
      console.log('Sending playerData')
      this.$socket.emit('playerData', {
        team1: this.team1,
        team2: this.team2,
        phase: this.phase
      })
    },
    changePhase: function(phase) {
      this.phase = phase
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
