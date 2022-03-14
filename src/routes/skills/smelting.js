import { Header, Segment, Button } from 'semantic-ui-react'
import { startPilotAction } from '../../features/pilotActionsSlice'
import { useDispatch } from 'react-redux'

export default function Mining() {
  const dispatch = useDispatch()
  const handleClick = () => { dispatch(startPilotAction('smelting.iron')) }
  return (
    <main>
      <Header as='h1' attached='top'>Smelting</Header>
      <Segment attached>
        <Button onClick={handleClick} >Iron Bar</Button>
      </Segment>
    </main>
  );
}
