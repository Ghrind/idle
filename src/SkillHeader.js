import { Header } from 'semantic-ui-react'
import { xpForLevel } from './skillsUtils'
import { useSelector } from 'react-redux'
import { skillsData } from './skillsData'

export default function SkillHeader(props) {
  const level = useSelector((state) => state.skills.levels[props.skillCode])
  const xp = useSelector((state) => state.skills.xp[props.skillCode])
  const nextXP = xpForLevel(props.skillCode, level + 1)
  const xpPercentage = Math.round((100 / nextXP * xp) * 100, 2) / 100
  const skillName = skillsData[props.skillCode].name

  return (
    <main>
      <Header as='h1' attached='top'>
        <Header.Content>
          {skillName}
          <Header.Subheader>XP: {xp}/{nextXP} ({xpPercentage}%) | Level: {level}/99</Header.Subheader>
        </Header.Content>
      </Header>
    </main>
  );
}
