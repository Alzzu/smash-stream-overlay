<template>
  <div class="player">
    <Character :char="player.character" @changeChar="changeCharacter" />
    <sui-dropdown
      :options="this.$store.getters.playersList"
      placeholder="Select character"
      search
      selection
      v-model="selectedPlayer"
    />
  </div>
</template>

<script>
import Character from './Character'

export default {
  name: 'player',
  components: { Character },
  props: ['player', 'team'],
  beforeMount() {
    this.selectedPlayer = this.player.name.gamerTag
  },
  data: () => {
    return {
      selectedPlayer: null
    }
  },
  methods: {
    changeName: function(event) {
      this.$emit('update:name', { name: event.target.value })
    },
    changeCharacter: function(character) {
      this.player.character = character
    }
  },
  watch: {
    selectedPlayer: function(newPlayer, oldPlayer) {
      const player = this.$store.state.General.players.filter(
        player => player.gamerTag === newPlayer
      )
      this.player.name = player[0]
    }
  }
}
</script>

<style lang="scss" scoped>
.player {
  margin-bottom: 1rem;
}
</style>