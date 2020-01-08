Vue.use(
  new VueSocketIO({
    debug: false,
    connection: `${window.location.hostname}:1234/`
  })
)

var vm = new Vue({
  el: '#app',
  data: function() {
    return {
      info: {},
      phase: 'asd',
      disableIcons: false,
      team1: {
        score: 0,
        players: [
          {
            name: { gamerTag: 'Peruna', prefix: 'Bunkkeri' },
            character: 'Snake'
          }
        ]
      },
      player1Character: 'Snake',
      player1CharacterUrl: '/characters/snake.png',
      team2: {
        score: 0,
        players: [
          {
            name: { gamerTag: 'Porkkana', prefix: 'Bunkkeri' },
            character: 'Snake'
          }
        ]
      },
      player2Character: 'Mario',
      player2CharacterUrl: '/characters/mario.png',
      show: true
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
      console.log(fixed)
      if (player === 1) {
        return (this.player1characterUrl = '/characters/' + fixed)
      } else {
        return (this.player2characterUrl = '/characters/' + fixed)
      }
    }
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
    }
  },
  computed: {
    longSponsor1: function() {
      if (this.team1.players[0].name.prefix) {
        if (this.team1.players[0].name.prefix.length > 4) {
          return true
        } else return false
      }
      return false
    },
    longSponsor2: function() {
      if (this.team2.players[0].name.prefix) {
        if (this.team2.players[0].name.prefix.length > 4) {
          return true
        } else return false
      }
      return false
    }
  },
  sockets: {
    connect: function() {
      console.log('connected to socket')
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
    test: function(msg) {
      console.log(`Emit test ${msg}`)
    }
  }
})
