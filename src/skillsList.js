import React from 'react';
import Redux from 'react-redux';
import { useDispatch, useSelector } from 'react-redux'
import { Menu, Header, Label } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { xpForLevel } from './skillsUtils'
import Ticker from './Ticker'
import { skillsData } from './skillsData'

export function SkillsListEntry(props) {
  const dispatch = useDispatch()
  const level = useSelector((state) => state.skills.levels[props.skill])
  //const xp = useSelector((state) => state.skills.xp[props.skill])
  const active = (useSelector((state) => state.skills.active) === props.skill)

  return (
    <Menu.Item active={active}>
      <Label >{level}/99</Label>
      <Link to={ `/skills/${props.skill}` }>
        {props.name}
      </Link>
    </Menu.Item>
  );
}

//({xp}/{xpForLevel(props.skill, level + 1)})

export default function SkillsList() {
  const listItems = Object.entries(skillsData).map(([key, value]) => <SkillsListEntry key={key} skill={key} name={value.name} />)
  const active = useSelector((state) => state.skills.active)
  const inventorySlotsCount = Object.keys(useSelector((state) => state.inventory.items)).length

  return (
    <Menu vertical>
      <Menu.Item>
        <Label>{inventorySlotsCount}</Label>
        <Link to={ `/vault` }>
          Vault
        </Link>
      </Menu.Item>
      <Menu.Item>
        Skills
        <Menu.Menu>
          {listItems}
        </Menu.Menu>
      </Menu.Item>
      <Menu.Item>
        <Ticker />
      </Menu.Item>
    </Menu>
  );
}
