<template>
  <div id="app">
    <Nav></Nav>
    <router-view></router-view>
  </div>
</template>

<script>
import Nav from './components/Nav'

export default {
  name: 'smash-overlay-electron',
  components: { Nav }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');
body {
  font-family: 'Open Sans', sans-serif;
}
</style>