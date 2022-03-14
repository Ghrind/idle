import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Menu, Button, Header, Label } from 'semantic-ui-react'
import { start, stop } from './features/tickerSlice'
import { pilotActionsData } from './pilotActionsData'

function TickerButton(props) {
  const dispatch = useDispatch()
  const isRunning = useSelector((state) => state.ticker.running)

  if (isRunning) {
    return <Button fluid onClick={ () => dispatch(stop()) }>Stop</Button>
  } else {
    return <Button fluid onClick={ () => dispatch(start()) }>Start</Button>
  }
}

export default function Ticker() {
  const ticker = useSelector((state) => state.ticker)
  const ticks = useSelector((state) => state.ticker.ticks)
  const pilotAction = useSelector((state) => pilotActionsData[state.pilotActions.active])
  const title = pilotAction === undefined ? 'Idle' : pilotAction.name

  return (
    <main>
      <Header as='h5'>Pilot is currently {title}</Header>
      <Menu.Item>{ticker.message}</Menu.Item>
      <Menu.Item>Ticks <Label>{ticker.ticks}</Label></Menu.Item>
      <Menu.Item>Ticks to process <Label>{ticker.ticksToProcess}</Label></Menu.Item>
      <Menu.Item><TickerButton /></Menu.Item>
    </main>
  );
}
