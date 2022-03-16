import { Header, Segment, Card } from 'semantic-ui-react'
import PilotAction from '../../PilotAction'
import SkillHeader from '../../SkillHeader'

export default function Manufacturing() {
  return (
    <main>
      <SkillHeader skillCode='manufacturing' />
      <Segment attached>
        <Card.Group>
          <PilotAction code="manufacturing.armor.head.iron" />
        </Card.Group>
      </Segment>
    </main>
  );
}
