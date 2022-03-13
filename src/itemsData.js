export const itemsData = {
  'items.ironore': { name: 'Iron Ore', price: 3 },
  'items.strangetoken' : { name: 'Strange Token', price: 1000 },
}

export function getItemData(itemCode) {
  if (itemsData[itemCode] === undefined) {
    throw('Item code is not recognized: "' + itemCode + '"')
  }
  return itemsData[itemCode]
}
