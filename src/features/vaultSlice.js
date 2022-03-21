import { createSlice } from '@reduxjs/toolkit'
import { sellItemFromVault, removeFromVault, addToVault } from '../vaultUtils'
import { getItemData } from '../itemsData'

export const vaultActionsSlice = createSlice({
  name: 'vaultActions',
  reducers: {
    sellItem: (state, action) => {
      sellItemFromVault(state.vault, action.payload.itemCode, action.payload.quantity)
    },
    equipItem: (state, action) => {
      const item = getItemData(action.payload.itemCode)
      const slot = action.payload.slot

      removeFromVault(state.vault, item.code, 1)
      const otherItemCode = state.slots.items[slot]
      if (otherItemCode !== undefined) {
        addToVault(state.vault, otherItemCode, 1)
        const otherItem = getItemData(otherItemCode)
        if (otherItem.slots !== undefined) {
          state.slots.active = state.slots.active.filter(slot => !otherItem.slots.includes(slot))
        }
      }
      state.slots.items[slot] = item.code
      if (item.slots !== undefined) {
        state.slots.active = [...state.slots.active, ...item.slots]
      }

      // Remove items from inactive slots
      for(var i=0; i < Object.keys(state.slots.items).length; i++) {
        const key = Object.keys(state.slots.items)[i]
        const itemCode = state.slots.items[key]
        const isSlotActive = state.slots.active.includes(key)

        if (!isSlotActive) {
          addToVault(state.vault, itemCode, 1)
          state.slots.items[key] = null
        }
      }
    },
  }
})

export const { sellItem, equipItem } = vaultActionsSlice.actions

export default vaultActionsSlice.reducer
