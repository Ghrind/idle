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
          <PilotAction code="mining.coal" />
          <PilotAction code="mining.titanium" />
        </Card.Group>
      </Segment>
    </main>
  );
}
