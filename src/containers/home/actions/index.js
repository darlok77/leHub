import axios from 'axios'

import store from '../../../store'
import actionsType from './actions-type'

const actionGetUser = user => ({
  type: actionsType.GET_USER,
  user
})

export const getUser = (id) => {
  const apiUrl = `http://localhost:8082/users/show/${id}`
  axios.get(apiUrl).then((response) => {
    console.log('t')
    store.dispatch(actionGetUser(response.data))
  })
}
