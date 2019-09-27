/* eslint-disable space-before-function-paren */
import store from '../../renderer/store'
import { tournamentInfo, tournamentEvents, eventEntrants } from './smashgg'

const io = require('socket.io')(1234)

io.on('connection', socket => {
  console.log('connected')

  socket.on('emitTest2', msg => {
    console.log('msg')
    socket.broadcast.emit('test', msg)
  })

  socket.on('playerData', msg => {
    store.dispatch('setCurrentData', msg)
    socket.broadcast.emit('info', msg)
  })

  socket.on('giveInfo', async () => {
    const data = store.state.General.currentData
    socket.emit('info', data)
  })

  socket.on('getTournamentInfo', async slug => {
    const data = await tournamentInfo(slug)
    socket.emit('tournamentInfo', data)
  })

  socket.on('getTournamentEvents', async slug => {
    const data = await tournamentEvents(slug)
    socket.emit('tournamentEvents', data)
  })

  socket.on('getEventEntrants', async () => {
    const data = await eventEntrants(store.state.General.selectedEvent)
    socket.emit('eventAttendees', data)
  })
})
