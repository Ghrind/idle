import { createSlice } from '@reduxjs/toolkit'
import { sellItemFromVault } from '../vaultUtils'

export const vaultActionsSlice = createSlice({
  name: 'vaultActions',
  reducers: {
    sellItem: (state, action) => {
      sellItemFromVault(state.vault, action.payload.itemCode, action.payload.quantity)
    },
  }
})

export const { sellItem} = vaultActionsSlice.actions

export default vaultActionsSlice.reducer
