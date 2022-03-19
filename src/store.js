import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import reduceReducers from 'reduce-reducers';
import tickerReducer from './features/tickerSlice'
import pilotActionsReducer from './features/pilotActionsSlice'
import inventoryReducer from './features/inventorySlice'
import { skillsInitialLevels, skillsInitialXP } from './skillsUtils'
import combatReducer from './features/combatSlice'

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
  },
  inventory: {
    money: 0,
    items: {
      'items.strangetoken': { name: 'Strange Token', quantity: 2 }
    }
  },
  pilot: {
    name: 'Ardum',
    shield: { base: 50, max: 50, current: 50 },
    rangedAccuracy: { base: 50, max: 50, current: 50 },
    meleeAccuracy: { base: 50, max: 50, current: 50 },
    evasion: { base: 50, max: 50, current: 50 },
    attackSpeed: { base: 3, max: 3, current: 3 },
  },
  enemy: {
    hp: { base: 50, max: 50, current: 50 },
    rangedAccuracy: { base: 50, max: 50, current: 50 },
    meleeAccuracy: { base: 50, max: 50, current: 50 },
    evasion: { base: 50, max: 50, current: 50 },
    attackSpeed: { base: 3, max: 3, current: 3 },
  },
  pilotActions: {
    active: '',
  }
}

const reducer = reduceReducers(initialState, tickerReducer, pilotActionsReducer, inventoryReducer, combatReducer)

const store = configureStore({
  reducer: reducer,
})

export default store
