import axios from 'axios'

import store from '../../../store'
import actionsType from './actions-type'

const actionGetUser = user => ({
  type: actionsType.GET_USER,
  user
})

const actionGetEvents = events => ({
  type: actionsType.GET_ALL_EVENTS,
  events
})

const actionGetgames = games => ({
  type: actionsType.GET_ALL_GAMES,
  games
})

const actionGetPromotions = promotions => ({
  type: actionsType.GET_ALL_PROMOTIONS,
  promotions
})

export const getUser = (id) => {
  const apiUrl = `http://localhost:8082/users/show/${id}`
  axios.get(apiUrl).then((response) => {
    store.dispatch(actionGetUser(response.data))
  })
}

export const getAllEvents = () => {
  const apiUrl = 'http://localhost:8082/events/show'
  axios.get(apiUrl).then((response) => {
    store.dispatch(actionGetEvents(response.data))
  })
}

export const getAllGames = () => {
  const apiUrl = 'http://localhost:8082/games/show'
  axios.get(apiUrl).then((response) => {
    store.dispatch(actionGetgames(response.data))
  })
}

export const getAllPromotions = () => {
  const apiUrl = 'http://localhost:8082/promotions/show'
  axios.get(apiUrl).then((response) => {
    store.dispatch(actionGetPromotions(response.data))
  })
}
