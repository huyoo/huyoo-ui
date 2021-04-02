import React from 'react';
import logo from './logo.svg';
import {TimeUnitSelect} from 'huyoo-ui';
import "antd/dist/antd.min.css"

function App() {
  return (
    <div className='App'>
      <header className="App-header">
        {/*<img src={logo} className="App-logo" alt="logo"/>*/}
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <TimeUnitSelect style={{width: 100}} type='hour'/>
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
