const enemiesData = {
  'devourer': {
    name: 'Devourer',
    hp: 20,
    accuracy: 50,
    minDamage: 1,
    maxDamage: 5,
    evasion: 30,
    xp: 20,
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
