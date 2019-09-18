/* eslint-disable space-before-function-paren */
import store from '../../renderer/store'
import {
  test2,
  tournamentInfo,
  tournamentEvents,
  eventAttendees,
  eventAttendeesList
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

  socket.on('getEventAttendees', async msg => {
    const data = await eventAttendees(msg.slug, msg.event)
    socket.emit('eventAttendees', data)
  })

  socket.on('getEventAttendeesList', async msg => {
    const data = await eventAttendeesList(msg.slug, msg.event)
    socket.emit('eventAttendeesList', data)
  })
})
