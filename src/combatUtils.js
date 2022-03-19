import { rollMinMax } from './gameUtils'

export function performAttack(attacker, target) {
  var outcome = {}

  // Check for a hit

  
  // Roll for damage
  outcome.damageDealt = rollMinMax(attacker.minDamage.current, attacker.maxDamage.current)


  return outcome
}
