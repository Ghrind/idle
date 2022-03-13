import React from 'react';
import './SkillsList.css';
import Redux from 'react-redux';
import { useDispatch, useSelector } from 'react-redux'
import { List, Header } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { xpForLevel } from './skillsUtils'

export function SkillsListEntry(props) {
  const dispatch = useDispatch()
  const level = useSelector((state) => state.skills.levels[props.skill])
  const xp = useSelector((state) => state.skills.xp[props.skill])
  const active = (useSelector((state) => state.skills.active) === props.skill)
  return (
    <List.Item className={`SkillsListEntry ${ active ? 'active' : '' }` }>
      <Link to={ `/skills/${props.skill}` }>{props.name} {level} ({xp}/{xpForLevel(props.skill, level + 1)})</Link>
    </List.Item>
  );
}

export default function SkillsList() {
  const skills = useSelector((state) => state.skills.names)
  const listItems = Object.entries(skills).map(([key, value]) => <SkillsListEntry key={key} skill={key} name={value} />)
  const active = useSelector((state) => state.skills.active)

  return (
    <div className="SkillsList">
      <Header as="h3">Skills</Header>
      <List celled>
        {listItems}
      </List>
    </div>
  );
}
