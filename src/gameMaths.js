export function chanceToHit(attackRating, defenseRating) {
  return Math.floor(attackRating / (attackRating + defenseRating) * 100)
}

export function evasionChance(attackRating, defenseRating) {
  return 100 - chanceToHit(attackRating, defenseRating)
}
