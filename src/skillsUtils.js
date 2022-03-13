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
