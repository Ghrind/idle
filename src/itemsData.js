export const itemsData = {
  'items.ironore': { name: 'Iron Ore', price: 3 },
  'items.coal': { name: 'Coal', price: 3 },
  'items.titaniumore': { name: 'Titanium Ore', price: 3 },
  'items.ironbar': { name: 'Iron Bar', price: 15 },
  'items.strangetoken' : { name: 'Strange Token', price: 1000 },
  'items.armor.head.iron' : { name: 'Head Iron Armor Plating', price: 30 },
}

export function getItemData(itemCode) {
  if (itemsData[itemCode] === undefined) {
    throw('Item code is not recognized: "' + itemCode + '"')
  }
  return itemsData[itemCode]
}
