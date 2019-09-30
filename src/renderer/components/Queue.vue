<template>
  <sui-segment basic>
    <sui-segment basic>
      <sui-header size="large" floated="left">Stream queue</sui-header>
      <sui-button @click="updateQueue" floated="right" positive>Update queue</sui-button>
    </sui-segment>
    <sui-segment basic>
      <div :key="queue.stream" v-for="queue in this.streamQueue">
        <sui-header size="large">{{queue.stream}}</sui-header>
        <sui-card-group :items-per-row="4">
          <sui-card :key="set.id" v-for="set in queue.sets">
            <sui-card-content>
              <sui-card-header>{{set.fullRoundText}}</sui-card-header>
              <sui-card-meta>{{set.event.name}}</sui-card-meta>
              <sui-card-description>
                <div :key="index" v-for="(slot, name, index) in set.slots">
                  <div
                    :key="index"
                    v-for="(entrant, name, index) in slot.entrants"
                  >{{ entrant.gamerTag }}</div>
                  <span v-if="index === 0">vs</span>
                </div>
              </sui-card-description>
            </sui-card-content>
            <sui-button attached="bottom" @click="selectSet(set)">Select</sui-button>
          </sui-card>
        </sui-card-group>
      </div>
      <sui-header v-if="this.streamQueue === null" block color="red">No games in stream queue</sui-header>
    </sui-segment>
  </sui-segment>
</template>

<script>
export default {
  name: 'queue',
  beforeMount() {
    this.$socket.emit('getTournamentStreamQueue')
  },
  computed: {
    streamQueue() {
      return this.$store.getters.streamQueue
    }
  },
  methods: {
    selectSet: function(set) {
      this.$store.dispatch('setCurrentSet', set)
    },
    updateQueue: async function() {
      this.$socket.emit('getTournamentStreamQueue')
    }
  }
}
</script>

<style>
</style>