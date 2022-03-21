export const enemiesData = {
  'enemies.alien.devourer': { name:'Devourer', hp: 50, accuracy: 60, evasion: 50, minDamage: 1, maxDamage: 5, xp: 15 },
  'enemies.bandit.rampager': { name:'Rampager', hp: 100, accuracy: 50, evasion: 40, minDamage: 2, maxDamage: 10, xp: 30 },
}

export function getEnemyData(enemyCode) {
  const data = enemiesData[enemyCode]
  if (data === undefined) {
   throw 'Cannot find data for enemy: "' + enemyCode + '"'
  } else {
    return data
  }
}
