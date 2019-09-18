<template>
  <div class="nav">
    <router-link class="link" to="/">Main</router-link>
    <router-link class="link" to="/tournament">Tournament</router-link>
    <router-link class="link" to="/settings">Settings</router-link>
  </div>
</template>

<script>
export default {
  name: 'Nav'
}
</script>

<style lang="scss" scoped>
.nav {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

  .link {
  }
  .router-link-exact-active {
    color: red;
  }
}
</style>

