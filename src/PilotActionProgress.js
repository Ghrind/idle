import { Progress } from 'semantic-ui-react'
import { useSelector } from 'react-redux'
import { pilotActionsData } from './pilotActionsData'

export default function PilotActionProgress(props) {
  const ticker = useSelector((state) => state.ticker)
  const globalPercentProgress = 100 / ticker.ticksPerAction * ticker.ticksToConsume
  const active = props.code === useSelector((state) => state.pilotActions.active)
  const percentProgress = active ? globalPercentProgress : 0

  return (
    <Progress color='yellow' attached={props.attached} percent={percentProgress} size='tiny' />
  )
}
