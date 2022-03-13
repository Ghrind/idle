import { Button } from 'semantic-ui-react'
import { useDispatch } from 'react-redux'
import { List, Header, Label, Segment } from 'semantic-ui-react'
import { Inventory } from '../Inventory'

export default function Vault() {
  return (
    <main>
      <Header as='h1' attached='top'>Vault</Header>
      <Segment attached>
        <Inventory />
      </Segment>
    </main>
  );
}
