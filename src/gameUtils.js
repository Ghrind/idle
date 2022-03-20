export function rollMinMax(min, max) {
  return Math.floor(Math.random() * max) + min;
}

export function rollPercentage(threshold) {
  return rollMinMax(1, 100) <= threshold
}
