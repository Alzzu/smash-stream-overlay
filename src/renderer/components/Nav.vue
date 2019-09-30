<template>
  <div class="nav">
    <router-link class="link" to="/">Edit</router-link>
    <router-link class="link" to="/queue">Stream queue</router-link>
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

  border-bottom: 2px rgb(207, 207, 207) solid;

  .link {
    width: 100%;
    padding: 5px;
    text-align: center;
  }
  .router-link-exact-active {
    color: white;
    background: rgb(56, 56, 56);
  }
}
</style>

