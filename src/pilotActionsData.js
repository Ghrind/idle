export const pilotActionsData = {
  'mining.iron': {
    name: "Mining Iron Ore",
    outputItems: [
      { code: 'items.ironore', quantity: 1 }
    ],
    inputItems: [],
    ticksPerAction: 3,
    xp: 5,
  },
  'smelting.iron': {
    name: "Smelting Iron Bar",
    inputItems: [
      { code: 'items.ironore', quantity: 2 }
    ],
    outputItems: [
      { code: 'items.ironbar', quantity: 1 }
    ],
    ticksPerAction: 2,
    xp: 7,
  },
}
