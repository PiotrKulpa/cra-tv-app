import { useEffect, useState, useRef } from 'react'
import logo from './logo.svg';
import './App.css';

import Focusable from './Focusable'
import FocusableContext from './FocusableContext'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <FocusableContext>
          <Focusable >BOX 1</Focusable>
          <Focusable >BOX 2</Focusable>
          <Focusable >BOX 3</Focusable>
          <Focusable >BOX 4</Focusable>
          <Focusable >BOX 5</Focusable>
        </FocusableContext>
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
