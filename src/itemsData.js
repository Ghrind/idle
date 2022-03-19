export const itemsData = {
  'items.ores.iron': { name: 'Iron Ore', price: 5 },
  'items.ores.coal': { name: 'Coal', price: 11 },
  'items.ores.copper': { name: 'Copper Ore', price: 26 },
  'items.ores.silver': { name: 'Silver Ore', price: 49 },
  'items.ores.titanium': { name: 'Titanium Ore', price: 64 },
  'items.ores.gold': { name: 'Gold Ore', price: 64 },
  'items.ores.boron': { name: 'Boron Ore', price: 101 },
  'items.ores.adamant': { name: 'Adamant Ore', price: 116 },
  'items.ores.platinum': { name: 'Platinum Ore', price: 131 },
  'items.ores.etherite': { name: 'Etherite Ore', price: 146 },
  'items.bars.iron': { name: 'Iron Bar', price: 10 },
  'items.bars.steel': { name: 'Steel Bar', price: 27 },
  'items.bars.copper': { name: 'Copper Bar', price: 37 },
  'items.bars.silver': { name: 'Silver Bar', price: 46 },
  'items.bars.titanium': { name: 'Titanium Bar', price: 65 },
  'items.bars.gold': { name: 'Gold Bar', price: 65 },
  'items.bars.boron': { name: 'Ceramic Bar', price: 103 },
  'items.bars.adamant': { name: 'Adamant Bar', price: 141 },
  'items.bars.platinum': { name: 'Platinum Bar', price: 160 },
  'items.bars.neosteel': { name: 'Neosteel Bar', price: 170 },
  'items.bars.etherite': { name: 'Etherite Bar', price: 179 },
  'items.misc.strangetoken': { name: 'Strange Token', price: 1000 },
  'items.armor.iron': { name: 'Iron Armor Plating', price: 25 },
  'items.armor.steel': { name: 'Steel Armor Plating', price: 75 },
  'items.armor.titanium': { name: 'Titanium Armor Plating', price: 100 },
  'items.armor.boron': { name: 'Ceramic Armor Plating', price: 150 },
  'items.armor.adamant': { name: 'Adamant Armor Plating', price: 200 },
  'items.armor.neosteel': { name: 'Neosteel Armor Plating', price: 238 },
  'items.armor.etherite': { name: 'Etherite Armor Plating', price: 250 },
  'items.chassis.squire': { name: 'Squire Chassis', price: 210 },
  'items.chassis.explorer1': { name: 'Explorer Chasis Mk I', price: 235 },
  'items.chassis.explorer2': { name: 'Explorer Chasis Mk II', price: 260 },
  'items.chassis.explorer3': { name: 'Explorer Chasis Mk III', price: 285 },
  'items.chassis.ravager1': { name: 'Ravager Chasis Mk I', price: 310 },
  'items.chassis.ravager2': { name: 'Ravager Chasis Mk II', price: 335 },
  'items.chassis.ravager3': { name: 'Ravager Chasis Mk III', price: 360 },
  'items.chassis.conqueror1': { name: 'Conqueror Chasis Mk I', price: 385 },
  'items.chassis.conqueror2': { name: 'Conqueror Chasis Mk II', price: 410 },
  'items.chassis.conqueror3': { name: 'Conqueror Chasis Mk III', price: 435 },
}

export function getItemData(itemCode) {
  if (itemsData[itemCode] === undefined) {
    throw('Item code is not recognized: "' + itemCode + '"')
  }
  return itemsData[itemCode]
}
