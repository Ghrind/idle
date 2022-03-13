import { createSlice } from '@reduxjs/toolkit'
import { addToInventory } from '../inventoryUtils'
import { updateSkillLevel } from '../skillsUtils'

export const pilotActionsSlice = createSlice({
  name: 'pilotActions',
  reducers: {
    startPilotAction: (state, action) => {
      state.pilotActions.active = action.payload
      state.skills.active = action.payload.split('.')[0]
      state.ticker.timeLastChecked = Math.floor(Date.now() / 1000)
    },
    doAction: (state, action) => {
      const ticks = state.ticker.ticks
      if (ticks > 0) {
        const actionName = state.pilotActions.active
        const action = state.pilotActions.actions[actionName]
        if (action === undefined ) {
          return
        }
        const skill = actionName.split('.')[0]
        const actionCount = Math.floor(ticks / action.ticksPerAction)

        state.skills.xp[skill] += actionCount * action.xp
        updateSkillLevel(state, skill)

        state.ticker.ticks -= actionCount * action.ticksPerAction

        for (var i = 0; i < action.outputItems.length; i++) {
          const itemCode = action.outputItems[i].code
          const quantity = action.outputItems[i].quantity * actionCount

          addToInventory(state.inventory, itemCode, quantity)
        }
      }
    },
  }
})

export const { startPilotAction, doAction } = pilotActionsSlice.actions

export default pilotActionsSlice.reducer
