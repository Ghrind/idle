import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import reduceReducers from 'reduce-reducers';
import tickerReducer from './features/tickerSlice'
import pilotActionsReducer from './features/pilotActionsSlice'

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
    levels: { mining: 0, exploration: 0 },
    names: { mining: 'Mining', exploration: 'Exploration' },
    active: '',
    xp: { mining: 0, exploration: 0 },
  },
  ticker: {
    ticks: 0,
    ticksToProcess: 0,
    timeLastChecked: undefined,
    running: false,
    ticksPerSeconds: 1,
  },
  inventory: {
    items: {
      token: { name: 'Strange Token', quantity: 2 }
    }
  },
  pilotActions: {
    active: '',
    actions: {
      'mining.iron': {
        outputItems: [
          { code: 'items.ironore', quantity: 1 }
        ],
        ticksPerAction: 3,
        xp: 5,
      }
    }
  }
}

const reducer = reduceReducers(initialState, tickerReducer, pilotActionsReducer)

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
