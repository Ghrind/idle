import { Button } from 'semantic-ui-react'
import { startPilotAction } from '../../features/pilotActionsSlice'
import { useDispatch } from 'react-redux'

export default function Mining() {
  const dispatch = useDispatch()
  const handleClick = () => { dispatch(startPilotAction('mining.iron')) }
  return (
    <main>
      <h2>Mining</h2>
      <Button onClick={handleClick} >Iron Ore</Button>
    </main>
  );
}
