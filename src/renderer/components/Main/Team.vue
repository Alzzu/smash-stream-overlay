<template>
  <div class="team">
    <Score :score="teamData.score" @scorePlus="plus" @scoreMinus="minus" />
    <Player :team="team" :player="teamData.players[0]" @update:name="updateName" />
  </div>
</template>

<script>
import Player from './Team/Player'
import Score from './Team/Score'

export default {
  name: 'team',
  components: { Player, Score },
  props: ['team', 'teamData'],
  methods: {
    plus: function() {
      this.teamData.score++
    },
    minus: function() {
      this.teamData.score--
    },
    updateName: function(data) {
      this.teamData.player[0].name = data.name
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