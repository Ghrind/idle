import { createSlice } from '@reduxjs/toolkit'
import { prepareForCombat, performAttack } from '../combatUtils'
import { stopPilotAction } from '../pilotActionsUtils'

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

        const attackOutcome = performAttack(attacker, target)

        state.pilot.shield.current -= attackOutcome.damageDealt

        if (attackOutcome.targetStatus === 'shield-depleted') {
          stopPilotAction(state, 'Shield depleted during combat')
        } else {
          state.ticker.enemy.ticksToConsume -= state.ticker.enemy.ticksPerAction
        }
      }
    },
  }
})

export const { enemyAttack, startCombat } = CombatSlice.actions

export default CombatSlice.reducer
