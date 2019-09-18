<template>
  <sui-dropdown
    :options="characters"
    placeholder="Select character"
    search
    selection
    v-model="selected"
  />
</template>

<script>
export default {
  name: 'character',
  props: ['char'],
  beforeMount() {
    this.selected = this.char
  },
  data: () => {
    return {
      selected: null,
      characters: [
        { value: 'Mario', text: 'Mario' },
        { value: 'Luigi', text: 'Luigi' },
        { value: 'Peach', text: 'Peach' },
        { value: 'Daisy', text: 'Daisy' },
        { value: 'Bowser', text: 'Bowser' },
        { value: 'Rosalina & Luma', text: 'Rosalina & Luma' },
        { value: 'Bowser Jr.', text: 'Bowser Jr.' },
        { value: 'Dr. Mario', text: 'Dr. Mario' },
        { value: 'Yoshi', text: 'Yoshi' },
        { value: 'Wario', text: 'Wario' },
        { value: 'Donkey Kong', text: 'Donkey Kong' },
        { value: 'Diddy Kong', text: 'Diddy Kong' },
        { value: 'King K. Rool', text: 'King K. Rool' },
        { value: 'Link', text: 'Link' },
        { value: 'Zelda', text: 'Zelda' },
        { value: 'Ganondorf', text: 'Ganondorf' },
        { value: 'Sheik', text: 'Sheik' },
        { value: 'Young Link', text: 'Young Link' },
        { value: 'Toon Link', text: 'Toon Link' },
        { value: 'Samus', text: 'Samus' },
        { value: 'Dark Samus', text: 'Dark Samus' },
        { value: 'Ridley', text: 'Ridley' },
        { value: 'Zero Suit Samus', text: 'Zero Suit Samus' },
        { value: 'Kirby', text: 'Kirby' },
        { value: 'Meta Knight', text: 'Meta Knight' },
        { value: 'Mii Fighter', text: 'Mii Fighter' },
        { value: 'King Dedede', text: 'King Dedede' },
        { value: 'Fox', text: 'Fox' },
        { value: 'Falco', text: 'Falco' },
        { value: 'Wolf', text: 'Wolf' },
        { value: 'Pikachu', text: 'Pikachu' },
        { value: 'Jigglypuff', text: 'Jigglypuff' },
        { value: 'Pichu', text: 'Pichu' },
        { value: 'Mewtwo', text: 'Mewtwo' },
        { value: 'Pokemon Trainer', text: 'Pokemon Trainer' },
        { value: 'Lucario', text: 'Lucario' },
        { value: 'Greninja', text: 'Greninja' },
        { value: 'Ness', text: 'Ness' },
        { value: 'Lucas', text: 'Lucas' },
        { value: 'Captain Falcon', text: 'Captain Falcon' },
        { value: 'Marth', text: 'Marth' },
        { value: 'Lucina', text: 'Lucina' },
        { value: 'Roy', text: 'Roy' },
        { value: 'Chrom', text: 'Chrom' },
        { value: 'Ike', text: 'Ike' },
        { value: 'Robin', text: 'Robin' },
        { value: 'Corrin', text: 'Corrin' },
        { value: 'Pit', text: 'Pit' },
        { value: 'Dark Pit', text: 'Dark Pit' },
        { value: 'Palutena', text: 'Palutena' },
        { value: 'Villager', text: 'Villager' },
        { value: 'Isabelle', text: 'Isabelle' },
        { value: 'Olimar', text: 'Olimar' },
        { value: 'Shulk', text: 'Shulk' },
        { value: 'Little Mac', text: 'Little Mac' },
        { value: 'Inkling', text: 'Inkling' },
        { value: 'Ice Climbers', text: 'Ice Climbers' },
        { value: 'Mr. Game & Watch', text: 'Mr. Game & Watch' },
        { value: 'R.O.B.', text: 'R.O.B.' },
        { value: 'Wii Fit Trainer', text: 'Wii Fit Trainer' },
        { value: 'Duck Hunt', text: 'Duck Hunt' },
        { value: 'Sonic', text: 'Sonic' },
        { value: 'Bayonetta', text: 'Bayonetta' },
        { value: 'Snake', text: 'Snake' },
        { value: 'Simon', text: 'Simon' },
        { value: 'Richter', text: 'Richter' },
        { value: 'Mega Man', text: 'Mega Man' },
        { value: 'Ryu', text: 'Ryu' },
        { value: 'Pac-Man', text: 'Pac-Man' },
        { value: 'Cloud', text: 'Cloud' },
        { value: 'Piranha Plant', text: 'Piranha Plant' },
        { value: 'Incineroar', text: 'Incineroar' },
        { value: 'Hero', text: 'Hero' }
      ]
    }
  },
  watch: {
    selected: function(newChar, oldChar) {
      console.log('asd')
      this.$emit('changeChar', this.selected)
    }
  }
}
</script>

<style>
</style>