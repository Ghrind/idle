import React from 'react';
import './App.css';
import Redux from 'react-redux';
//import { useDispatch, useSelector } from 'react-redux'
import 'semantic-ui-css/semantic.css'
import SkillsList from './skillsList'
import Ticker from './Ticker'
import { Outlet } from 'react-router'
import { Inventory } from './Inventory'


function App() {
  return (
    <div className="App">
      <SkillsList />
      <Inventory />
      <Ticker />
      <Outlet />
    </div>
  );
}

export default App;
