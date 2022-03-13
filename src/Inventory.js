import React from 'react';
import Redux from 'react-redux';
import { useDispatch, useSelector } from 'react-redux'
import { Menu, Dropdown } from 'semantic-ui-react'
import { itemsData, getItemData } from './itemsData'
import { sellItem } from './features/inventorySlice'

export function InventoryEntry(props) {
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

export function Inventory() {
  const items = useSelector((state) => state.inventory.items)
  const money = useSelector((state) => state.inventory.money)
  const listItems = Object.entries(items).map(([key, value]) => <InventoryEntry key={key} code={key} quantity={value.quantity} />)

  return (
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
  );
}
