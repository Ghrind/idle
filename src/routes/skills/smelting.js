import { Header, Segment, Card } from 'semantic-ui-react'
import PilotAction from '../../PilotAction'

export default function Mining() {
  return (
    <main>
      <Header as='h1' attached='top'>Mining</Header>
      <Segment attached>
        <Card.Group>
          <PilotAction code="smelting.iron" />
        </Card.Group>
      </Segment>
    </main>
  );
}
