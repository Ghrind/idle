import { Header, Segment, Card } from 'semantic-ui-react'
import PilotAction from '../../PilotAction'
import SkillHeader from '../../SkillHeader'

export default function Mining() {
  return (
    <main>
      <SkillHeader skillCode='mining' />
      <Segment attached>
        <Card.Group>
          <PilotAction code="mining.iron" />
        </Card.Group>
      </Segment>
    </main>
  );
}
