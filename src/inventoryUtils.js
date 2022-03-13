import { itemsData, getItemData } from './itemsData'

export function addToInventory(inventory, itemCode, quantity) {
  if (quantity > 0) {
    if (inventory.items[itemCode] !== undefined) {
      inventory.items[itemCode].quantity += quantity
    } else {
      inventory.items[itemCode] = { quantity: quantity }
    }
  }
}

export function sellItemFromInventory(inventory, itemCode, quantity) {
  if (inventory.items.itemCode !== undefined ) {
    return
  }
  const item = inventory.items[itemCode]
  const newQuantity = Math.max(0, item.quantity - quantity)
  const itemData = getItemData(itemCode)

  const trueQuantitySold = item.quantity - newQuantity

  if (newQuantity === 0) {
    delete inventory.items[itemCode]
  } else {
    inventory.items[itemCode].quantity = newQuantity
  }

  inventory.money += trueQuantitySold * itemData.price
}
