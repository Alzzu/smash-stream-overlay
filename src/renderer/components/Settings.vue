<template>
  <div is="sui-container" class="settings">
    <h1>Settings page</h1>
    <div class="section">
      <label>SmashGG api key</label>
      <sui-input v-model="settings.apiKey" type="password" placeholder="xxxxxx" />
    </div>
    <div class="section">
      <label>Twitch</label>
      <sui-input v-model="settings.twitch" placeholder="xxxxxx" />
    </div>

    <sui-button v-on:click="saveSettings">Save</sui-button>
  </div>
</template>

<script>
export default {
  name: 'settings',
  components: {},
  data: () => {
    return {
      existingSettings: false,
      settings: {}
    }
  },
  beforeMount() {
    this.settings = this.$store.state.Settings.settings
  },
  methods: {
    saveSettings: function() {
      this.$store.dispatch('saveSettings', this.settings)
    }
  }
}
</script>

<style lang="scss" scoped>
.settings {
  display: flex;
  flex-direction: column;
  .section {
    display: flex;
    flex-direction: column;
    margin: 1em 0;
  }
}
</style>
