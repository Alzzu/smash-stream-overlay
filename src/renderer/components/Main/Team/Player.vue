<template>
  <div class="player">
    <Character v-if="!disableIcons" :char="player.character" @changeChar="changeCharacter" />
    <sui-dropdown
      :options="this.$store.getters.playersList"
      placeholder="Select player"
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
  props: ['player', 'team', 'disableIcons'],
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
  computed: {
    playerTag() {
      return this.player.name.gamerTag
    }
  },
  watch: {
    selectedPlayer: function(newPlayer, oldPlayer) {
      const player = this.$store.state.General.players.filter(
        player => player.gamerTag === newPlayer
      )
      this.player.name = player[0]
    },
    playerTag: {
      handler: function(newValue, oldValue) {
        this.selectedPlayer = newValue
      },
      immediate: true
    }
  }
}
</script>

<style lang="scss" scoped>
.player {
  margin-bottom: 1rem;
}
</style>