import { Header, Segment } from 'semantic-ui-react'
import CombatView from '../CombatView'

export default function combat(store) {
  return (
    <main>
      <Header as='h1' attached='top'>Combat</Header>
      <Segment attached>
        <CombatView />
      </Segment>
    </main>
  )
}
