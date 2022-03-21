import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import reduceReducers from 'reduce-reducers';
import tickerReducer from './features/tickerSlice'
import pilotActionsReducer from './features/pilotActionsSlice'
import vaultReducer from './features/vaultSlice'
import { skillsInitialLevels, skillsInitialXP } from './skillsUtils'
import combatReducer from './features/combatSlice'
import { gameData } from './gameData'
import { makeStat } from './statsUtils'

const initialState = {
  skills: {
    active: null,
    levels: skillsInitialLevels(),
    xp: skillsInitialXP(),
  },
  ticker: {
    startedAt: null,
    ticksProcessed: 0,
    active: false,
    tickInterval: 10, // 10 milliseconds
    message: null,
    ticksToConsume: 0,
    ticksPerAction: 0,
    enemy: {
      ticksPerAction: 0,
      ticksToConsume: 0,
    },
    xpPerAction: 0,
  },
  vault: {
    money: 0,
    items: {
      'items.strangetoken': { name: 'Strange Token', quantity: 2 },
      'items.chassis.basic': { quantity: 1 },
      'items.chassis.advanced': { quantity: 1 },
      'items.chassis.prototype': { quantity: 1 },
      'items.weapons.minigun': { quantity: 1 },
    }
  },
  pilot: {
    name: 'Ardum',
    shield: makeStat(gameData.playerDefaultValues.shield),
    accuracy: makeStat(gameData.playerDefaultValues.accuracy),
    evasion: makeStat(gameData.playerDefaultValues.evasion),
    attackSpeed: makeStat(gameData.playerDefaultValues.attackSpeed),
    minDamage: makeStat(gameData.playerDefaultValues.minDamage),
    maxDamage: makeStat(gameData.playerDefaultValues.maxDamage),

  },
  slots: {
    active: ['chassis'],
    items: {},
  },
  enemy: null,
  pilotActions: {
    active: '',
  }
}

const reducer = reduceReducers(initialState, tickerReducer, pilotActionsReducer, vaultReducer, combatReducer)

const store = configureStore({
  reducer: reducer,
})

export default store
