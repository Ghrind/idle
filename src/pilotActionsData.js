export const pilotActionsData = {
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
    ticksPerAction: 200,
    xp: 3,
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
    level: 1
  },
}
