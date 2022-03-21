import { Segment, Header, Menu, Dropdown } from 'semantic-ui-react'
import { gameData } from '../gameData'
import { itemsForSlot } from '../vaultUtils'
import { useDispatch, useSelector } from 'react-redux'
import { equipItem } from '../features/vaultSlice'
import { getItemData } from '../itemsData'

function Slot(props) {
  const dispatch = useDispatch()
  const switchTo = (itemCode) => { dispatch(equipItem({ slot: props.type, itemCode: itemCode })) }
  const vaultItems = useSelector((state) => state.vault.items)
  const equippedItemCode = useSelector((state) => state.slots.items[props.type])
  const equippedItem = (equippedItemCode === null || equippedItemCode === undefined) ? undefined : getItemData(equippedItemCode)
  const label = (equippedItemCode === null || equippedItemCode === undefined) ? 'Equip' : 'Switch to'
  const slotLabel = (equippedItemCode === null || equippedItemCode === undefined) ? '[' + props.name + ']' : equippedItem.name

  return (
    <Dropdown item text={ slotLabel }>
      <Dropdown.Menu>
        { itemsForSlot(vaultItems, props.type).map((item) => <Dropdown.Item key={item.code} onClick={() => switchTo(item.code)} text={`${label} ${item.name}`} />) }
        { equippedItem !== undefined ? <Dropdown.Item key='unequip' onClick={() => switchTo(null)} text='Unequip' /> : ''}
      </Dropdown.Menu>
    </Dropdown>
  )
}

export default function Inventory(props) {
  const slots = useSelector((state) => state.slots.active).map((slot) =>  gameData.slots[slot])

  return (
    <main>
      <Header as='h1' attached='top'>
        <Header.Content>
          Inventory
        </Header.Content>
      </Header>
      <Segment attached>
        <Menu vertical>
        { slots.map((slot) => <Slot key={slot.type} type={slot.type} name={slot.name} itemCode={slot.itemCode} />) }
        </Menu>
      </Segment>
    </main>
  )
}
