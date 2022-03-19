const enemiesData = {
  'devourer': {
    hp: 100,
    accuracy: 50,
    minDamage: 10,
    maxDamage: 20,
  },
}

export function getEnemyData(enemyCode) {
  const data = enemiesData[enemyCode]
  if (data === undefined) {
   throw 'Cannot find data for enemy: "' + enemyCode + '"'
  } else {
    return data
  }
}