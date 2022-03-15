import { Header, Segment, Card } from 'semantic-ui-react'
import PilotAction from '../../PilotAction'
import SkillHeader from '../../SkillHeader'

export default function Smelting() {
  return (
    <main>
      <SkillHeader skillCode='smelting' />
      <Segment attached>
        <Card.Group>
          <PilotAction code="smelting.iron" />
        </Card.Group>
      </Segment>
    </main>
  );
}
