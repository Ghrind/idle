import { useDispatch, useSelector } from 'react-redux'
import { Segment, Progress, Label, Container, Header, List, Button } from 'semantic-ui-react'
import { startCombat } from './features/combatSlice'
import PilotActionProgress from './PilotActionProgress'

function CombatStats(props) {
  const hasHp = props.actor.hp !== undefined
  const hasShield = props.actor.shield !== undefined
  const hpProgress = hasHp ? 100 / props.actor.hp.max * props.actor.hp.current : 0
  const shieldProgress = hasShield ? 100 / props.actor.shield.max * props.actor.shield.current : 0
  const enemyProgress = 100 / useSelector((state) => state.ticker.enemy.ticksPerAction) * useSelector((state) => state.ticker.enemy.ticksToConsume)

  return (
    <Segment>
      { hasShield ? <Progress attached='top' percent={shieldProgress} color='blue' /> : '' }
      { hasHp ? <Progress attached='top' percent={hpProgress} color='red' /> : '' }
      <Container textAlign='center'>
        <Header as='h5'>{props.actor.name}</Header>
        <List>
          { hasShield ? <List.Item>Shield: {props.actor.shield.current}/{props.actor.shield.max}</List.Item> : '' }
          { hasHp ? <List.Item>HP: {props.actor.hp.current}/{props.actor.hp.max}</List.Item> : '' }
          <List.Item>Accuracy (melee/rampage): {props.actor.meleeAccuracy.current}</List.Item>
          <List.Item>Evasion: {props.actor.evasion.current}</List.Item>
          <List.Item>Damage: {17}-{37}</List.Item>
        </List>
      </Container>
      { props.pilot ? <PilotActionProgress code='combat' attached='bottom' /> : <Progress attached='bottom' percent={enemyProgress} color='yellow' /> }
    </Segment>
  )
}

export default function CombatView(props) {
  const pilot = useSelector((state) => state.pilot)
  const enemy = useSelector((state) => state.enemy)
  const dispatch = useDispatch()
  const handleClick = () => { dispatch(startCombat({ enemy: 'devourer' })) }
  return(
    <main>
      <CombatStats pilot actor={pilot} />
      <CombatStats actor={enemy} />
      <Button onClick={handleClick}>Start</Button>
    </main>
  )
}