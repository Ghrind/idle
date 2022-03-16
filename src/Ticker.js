import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Menu, Button, Header, Label } from 'semantic-ui-react'
import { start, stop } from './features/tickerSlice'
import { pilotActionsData } from './pilotActionsData'
import PilotActionProgress from './PilotActionProgress'

export default function Ticker() {
  const ticker = useSelector((state) => state.ticker)
  const ticks = useSelector((state) => state.ticker.ticks)
  const pilotActionCode = useSelector((state) => state.pilotActions.active)
  const pilotAction = useSelector((state) => pilotActionsData[pilotActionCode])
  const title = pilotAction === undefined ? 'Idle' : pilotAction.name

  return (
    <main>
      <Header as='h5'>Currently {title}</Header>
      <Menu.Item>
        { pilotAction === undefined ? ticker.message : <PilotActionProgress code={pilotActionCode} /> }
      </Menu.Item>
      <Menu.Item>Started At: {ticker.startedAt}</Menu.Item>
    </main>
  );
}
