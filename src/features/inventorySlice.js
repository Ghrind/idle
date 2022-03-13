import { createSlice } from '@reduxjs/toolkit'
import { sellItemFromInventory } from '../inventoryUtils'

export const inventoryActionsSlice = createSlice({
  name: 'inventoryActions',
  reducers: {
    sellItem: (state, action) => {
      sellItemFromInventory(state.inventory, action.payload.itemCode, action.payload.quantity)
    },
  }
})

export const { sellItem} = inventoryActionsSlice.actions

export default inventoryActionsSlice.reducer
