import { createSlice } from '@reduxjs/toolkit'
import { addToInventory, removeFromInventory } from '../inventoryUtils'
import { updateSkillLevel, stopTraining } from '../skillsUtils'
import { itemsData } from '../itemsData'
import { getPilotActionData } from '../pilotActionsData'

export const pilotActionsSlice = createSlice({
  name: 'pilotActions',
  reducers: {
    startPilotAction: (state, action) => {
      state.ticker.active = false
      state.pilotActions.active = action.payload
      state.skills.active = action.payload.split('.')[0]
      state.ticker.ticksToConsume = 0
      state.ticker.ticksProcessed = 0
      state.ticker.startedAt = Date.now()
      state.ticker.message = null
      state.ticker.ticksPerAction = getPilotActionData(state.pilotActions.active).ticksPerAction
      state.ticker.active = true
    },
    doAction: (state, action) => {
      // Action must have a ticksPerAction > 0 to avoid infinite loop
      if (state.ticker.ticksPerAction <= 0) {
        return
      }

      const actionName = state.pilotActions.active
      const pilotAction = getPilotActionData(actionName)

      while (canPerformAction(state, pilotAction)) {
        const skillCode = actionName.split('.')[0]

        state.skills.xp[skillCode] += pilotAction.xp
        updateSkillLevel(state, skillCode)

        for (var i = 0; i < pilotAction.outputItems.length; i++) {
          const itemCode = pilotAction.outputItems[i].code
          const quantity = pilotAction.outputItems[i].quantity

          addToInventory(state.inventory, itemCode, quantity)
        }

        if (pilotAction.inputItems !== undefined) {
          for (var i = 0; i < pilotAction.inputItems.length; i++) {
            const itemCode = pilotAction.inputItems[i].code
            const quantity = pilotAction.inputItems[i].quantity

            removeFromInventory(state.inventory, itemCode, quantity)
          }
        }

        state.ticker.ticksToConsume -= state.ticker.ticksPerAction
      }

    },
  }
})


function canPerformAction(state, pilotAction) {
  // Enough resources
  if (pilotAction.inputItems !== undefined) {
    for (var i = 0; i < pilotAction.inputItems.length; i++) {
      const itemCode = pilotAction.inputItems[i].code
      const requiredQuantity = pilotAction.inputItems[i].quantity
      const quantityInInventory = state.inventory.items[itemCode] !== undefined ? state.inventory.items[itemCode].quantity : 0

      if (requiredQuantity > quantityInInventory) {
        stopTraining(state, pilotAction.name + ': Not enough ' + itemsData[itemCode].name)
        return false
      }
    }
  }

  // Enougth time
  if (state.ticker.ticksPerAction >= state.ticker.ticksToConsume) {
    return false
  }

  return true
}

export const { startPilotAction, doAction } = pilotActionsSlice.actions

export default pilotActionsSlice.reducer
