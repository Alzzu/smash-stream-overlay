<template>
  <sui-segment>
    <h1>Stream queue</h1>
    <div :key="queue.stream" v-for="queue in this.streamQueue">
      <h2>{{queue.stream}}</h2>
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
  </sui-segment>
</template>

<script>
export default {
  name: 'queue',
  data() {
    return {
      streamQueue: null
    }
  },
  beforeMount() {
    this.$socket.emit('getTournamentStreamQueue')
  },
  mounted() {
    this.streamQueue = this.$store.getters.streamQueue
  },
  methods: {
    selectSet: function(set) {
      this.$store.dispatch('setCurrentSet', set)
    }
  }
}
</script>

<style>
</style>