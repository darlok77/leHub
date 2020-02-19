import actionsType from './actions-type'
import store from '../../../store'

export const updatePlayer = player => ({
  type: actionsType.NEXT_PLAYER,
  player
})

const updateWorld = world => ({
  type: actionsType.UPDATE_WORLD,
  world
})

const updateNumber = number => ({
  type: actionsType.NEW_NUMBER,
  number
})

export const updateTurn = turn => ({
  type: actionsType.NEW_TURN,
  turn
})

const updateBase = bases => ({
  type: actionsType.UPDATE_BASE,
  bases
})

export const updateCurrentCase = currentCase => ({
  type: actionsType.UPDATE_CURRENT_CASE,
  currentCase
})

export const nextPlayer = (player, base) => {
  let p = player

  if (p < 4) {
    p += 1
    if (base[`player${p}`] <= 0) {
      p += 1
    }
    return p
  }
  p = 1
  return p
}

export const nextWorld = (world) => {
  store.dispatch(updateWorld(world))
}

export const newNumber = (number, flag) => {
  const { firstNb, secondNb } = number
  const numberUpdate = {
    firstNb,
    secondNb,
    flag
  }
  store.dispatch(updateNumber(numberUpdate))
}

export const getCurrentTurn = (number, actualTurn) => {
  let turn = {
    firstEnd: actualTurn.firstEnd
  }
  if (actualTurn.nbTurn === 0) {
    console.log(`number reçu: ${number}`)

    switch (number) {
      case 1:
        turn.nbTurn = 1
        turn.type = 'destroy'
        break
      case 2:
        turn.nbTurn = 1
        turn.type = 'def'
        break
      case 3:
        turn.nbTurn = 2
        turn.type = 'def'
        break
      case 4:
        turn.nbTurn = 3
        turn.type = 'def'
        break
      case 5:
        turn.nbTurn = 1
        turn.type = 'att'
        break
      case 6:
        turn.nbTurn = 2
        turn.type = 'att'
        break
      default:
        turn.nbTurn = 0
        turn.type = 'init'
        turn.firstEnd = true
    }
  } else {
    turn = actualTurn
  }
  return turn
}

export const newBase = (player, bases, damages) => {
  let basesUpdate = bases
  switch (player) {
    case 1:
      basesUpdate.player1 -= damages
      break
    case 2:
      basesUpdate.player2 -= damages
      break
    case 3:
      basesUpdate.player3 -= damages
      break
    case 4:
      basesUpdate.player4 -= damages
      break
    default:
      basesUpdate = bases
  }
  store.dispatch(updateBase(basesUpdate))
  return basesUpdate
}
