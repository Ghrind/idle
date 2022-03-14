import { createSlice } from '@reduxjs/toolkit'

export const tickerSlice = createSlice({
  name: 'ticker',
  reducers: {
    start: (state, action) => {
      state.ticker.running = true;
      if (state.ticker.timeLastChecked === undefined) {
        state.ticker.timeLastChecked = Math.floor(Date.now() / 1000)
      }
    },
    run: (state, action) => {
      const isActiveTraining = state.skills.active !== null
      if (!isActiveTraining) {
        return
      }

      const currentTime = Math.floor(Date.now() / 1000)
      if (state.ticker.running) {
        state.ticker.ticks += (currentTime - state.ticker.timeLastChecked) * state.ticker.ticksPerSeconds
        state.ticker.timeLastChecked = currentTime
        state.ticker.ticksToProcess = 0
      } else {
        state.ticker.ticksToProcess = (currentTime - state.ticker.timeLastChecked) * state.ticker.ticksPerSeconds
      }
    },
    stop: (state, action) => {
      state.ticker.running = false;
    },
    consume: (state, action) => {
      state.ticker.ticks -= action.payload
    }
  }

})

export const { start, stop, run, consume } = tickerSlice.actions

export default tickerSlice.reducer
