import { createSlice } from '@reduxjs/toolkit'
import { addToInventory, removeFromInventory } from '../inventoryUtils'
import { updateSkillLevel, stopTraining } from '../skillsUtils'
import { itemsData } from '../itemsData'

export const pilotActionsSlice = createSlice({
  name: 'pilotActions',
  reducers: {
    startPilotAction: (state, action) => {
      state.pilotActions.active = action.payload
      state.skills.active = action.payload.split('.')[0]
      state.ticker.ticks = 0
      state.ticker.timeLastChecked = Math.floor(Date.now() / 1000)
    },
    doAction: (state, action) => {
      const actionName = state.pilotActions.active
      const pilotAction = state.pilotActions.actions[actionName]
      if (pilotAction === undefined ) {
        return
      }

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

        state.ticker.ticks -= pilotAction.ticksPerAction
      }

    },
  }
})


function canPerformAction(state, pilotAction) {
  // Enougth time
  if (pilotAction.ticksPerAction >= state.ticker.ticks) {
    return false
  }

  // Enough resources
  if (pilotAction.inputItems !== undefined) {
    for (var i = 0; i < pilotAction.inputItems.length; i++) {
      const itemCode = pilotAction.inputItems[i].code
      const requiredQuantity = pilotAction.inputItems[i].quantity
      const quantityInInventory = state.inventory.items[itemCode] !== undefined ? state.inventory.items[itemCode].quantity : 0

      if (requiredQuantity > quantityInInventory) {
        stopTraining(state, 'Not enough ' + itemsData[itemCode].name)
        return false
      }
    }
  }

  return true
}

export const { startPilotAction, doAction } = pilotActionsSlice.actions

export default pilotActionsSlice.reducer
