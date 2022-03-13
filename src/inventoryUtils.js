import { itemsData } from './itemsData'

export function addToInventory(inventory, itemCode, quantity) {
  if (quantity > 0) {
    if (inventory.items[itemCode] !== undefined) {
      inventory.items[itemCode].quantity += quantity
    } else {
      inventory.items[itemCode] = { quantity: quantity, name: itemsData[itemCode].name }
    }
  }
}
