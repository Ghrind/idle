import { itemsData, getItemData } from './itemsData'

export function addToVault(vault, itemCode, quantity) {
  if (quantity > 0) {
    if (vault.items[itemCode] !== undefined) {
      vault.items[itemCode].quantity += quantity
    } else {
      vault.items[itemCode] = { quantity: quantity }
    }
  }
}

export function removeFromVault(vault, itemCode, quantity) {
  const quantityInVault = vault.items[itemCode] ? vault.items[itemCode].quantity : 0
  if (quantityInVault <= quantity) {
    delete vault.items[itemCode]
  } else {
    vault.items[itemCode].quantity -= quantity
  }
}

export function sellItemFromVault(vault, itemCode, quantity) {
  if (vault.items.itemCode !== undefined ) {
    return false
  }
  const item = vault.items[itemCode]
  const newQuantity = Math.max(0, item.quantity - quantity)
  const itemData = getItemData(itemCode)

  const trueQuantitySold = item.quantity - newQuantity

  if (newQuantity === 0) {
    delete vault.items[itemCode]
  } else {
    vault.items[itemCode].quantity = newQuantity
  }

  vault.money += trueQuantitySold * itemData.price
}