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
          <PilotAction code="mining.copper" />
          <PilotAction code="mining.silver" />
          <PilotAction code="mining.titanium" />
          <PilotAction code="mining.gold" />
          <PilotAction code="mining.boron" />
          <PilotAction code="mining.adamant" />
          <PilotAction code="mining.platinum" />
          <PilotAction code="mining.etherite" />
        </Card.Group>
      </Segment>
    </main>
  );
}
