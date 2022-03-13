import React from 'react';
import Redux from 'react-redux';
import { useSelector } from 'react-redux'
import { List, Header } from 'semantic-ui-react'

export function InventoryEntry(props) {
  return (
    <List.Item>{props.name} ({props.quantity})</List.Item>
  );
}

export function Inventory() {
  const items = useSelector((state) => state.inventory.items)
  const listItems = Object.entries(items).map(([key, value]) => <InventoryEntry key={key} item={key} name={value.name} quantity={value.quantity} />)

  return (
    <div className="Inventory">
      <Header as="h3">Inventory</Header>
      <List celled>
        {listItems}
      </List>
    </div>
  );
}
