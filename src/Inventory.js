import React from 'react';
import Redux from 'react-redux';
import { useDispatch, useSelector } from 'react-redux'
import { List, Header, Button } from 'semantic-ui-react'
import { itemsData, getItemData } from './itemsData'
import { sellItem } from './features/inventorySlice'

export function InventoryEntry(props) {
  const name = getItemData(props.code).name
  const price = props.quantity * itemsData[props.code].price
  const dispatch = useDispatch()
  const sell =  () => { dispatch(sellItem({ itemCode: props.code, quantity: props.quantity })) }

  return (
    <List.Item>
      {name} ({props.quantity})
      <Button onClick={sell}>Sell All ({price}$)</Button>
    </List.Item>
  );
}

export function Inventory() {
  const items = useSelector((state) => state.inventory.items)
  const money = useSelector((state) => state.inventory.money)
  const listItems = Object.entries(items).map(([key, value]) => <InventoryEntry key={key} code={key} quantity={value.quantity} />)

  return (
    <div className="Inventory">
      <Header as="h3">Inventory</Header>
      <p>Money: {money}$</p>
      <List celled>
        {listItems}
      </List>
    </div>
  );
}
