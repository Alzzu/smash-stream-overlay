<template>
  <sui-input v-model="value"></sui-input>
</template>

<script>
export default {
  name: 'phase',
  props: ['phase'],
  beforeMount() {
    this.value = this.phase
  },
  data: () => {
    return {
      value: ''
    }
  },
  watch: {
    value: function(newValue, oldValue) {
      console.log(newValue)
      this.$emit('changePhase', newValue)
    }
  }
}
</script>

<style>
</style>