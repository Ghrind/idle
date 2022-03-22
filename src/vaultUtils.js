import { itemsData, getItemData } from './itemsData'
import { gameData } from './gameData'

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

export function itemsForSlot(vaultItems, slot) {
  var items = []
  const codes = Object.keys(vaultItems)
  for (var i=0; i < codes.length; i++) {
    const item = getItemData(codes[i])
    if (item.slot === slotType(slot)) {
      items.push(item)
    }
  }
  return items
}

export function slotType(slotCode) {
  return slotCode.replace(/[1-9]$/, '')
}

export function equipItemInSlot(vault, slots, itemCode, slot) {
  if (itemCode !== null) {
    removeFromVault(vault, itemCode, 1)
  }

  const otherItemCode = slots.items[slot]
  if (otherItemCode !== undefined && otherItemCode !== null) {
    addToVault(vault, otherItemCode, 1)
    const otherItem = getItemData(otherItemCode)
    if (otherItem.slots !== undefined) {
      slots.active = slots.active.filter(slot => !otherItem.slots.includes(slot))
    }
  }
  slots.items[slot] = itemCode
  if (itemCode !== null) {
    var item = getItemData(itemCode)
    if (item.slots !== undefined) {
      slots.active = [...slots.active, ...item.slots]
    }
  }

  // Remove items from inactive slots
  for(var i=0; i < Object.keys(slots.items).length; i++) {
    const key = Object.keys(slots.items)[i]
    const itemCode = slots.items[key]
    const isSlotActive = slots.active.includes(key)

    if (!isSlotActive && itemCode !== null) {
      console.log('Removing item ' + itemCode + ' from inactive slot ' + key)
      addToVault(vault, itemCode, 1)
      slots.items[key] = null
    }
  }
}

export function slotIsFree(slots, slot) {
  return slots.active.includes(slot) && (slots.items[slot] === undefined || slots.items[slot] === null)
}

export function anySlotFree(slots, slot) {
  if (slotIsFree(slots, slot)) {
    return true
  }

  for (var i=1; i <= gameData.maxSimilarSlots; i++) {
    if (slotIsFree(slots, slot + i)) {
      return true
    }
  }
  return false
}
