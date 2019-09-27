<template>
  <div>
    <sui-checkbox label="Disable character icons" toggle v-model="disabled" />
  </div>
</template>

<script>
export default {
  name: 'toggles',
  props: ['disableIcons'],
  data() {
    return { disabled: false }
  },
  beforeMount() {
    this.disabled = this.disableIcons
  },
  watch: {
    disabled: function(newValue, oldValue) {
      this.$emit('update:disableIcons', newValue)
    }
  }
}
</script>

<style>
</style>