import { rollMinMax } from './gameUtils'
import { getEnemyData } from './enemiesData'

export function performAttack(attacker, target) {
  var outcome = {}

  // Check for a hit


  // Roll for damage
  outcome.damageDealt = rollMinMax(attacker.minDamage.current, attacker.maxDamage.current)

  // Target status
  outcome.targetStatus = outcome.damageDealt >= target.hp.current ? 'dead' : 'alive'

  return outcome
}

export function prepareForCombat(state, enemyCode) {
  const enemyData = getEnemyData(enemyCode)

  // Enemy
  state.enemy.hp = { base: enemyData.hp, max: enemyData.hp, current: enemyData.hp }
  state.enemy.accuracy = { base: enemyData.accuracy, max: enemyData.accuracy, current: enemyData.accuracy }
  state.enemy.evasion = { base: enemyData.evasion, max: enemyData.evasion, current: enemyData.evasion }
  state.enemy.attackSpeed = { base: enemyData.attackSpeed, max: enemyData.attackSpeed, current: enemyData.attackSpeed }
  state.enemy.minDamage = { base: enemyData.minDamage, max: enemyData.minDamage, current: enemyData.minDamage }
  state.enemy.maxDamage = { base: enemyData.maxDamage, max: enemyData.maxDamage, current: enemyData.maxDamage }

  // Misc
  state.pilotActions.active = 'combat'
  state.skills.active = 'combat'
  state.ticker.ticksPerAction = state.pilot.attackSpeed.current * 100
  state.ticker.ticksToConsume = 0
  state.ticker.ticksProcessed = 0
  state.ticker.enemy.ticksToConsume = 0
  state.ticker.enemy.ticksPerAction = 350 // TODO: change me
  state.ticker.startedAt = Date.now()
  state.ticker.message = null
}
