import { rollMinMax } from './gameUtils'

export function performAttack(attacker, target) {
  var outcome = {}

  // Check for a hit

  
  // Roll for damage
  outcome.damageDealt = rollMinMax(attacker.minDamage.current, attacker.maxDamage.current)

  // Target status
  outcome.targetStatus = outcome.damageDealt >= target.hp.current ? 'dead' : 'alive'

  return outcome
}
