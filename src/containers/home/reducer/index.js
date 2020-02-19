import { fromJS } from 'immutable'

import initialState from './initial-state'
import actionsType from '../actions/actions-type'

const updatePlayer = (state, action) => (
  fromJS(state)
    .setIn(['player'], action.player)
    .toJS()
)

const updateWorld = (state, action) => (
  fromJS(state)
    .setIn(['world'], action.world)
    .toJS()
)

const updateNumber = (state, action) => (
  fromJS(state)
    .setIn(['number'], action.number)
    .toJS()
)

const updateTurn = (state, action) => (
  fromJS(state)
    .setIn(['turn'], action.turn)
    .toJS()
)

const updateBase = (state, action) => (
  fromJS(state)
    .setIn(['bases'], action.bases)
    .toJS()
)
const updateCurrentCase = (state, action) => (
  fromJS(state)
    .setIn(['currentCase'], action.currentCase)
    .toJS()
)

const home = (state = initialState, action) => {
  switch (action.type) {
    case actionsType.NEXT_PLAYER:
      return updatePlayer(state, action)
    case actionsType.UPDATE_WORLD:
      return updateWorld(state, action)
    case actionsType.NEW_NUMBER:
      return updateNumber(state, action)
    case actionsType.NEW_TURN:
      return updateTurn(state, action)
    case actionsType.UPDATE_BASE:
      return updateBase(state, action)
    case actionsType.UPDATE_CURRENT_CASE:
      return updateCurrentCase(state, action)
    default:
      return state
  }
}

export default home
