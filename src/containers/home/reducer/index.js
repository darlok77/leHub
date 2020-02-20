import { fromJS } from 'immutable'

import initialState from './initial-state'
import actionsType from '../actions/actions-type'

const getUser = (state, action) => (
  fromJS(state)
    .setIn(['user'], action.user)
    .toJS()
)

const home = (state = initialState, action) => {
  switch (action.type) {
    case actionsType.GET_USER:
      return getUser(state, action)
    default:
      return state
  }
}

export default home
