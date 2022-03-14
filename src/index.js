import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './store'
import { Provider } from 'react-redux'
import { useDispatch } from 'react-redux'
import { run, consume } from './features/tickerSlice'
import { doAction } from './features/pilotActionsSlice'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Mining from './routes/skills/mining'
import Vault from './routes/vault'
import Smelting from './routes/skills/smelting'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="skills/mining" element={<Mining />} />
            <Route path="skills/smelting" element={<Smelting />} />
            <Route path="vault" element={<Vault />} />
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


const tickerRunInterval = 1000;

function tickOnce() {
  store.dispatch(run())
  store.dispatch(doAction())

  setTimeout(() => {
    tickOnce();
  }, tickerRunInterval)
}

tickOnce();
