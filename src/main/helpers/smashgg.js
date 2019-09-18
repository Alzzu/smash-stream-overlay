/* eslint-disable space-before-function-paren */
import store from '../../renderer/store'
import axios from 'axios'
const smashgg = require('smashgg.js')

if (store.state.Settings.settings.apiKey) {
  if (store.state.Settings.settings.apiKey.length >= 32) {
    smashgg.initialize(store.state.Settings.settings.apiKey)
  }
}

export const test = () => {
  return store.state.Settings.settings.apiKey
}

export const test2 = async () => {
  const { Tournament } = smashgg
  const asd = await Tournament.get('bunkkeri-smash-weekly-5')
  console.log(asd)
  return asd
}

export const tournamentInfo = async slug => {
  const { Tournament } = smashgg
  const info = await Tournament.get(slug)
  return info
}
export const tournamentEvents = async slug => {
  console.log(slug)
  const data = await axios({
    url: 'https://api.smash.gg/gql/alpha',
    method: 'post',
    headers: {
      Authorization: `Bearer 4753ebcb4dcc248d0ffb1cb28433f98e`
    },
    data: {
      query: `
        query TournamentEvents($tourneySlug:String!){
          tournament(slug:$tourneySlug){
            name
            slug
            events {
              id
              name
            }
          }
        }
    `,
      variables: {
        tourneySlug: `tournament/${slug}`
      }
    }
  })
    .then(result => result.data.data)
    .catch(e => {
      console.error(e)
    })

  return data
}

export const eventAttendees = async (slug, event) => {
  const { Event } = smashgg
  const data = await Event.get(slug, event)
  const attendees = await data.getAttendees()

  let list = []
  let list2 = []

  attendees.map(attendee => {
    list.push({
      value: attendee.gamerTag,
      text: attendee.gamerTag
    })
    list2.push({ gamerTag: attendee.gamerTag, prefix: attendee.prefix })
  })
  return { attendees, list, list2 }
}

export const eventAttendeesList = async (slug, event) => {
  const { Event } = smashgg
  const data = await Event.get(slug, event)
  const attendees = await data.getAttendees()

  let list = []

  attendees.map(attendee => {
    list.push({
      value: { gamerTag: attendee.gamerTag, prefix: attendee.prefix },
      text: attendee.gamerTag
    })
  })
  return list
}
