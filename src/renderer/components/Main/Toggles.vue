<template>
  <div>
    <sui-checkbox label="Disable character icons" toggle v-model="disabled" />
  </div>
</template>

<script>
export default {
  name: 'toggles',
  data() {
    return { disabled: false }
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