import { Header, Segment, Card } from 'semantic-ui-react'
import PilotAction from '../../PilotAction'
import SkillHeader from '../../SkillHeader'

export default function Forging() {
  return (
    <main>
      <SkillHeader skillCode='forging' />
      <Segment attached>
        <Card.Group>
          <PilotAction code="forging.bars.iron" />
          <PilotAction code="forging.armor.iron" />
          <PilotAction code="forging.bars.steel" />
          <PilotAction code="forging.bars.copper" />
          <PilotAction code="forging.bars.silver" />
          <PilotAction code="forging.armor.steel" />
          <PilotAction code="forging.bars.titanium" />
          <PilotAction code="forging.bars.gold" />
          <PilotAction code="forging.armor.titanium" />
          <PilotAction code="forging.bars.boron" />
          <PilotAction code="forging.armor.boron" />
          <PilotAction code="forging.bars.adamant" />
          <PilotAction code="forging.armor.adamant" />
          <PilotAction code="forging.bars.platinum" />
          <PilotAction code="forging.bars.neosteel" />
          <PilotAction code="forging.bars.etherite" />
          <PilotAction code="forging.armor.neosteel" />
          <PilotAction code="forging.armor.etherite" />
        </Card.Group>
      </Segment>
    </main>
  );
}
