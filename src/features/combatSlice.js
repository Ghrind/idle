import { createSlice } from '@reduxjs/toolkit'
import { prepareForCombat } from '../combatUtils'

export const CombatSlice = createSlice({
  name: 'Combat',
  reducers: {
    startCombat: (state, action) => {
      state.ticker.active = false
      prepareForCombat(state, 'devourer')
      state.ticker.active = true
    },
    enemyAttack: (state, action) => {
      while (state.ticker.enemy.ticksPerAction > 0 && state.ticker.enemy.ticksToConsume >= state.ticker.enemy.ticksPerAction) {
        const attacker = state.enemy
        const target = state.pilot

        target.shield.current -= 5

        state.ticker.enemy.ticksToConsume -= state.ticker.enemy.ticksPerAction
      }
    },
  }
})

export const { enemyAttack, startCombat } = CombatSlice.actions

export default CombatSlice.reducer
