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
      const otherItemCode = state.slots[slot]
      if (otherItemCode !== undefined) {
        addToVault(state.vault, otherItemCode, 1)
      }
      state.slots[slot] = item.code
    },
  }
})

export const { sellItem, equipItem } = vaultActionsSlice.actions

export default vaultActionsSlice.reducer
