export const itemsData = {
  'items.ironore': { name: 'Iron Ore', price: 3 },
  'items.coal': { name: 'Coal', price: 3 },
  'items.titaniumore': { name: 'Titanium Ore', price: 3 },
  'items.ironbar': { name: 'Iron Bar', price: 15 },
  'items.steelbar': { name: 'Steel Bar', price: 15 },
  'items.strangetoken': { name: 'Strange Token', price: 1000 },
  'items.armor.head.iron': { name: 'Head Iron Armor Plating', price: 30 },
  'items.chassis.basic': { name: 'Basic Chassis', price: 100, slot: 'chassis' },
  'items.chassis.advanced': { name: 'Advanced Chassis', price: 100, slot: 'chassis', slots: ['rangedWeapon1', 'rangedWeapon2'] },
  'items.chassis.prototype': { name: 'Prototype Chassis', price: 100, slot: 'chassis' },
  'items.weapons.minigun': { name: 'Vulcan VII Minigun', price: 100, slot: 'rangedWeapon' },
}

export function getItemData(itemCode) {
  if (itemsData[itemCode] === undefined) {
    throw('Item code is not recognized: "' + itemCode + '"')
  }
  return {...itemsData[itemCode], ...{ code: itemCode }}
}
