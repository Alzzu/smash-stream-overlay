/* eslint-disable space-before-function-paren */
import store from '../../renderer/store'
import {
  test2,
  tournamentInfo,
  tournamentEvents,
  eventAttendeesList,
  eventEntrants
} from './smashgg'

const io = require('socket.io')(1234)

io.on('connection', socket => {
  console.log('connected')

  socket.on('emitTest2', msg => {
    console.log('msg')
    socket.broadcast.emit('test', msg)
  })

  socket.on('playerData', msg => {
    console.log(msg)
    store.dispatch('setCurrentData', msg)
    socket.broadcast.emit('info', msg)
  })

  socket.on('giveInfo', async () => {
    const data = store.state.General.currentData
    socket.emit('info', data)
  })

  socket.on('test', async () => {
    const data = await test2()
    socket.emit('testdata', data)
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
    console.log(data)
    socket.emit('eventAttendees', data)
  })

  socket.on('getEventAttendeesList', async msg => {
    const data = await eventAttendeesList(msg.slug, msg.event)
    socket.emit('eventAttendeesList', data)
  })
})
