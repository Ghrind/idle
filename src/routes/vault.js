import { Button } from 'semantic-ui-react'
import { List, Header, Label, Segment } from 'semantic-ui-react'
import { useDispatch, useSelector } from 'react-redux'
import { Menu, Dropdown } from 'semantic-ui-react'
import { itemsData, getItemData } from '../itemsData'
import { sellItem } from '../features/vaultSlice'

export function VaultEntry(props) {
  const name = getItemData(props.code).name
  const price = props.quantity * itemsData[props.code].price
  const dispatch = useDispatch()
  const sell =  () => { dispatch(sellItem({ itemCode: props.code, quantity: props.quantity })) }

  return (
    <Dropdown item text={`${name} (${props.quantity})`}>
      <Dropdown.Menu>
        <Dropdown.Item onClick={sell} text={`Sell All (${price}$)`} /> 
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default function Vault() {
  const items = useSelector((state) => state.vault.items)
  const money = useSelector((state) => state.vault.money)
  const listItems = Object.entries(items).map(([key, value]) => <VaultEntry key={key} code={key} quantity={value.quantity} />)

  return (
    <main>
      <Header as='h1' attached='top'>Vault</Header>
      <Segment attached>
        <Menu vertical>
          <Menu.Item>
            Money: {money}$
          </Menu.Item>
          <Menu.Item>
            Items
            <Menu.Menu>
              {listItems}
            </Menu.Menu>
          </Menu.Item>
        </Menu>
      </Segment>
    </main>
  );
}
