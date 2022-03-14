import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import reduceReducers from 'reduce-reducers';
import tickerReducer from './features/tickerSlice'
import pilotActionsReducer from './features/pilotActionsSlice'
import inventoryReducer from './features/inventorySlice'
import { skillsInitialLevels, skillsInitialXP } from './skillsUtils'

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'


import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  storage
}

const initialState = {
  skills: {
    active: null,
    levels: skillsInitialLevels(),
    xp: skillsInitialXP(),
  },
  ticker: {
    ticks: 0,
    ticksToProcess: 0,
    timeLastChecked: undefined,
    running: false,
    ticksPerSeconds: 1,
  },
  inventory: {
    money: 0,
    items: {
      'items.strangetoken': { name: 'Strange Token', quantity: 2 }
    }
  },
  pilotActions: {
    active: '',
  }
}

const reducer = reduceReducers(initialState, tickerReducer, pilotActionsReducer, inventoryReducer)

const store = configureStore({
  reducer: persistReducer(persistConfig, reducer),
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  })
})

export const persistor  = persistStore(store)

export default store
