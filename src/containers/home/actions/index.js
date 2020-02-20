import axios from 'axios'

import store from '../../../store'
import actionsType from './actions-type'

const actionGetUser = user => ({
  type: actionsType.GET_USER,
  user
})

const actionGetEvent = events => ({
  type: actionsType.GET_ALL_EVENTS,
  events
})

export const getUser = (id) => {
  const apiUrl = `http://localhost:8082/users/show/${id}`
  axios.get(apiUrl).then((response) => {
    store.dispatch(actionGetUser(response.data))
  })
}

export const getAllEvent = () => {
  const apiUrl = 'http://localhost:8082/events/show'
  axios.get(apiUrl).then((response) => {
    store.dispatch(actionGetEvent(response.data))
  })
}
