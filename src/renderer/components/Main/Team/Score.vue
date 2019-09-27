<template>
  <div class="score">
    <sui-button-group>
      <sui-button @click="$emit('scoreMinus')" icon="minus" />
      <sui-button>{{score}}</sui-button>
      <sui-button @click="$emit('scorePlus')" icon="plus" />
    </sui-button-group>
  </div>
</template>

<script>
export default {
  name: 'score',
  props: ['score', 'team']
}
</script>

<style lang="scss" scoped>
.score {
  margin-bottom: 1rem;
}
</style>