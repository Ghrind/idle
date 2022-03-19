export function stopPilotAction(state, message) {
  state.ticker.message = message
  state.ticker.active = false
  state.skills.active = null
  state.pilotActions.active = null
  state.ticker.ticksPerAction = 0
  state.ticker.enemy.ticksPerAction = 0
  state.ticker.xpPerAction = 0
  state.ticker.ticksToConsume = 0
  state.ticker.enemy.ticksToConsume = 0
  state.ticker.ticksProcessed = 0

  state.enemy = null
}
