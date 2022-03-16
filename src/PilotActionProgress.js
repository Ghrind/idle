import { Progress } from 'semantic-ui-react'
import { useSelector } from 'react-redux'
import { pilotActionsData } from './pilotActionsData'

export default function PilotActionProgress(props) {
  const pilotAction = pilotActionsData[props.code]
  const globalPercentProgress = 100 / pilotAction.ticksPerAction * useSelector((state) => state.ticker.ticksToConsume)
  const active = props.code === useSelector((state) => state.pilotActions.active)
  const percentProgress = active ? globalPercentProgress : 0

  return (
    <Progress color='yellow' percent={percentProgress} size='tiny' />
  )
}
