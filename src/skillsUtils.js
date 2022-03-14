import { skillsData } from './skillsData'

export function xpForLevel(skillCode, level) {
  const skill = skillsData[skillCode]

  var memo = skill.xpForLevelTwo

  for (var i = 2; i < level; i++) {
    memo = Math.round(memo * skill.progressionFactor) + memo
  }

  return memo
}

export function updateSkillLevel(state, skillCode) {
  const currentXP = state.skills.xp[skillCode]
  const currentLevel = state.skills.levels[skillCode]
  const nextLevelXP = xpForLevel(skillCode, currentLevel + 1)

  if (currentXP >= nextLevelXP) {
    state.skills.levels[skillCode] += 1
    updateSkillLevel(state, skillCode)
  }
}

export function skillsInitialLevels() {
  return mapSkillsToValue(1)
}

export function skillsInitialXP() {
  return mapSkillsToValue(0)
}

function mapSkillsToValue(value) {
  var levels = {}
  const keys = Object.keys(skillsData)
  for (var i = 0; i < keys.length; i++) {
    levels[keys[i]] = value
  }
  return levels
}
