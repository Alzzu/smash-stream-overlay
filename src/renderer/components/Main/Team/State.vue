<template>
  <sui-button-group>
    <sui-button @click="changeState" :class="{'active':(selected === 'none')}">None</sui-button>
    <sui-button @click="changeState" :class="{'active':(selected === 'losers')}">L</sui-button>
    <sui-button @click="changeState" :class="{'active':(selected === 'winners')}">W</sui-button>
  </sui-button-group>
</template>

<script>
export default {
  name: 'state',
  props: ['state'],
  data: () => {
    return {
      selected: 'none'
    }
  },
  computed: {
    currentState() {
      return this.state
    }
  },
  methods: {
    changeState: function(event) {
      switch (event.target.innerHTML) {
        case 'None':
          this.selected = 'none'
          break
        case 'L':
          this.selected = 'losers'
          break
        case 'W':
          this.selected = 'winners'
          break
      }
    }
  },
  watch: {
    selected: function(newValue, oldValue) {
      this.$emit('update:state', newValue)
    },
    currentState: {
      handler: function(newValue, oldValue) {
        this.selected = newValue
      },
      immediate: true
    }
  }
}
</script>

<style>
</style>