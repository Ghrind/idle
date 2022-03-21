import { rollMinMax, rollPercentage } from './gameUtils'
import { chanceToHit} from './gameMaths'
import { getEnemyData } from './enemiesData'

export function performAttack(attacker, target) {
  var outcome = {}

  // Check for a hit
  const currentChanceToHit = chanceToHit(attacker.accuracy.current, target.evasion.current)
  outcome.isHit = rollPercentage(currentChanceToHit)

  if (outcome.isHit) {
    // Roll for damage
    outcome.damageDealt = rollMinMax(attacker.minDamage.current, attacker.maxDamage.current)
  }

  // Target status
  if (target.shield === undefined) {
    outcome.targetStatus = outcome.damageDealt >= target.hp.current ? 'dead' : 'alive'
  } else {
    outcome.targetStatus = outcome.damageDealt >= target.shield.current ? 'shield-depleted' : 'alive'
  }

  return outcome
}

export function prepareForCombat(state, enemyCode) {
  const enemyData = getEnemyData(enemyCode)

  // Enemy
  state.enemy = {}
  state.enemy.code = enemyCode
  state.enemy.name = enemyData.name
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
  state.ticker.xpPerAction = enemyData.xp
}
