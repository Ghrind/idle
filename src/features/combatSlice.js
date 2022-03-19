import { createSlice } from '@reduxjs/toolkit'

export const CombatSlice = createSlice({
  name: 'Combat',
  reducers: {
    startCombat: (state, action) => {
      state.ticker.active = false
      state.pilotActions.active = 'combat'
      state.skills.active = 'combat'
      state.ticker.ticksPerAction = state.pilot.attackSpeed.current * 100
      state.ticker.ticksToConsume = 0
      state.ticker.ticksProcessed = 0
      state.ticker.enemy.ticksToConsume = 0
      state.ticker.enemy.ticksPerAction = 350 // TODO: change me
      state.ticker.startedAt = Date.now()
      state.ticker.message = null
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
