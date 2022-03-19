export const pilotActionsData = {
  'combat': {
    name: 'in Combat',
  },
  'mining.iron': {
    name: "Mining Iron Ore",
    skill: 'mining',
    outputItems: [
      { code: 'items.ironore', quantity: 1 }
    ],
    inputItems: [],
    ticksPerAction: 300,
    xp: 5,
    level: 1,
  },
  'mining.coal': {
    name: "Mining Coal",
    skill: 'mining',
    outputItems: [
      { code: 'items.coal', quantity: 1 }
    ],
    inputItems: [],
    ticksPerAction: 300,
    xp: 8,
    level: 1,
  },
  'mining.titanium': {
    name: "Mining Titanium Ore",
    skill: 'mining',
    outputItems: [
      { code: 'items.titaniumore', quantity: 1 }
    ],
    inputItems: [],
    ticksPerAction: 300,
    xp: 10,
    level: 15,
  },
  'smelting.iron': {
    name: "Smelting Iron Bar",
    skill: 'smelting',
    inputItems: [
      { code: 'items.ironore', quantity: 2 }
    ],
    outputItems: [
      { code: 'items.ironbar', quantity: 1 }
    ],
    ticksPerAction: 200,
    xp: 7,
    level: 1,
  },
  'smelting.steel': {
    name: "Smelting Steel Bar",
    skill: 'smelting',
    inputItems: [
      { code: 'items.ironore', quantity: 1 },
      { code: 'items.coal', quantity: 1 }
    ],
    outputItems: [
      { code: 'items.steelbar', quantity: 1 }
    ],
    ticksPerAction: 200,
    xp: 12,
    level: 5,
  },
  'manufacturing.armor.head.iron': {
    name: "Forging Iron Armor Plating",
    skill: 'manufacturing',
    inputItems: [
      { code: 'items.ironbar', quantity: 1 },
    ],
    outputItems: [
      { code: 'items.armor.head.iron', quantity: 1 },
    ],
    ticksPerAction: 300,
    xp: 5,
    level: 1,
  },
}

export function getPilotActionData(pilotActionCode) {
  const data = pilotActionsData[pilotActionCode]

  if (data === undefined) {
      throw 'Unkown pilot action with code: "' + pilotActionCode + '"'
  } else {
    return data
  }
}
