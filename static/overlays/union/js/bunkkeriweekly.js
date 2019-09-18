Vue.use(
  new VueSocketIO({
    debug: false,
    connection: '/',
  })
)

var vm = new Vue({
  el: '#app',
  data: function() {
    return {
      info: {},
      phase: '',
      disableIcons: false,
      team1: {},
      player1Character: '',
      player1CharacterUrl: '',
      team2: {},
      player2Character: '',
      player2CharacterUrl: '',
      show: true,
    }
  },
  methods: {
    characterIcon(player, icon) {
      const fixed = icon
        .replace(/&/g, 'and')
        .replace(/\./g, '')
        .replace(/-/g, '_')
        .replace(/ /g, '_')
        .toLowerCase()
        .concat('.png')
      if (player === 1) {
        return (this.player1characterUrl = '/characters/' + fixed)
      } else {
        return (this.player2characterUrl = '/characters/' + fixed)
      }
    },
  },
  mounted() {
    this.characterIcon(1, this.player1Character)
    this.characterIcon(2, this.player2Character)
  },
  watch: {
    player1Character: function(newVal) {
      console.log('icon changed')
      this.player1CharacterUrl = this.characterIcon(1, newVal)
    },
    player2Character: function(newVal) {
      console.log('icon changed')
      this.player2CharacterUrl = this.characterIcon(2, newVal)
    },
  },
  sockets: {
    connect: function() {
      this.$socket.emit('giveInfo')
    },
    info: function(msg) {
      this.phase = msg.phase
      this.disableIcons = msg.disableIcons

      this.team1 = msg.team1
      this.player1Character = msg.team1.players[0].character
      this.team2 = msg.team2
      this.player2Character = msg.team2.players[0].character
    },
  },
})
