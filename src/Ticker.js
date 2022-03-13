import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Button, Header } from 'semantic-ui-react'
import { start, stop } from './features/tickerSlice'

export default function Ticker() {
  const ticker = useSelector((state) => state.ticker)
  const dispatch = useDispatch()
  const timeLastChecked = useSelector((state) => state.ticker.timeLastChecked)
  const ticks = useSelector((state) => state.ticker.ticks)

  return (
    <div className="Ticker">
      <Header as="h3">Ticker</Header>
      <Button onClick={ () => dispatch(start()) }>Start</Button>
      <Button onClick={ () => dispatch(stop()) }>Stop</Button>
      <p>Ticks: {ticker.ticks}</p>
      <p>Last time checked: {ticker.timeLastChecked}</p>
      <p>Ticks to process: {ticker.ticksToProcess}</p>
    </div>
  );
}
