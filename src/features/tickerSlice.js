import { createSlice } from '@reduxjs/toolkit'

export const tickerSlice = createSlice({
  name: 'ticker',
  reducers: {
    run: (state, action) => {
      if (!state.ticker.active) {
        return
      }

      const currentTime = Date.now()
      const newTicks = Math.floor((currentTime - state.ticker.startedAt) / state.ticker.tickInterval) - state.ticker.ticksProcessed

      state.ticker.ticksToConsume += newTicks
      state.ticker.ticksProcessed += newTicks
    },
    stop: (state, action) => {
      state.ticker.active = false;
    },
  }

})

export const { start, stop, run } = tickerSlice.actions

export default tickerSlice.reducer
