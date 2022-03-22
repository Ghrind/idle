import { Button } from 'semantic-ui-react'
import { List, Header, Label, Segment } from 'semantic-ui-react'
import { useDispatch, useSelector } from 'react-redux'
import { Menu, Dropdown } from 'semantic-ui-react'
import { itemsData, getItemData } from '../itemsData'
import { sellItem, equipItem, freeEquipItem } from '../features/vaultSlice'
import { slotType, anySlotFree } from '../vaultUtils'

export function VaultEntry(props) {
  const item = getItemData(props.code)
  const price = props.quantity * itemsData[props.code].price
  const dispatch = useDispatch()
  const sell = () => { dispatch(sellItem({ itemCode: props.code, quantity: props.quantity })) }
  const freeEquipOK = anySlotFree(useSelector((state) => state.slots), item.slot)
  const equipReplaceItems = Object.entries(useSelector((state) => state.slots.items)).filter(([key, value]) => { return slotType(key) === item.slot && value !== null })
  const equipInSlot = (slot, itemCode) => { dispatch(equipItem({ itemCode: itemCode, slot: slot })) }
  const freeEquip = (itemCode) => { dispatch(freeEquipItem({ itemCode: itemCode })) }

  return (
    <Dropdown item text={`${item.name} (${props.quantity})`}>
      <Dropdown.Menu>
        <Dropdown.Item onClick={sell} text={`Sell All (${price}$)`} /> 
        { freeEquipOK ? <Dropdown.Item onClick={() => freeEquip(item.code)} text='Equip' /> : '' }
        { equipReplaceItems.map(([key, otherItem]) => <Dropdown.Item onClick={() => equipInSlot(key, item.code)} text={`Replace ${getItemData(otherItem).name}`} />) }
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
