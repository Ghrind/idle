import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './store'
import { Provider } from 'react-redux'
import { useDispatch } from 'react-redux'
import { run } from './features/tickerSlice'
import { doAction } from './features/pilotActionsSlice'
import { enemyAttack } from './features/combatSlice'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Mining from './routes/skills/mining'
import Vault from './routes/vault'
import Smelting from './routes/skills/smelting'
import Manufacturing from './routes/skills/manufacturing'
import Inventory from './routes/inventory'
import Combat from './routes/combat'
import './index.css'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="skills/mining" element={<Mining />} />
            <Route path="skills/smelting" element={<Smelting />} />
            <Route path="skills/manufacturing" element={<Manufacturing />} />
            <Route path="combat" element={<Combat />} />
            <Route path="vault" element={<Vault />} />
            <Route path="inventory" element={<Inventory />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


const tickerRunInterval = 50;

function tickOnce() {
  store.dispatch(run())
  store.dispatch(doAction())
  store.dispatch(enemyAttack())

  setTimeout(() => {
    tickOnce();
  }, tickerRunInterval)
}

tickOnce();
