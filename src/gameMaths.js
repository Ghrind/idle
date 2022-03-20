export function chanceToHit(attackRating, defenseRating) {
  return attackRating / (attackRating + defenseRating) * 100
}
