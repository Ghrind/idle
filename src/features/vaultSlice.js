import { createSlice } from '@reduxjs/toolkit'
import { sellItemFromVault, equipItemInSlot, slotIsFree } from '../vaultUtils'
import { getItemData } from '../itemsData'
import { gameData } from '../gameData'

export const vaultActionsSlice = createSlice({
  name: 'vaultActions',
  reducers: {
    sellItem: (state, action) => {
      sellItemFromVault(state.vault, action.payload.itemCode, action.payload.quantity)
    },
    equipItem: (state, action) => {
      const itemCode = action.payload.itemCode
      const slot = action.payload.slot

      equipItemInSlot(state.vault, state.slots, itemCode, slot)
    },
    freeEquipItem: (state, action) => {
      const itemCode = action.payload.itemCode
      const item = getItemData(itemCode)
      const slot = item.slot

      if (slotIsFree(state.slots, slot)) {
        equipItemInSlot(state.vault, state.slots, itemCode, slot)
        return
      }

      for (var i=1; i <= gameData.maxSimilarSlots; i++) {
        if (slotIsFree(state.slots, slot + i)) {
          equipItemInSlot(state.vault, state.slots, itemCode, slot + i)
          return
        }
      }

    },
  }
})

export const { sellItem, equipItem, freeEquipItem } = vaultActionsSlice.actions

export default vaultActionsSlice.reducer
