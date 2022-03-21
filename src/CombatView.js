import { useDispatch, useSelector } from 'react-redux'
import { Segment, Progress, Label, Container, Header, List, Button } from 'semantic-ui-react'
import { startCombat} from './features/combatSlice'
import PilotActionProgress from './PilotActionProgress'
import { stopAction } from './features/pilotActionsSlice'
import { chanceToHit, evasionChance } from './gameMaths'
import { enemiesData } from './enemiesData'

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
          <List.Item>Accuracy (melee/rampage): {props.actor.accuracy.current} {props.target === undefined ? '' : <span>({chanceToHit(props.actor.accuracy.current, props.target.evasion.current)}%)</span>}</List.Item>
          <List.Item>Evasion: {props.actor.evasion.current} {props.target === undefined ? '' : <span>({ evasionChance(props.target.accuracy.current, props.actor.evasion.current)}%)</span>}</List.Item>
          <List.Item>Damage: {props.actor.minDamage.current}-{props.actor.maxDamage.current}</List.Item>
        </List>
      </Container>
      { props.pilot ? <PilotActionProgress code='combat' attached='bottom' /> : <Progress attached='bottom' percent={enemyProgress} color='yellow' /> }
    </Segment>
  )
}

function CombatOption(props) {
  const dispatch = useDispatch()
  const handleStart = () => { dispatch(startCombat({ enemy: props.code })) }

  return (
    <Segment>
      <p>{props.name}</p>
      <Button onClick={handleStart}>Fight</Button>
    </Segment>
  )
}

export default function CombatView(props) {
  const pilot = useSelector((state) => state.pilot)
  const enemy = useSelector((state) => state.enemy)
  const dispatch = useDispatch()
  const handleStop = () => { dispatch(stopAction()) }
  const inCombat = useSelector((state) => state.skills.active) === 'combat'
  const combatChoices = Object.entries(enemiesData).map(([key, value]) => <CombatOption name={value.name} code={key} />)

  return(
    <main>
      <CombatStats pilot actor={pilot} />
      { enemy === null ? '' : <CombatStats actor={enemy} target={pilot} /> }
      { inCombat ? <Button onClick={handleStop}>Stop</Button> : '' }
      { combatChoices }
    </main>
  )
}
