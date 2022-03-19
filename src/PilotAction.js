import { Header, Button, Card, Progress, Label } from 'semantic-ui-react'
import { startPilotAction } from './features/pilotActionsSlice'
import { useDispatch, useSelector } from 'react-redux'
import { pilotActionsData } from './pilotActionsData'
import { getItemData } from './itemsData'
import PilotActionProgress from './PilotActionProgress'

function InputOutputItem(props) {
  const name = getItemData(props.code).name
  return (
    <Label>{name} ({props.quantity})</Label>
  )
}

export default function PilotAction(props) {
  const dispatch = useDispatch()
  const handleClick = () => { dispatch(startPilotAction(props.code)) }
  const pilotAction = pilotActionsData[props.code]
  const inputItems = pilotAction.inputItems
  const outputItems = pilotAction.outputItems
  const inputs = inputItems.length == 0 ? '-' : inputItems.map((item) => <InputOutputItem key={item.code} code={item.code} quantity={item.quantity} />)
  const outputs = outputItems.length == 0 ? '-' : outputItems.map((item) => <InputOutputItem key={item.code} code={item.code} quantity={item.quantity} />)
  const active = props.code === useSelector((state) => state.pilotActions.active)
  const locked = pilotAction.level > useSelector((state) => state.skills.levels[pilotAction.skill])

  return (
    <Card>
      <Card.Content>
        <Card.Header>{pilotAction.name}</Card.Header>
        <Card.Meta>
          Time: {pilotAction.ticksPerAction} |
          XP: {pilotAction.xp} |
          Level: {pilotAction.level}
        </Card.Meta>
        <Card.Description>Uses: {inputs}</Card.Description>
        <Card.Description>Produces: {outputs}</Card.Description>
      </Card.Content>
      <Card.Content extra textAlign='center'>
        <PilotActionProgress code={props.code} />
        { <Button disabled={locked} onClick={handleClick}>Start</Button> }
      </Card.Content>
    </Card>
  )
}
