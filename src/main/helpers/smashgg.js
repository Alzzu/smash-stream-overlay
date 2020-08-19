/* eslint-disable space-before-function-paren */
import store from '../../renderer/store'
import axios from 'axios'

export const tournamentInfo = async slug => {
  const data = await axios({
    url: 'https://api.smash.gg/gql/alpha',
    method: 'post',
    headers: {
      Authorization: `Bearer ${store.state.Settings.settings.apiKey}`
    },
    data: {
      query: `
        query TournamentEvents($tourneySlug:String!){
          tournament(slug:$tourneySlug){
            name
            slug
            startAt
            endAt
            venueName
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
  return data.tournament
}
export const tournamentEvents = async slug => {
  console.log(slug)
  const data = await axios({
    url: 'https://api.smash.gg/gql/alpha',
    method: 'post',
    headers: {
      Authorization: `Bearer ${store.state.Settings.settings.apiKey}`
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

export const eventEntrants = async id => {
  const data = await axios({
    url: 'https://api.smash.gg/gql/alpha',
    method: 'post',
    headers: {
      Authorization: `Bearer ${store.state.Settings.settings.apiKey}`
    },
    data: {
      query: `
        query EventEntrants($eventId: ID!){
          event(id:$eventId){
            name
            entrants {
              nodes{
                id
                participants{
                  id
                  gamerTag
                  prefix
                  contactInfo {
                    id
                    country
                    name
                    nameFirst
                    nameLast
                  }
                }
              }
            }
          }
        }
      `,
      variables: {
        eventId: id
      }
    }
  })
    .then(result => result.data.data.event.entrants.nodes)
    .then(nodes =>
      nodes.map(entrant => ({
        ...entrant.participants[0]
      }))
    )
    .catch(e => {
      console.error(e)
    })

  return data
}

export const streamQueue = async slug => {
  const data = await axios({
    url: 'https://api.smash.gg/gql/alpha',
    method: 'post',
    headers: {
      Authorization: `Bearer ${store.state.Settings.settings.apiKey}`
    },
    data: {
      query: `
        query StreamQueueOnTournament($tourneySlug: String!){
          tournament(slug:$tourneySlug) {
            streamQueue {
              stream {
                streamSource
                streamName
              }
              sets {
                id
                fullRoundText
                event {
                  id
                  name
                }
                slots {
                  id
                  entrant {
                    id
                    participants {
                      id
                      gamerTag
                      prefix
                    }
                  }
                }
              }
            }
          }
        }
      `,
      variables: {
        tourneySlug: slug
      }
    }
  })
    .then(result => result.data.data.tournament.streamQueue)
    .catch(e => {
      console.error(e)
    })

  return data
}
