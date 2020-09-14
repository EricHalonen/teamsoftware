import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'antd'
import chatForum from './ChatForum'
function App() {
  const [enterprise, setEnterprise] = useState<boolean>(false)
  const [daily, setDaily] = useState<boolean>(false)
  const [necessity, setNecessity] = useState<boolean>(false)

  return (
    <div className="App">
      <header className="App-header">
        <Button title='Enterprise' onClick={() => { setEnterprise(true); setNecessity(false); setDaily(false) }} />
        <Button title='Daily' onClick={() => { setDaily(true); setEnterprise(false); setNecessity(false) }} />
        <Button title='Necessity' onClick={() => { setNecessity(true); setDaily(false); setEnterprise(false) }} />
        {
          enterprise && <div>HEEERREEe</div>
        }
        {
          daily && <div>TREREE</div>
        }
        {
          necessity && <div>NECEEED</div>
        }
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
