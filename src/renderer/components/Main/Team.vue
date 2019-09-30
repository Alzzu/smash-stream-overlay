<template>
  <div class="team">
    <Score :score="teamData.score" @scorePlus="plus" @scoreMinus="minus" />
    <Player
      :team="team"
      :disableIcons="disableIcons"
      :player="teamData.players[0]"
      @update:name="updateName"
    />
    <State :state="teamData.state" @update:state="updateState" />
  </div>
</template>

<script>
import Player from './Team/Player'
import Score from './Team/Score'
import State from './Team/State'

export default {
  name: 'team',
  components: { Player, Score, State },
  props: ['team', 'teamData', 'disableIcons'],
  methods: {
    plus: function() {
      this.teamData.score++
    },
    minus: function() {
      this.teamData.score--
    },
    updateName: function(data) {
      this.teamData.player[0].name = data.name
    },
    updateState: function(value) {
      this.teamData.state = value
    }
  }
}
</script>

<style lang="scss" scoped>
.team {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
}
</style>