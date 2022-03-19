import { Header, Segment, Card } from 'semantic-ui-react'
import PilotAction from '../../PilotAction'
import SkillHeader from '../../SkillHeader'

export default function Manufacturing() {
  return (
    <main>
      <SkillHeader skillCode='manufacturing' />
      <Segment attached>
        <Card.Group>
          <PilotAction code="manufacturing.chassis.squire" />
          <PilotAction code="manufacturing.chassis.explorer1" />
          <PilotAction code="manufacturing.chassis.ravager1" />
          <PilotAction code="manufacturing.chassis.conqueror1" />
          <PilotAction code="manufacturing.chassis.explorer2" />
          <PilotAction code="manufacturing.chassis.ravager2" />
          <PilotAction code="manufacturing.chassis.conqueror2" />
          <PilotAction code="manufacturing.chassis.explorer3" />
          <PilotAction code="manufacturing.chassis.ravager3" />
          <PilotAction code="manufacturing.chassis.conqueror3" />
        </Card.Group>
      </Segment>
    </main>
  );
}
