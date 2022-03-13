import { Header, Segment, Button } from 'semantic-ui-react'
import { startPilotAction } from '../../features/pilotActionsSlice'
import { useDispatch } from 'react-redux'

export default function Mining() {
  const dispatch = useDispatch()
  const handleClick = () => { dispatch(startPilotAction('mining.iron')) }
  return (
    <main>
      <Header as='h1' attached='top'>Mining</Header>
      <Segment attached>
        <Button onClick={handleClick} >Iron Ore</Button>
      </Segment>
    </main>
  );
}
