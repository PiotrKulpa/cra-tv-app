import { useEffect, useState, useRef } from 'react'
import logo from './logo.svg';
import './App.css';

import FocusableWrapper from './FocusableWrapper'

function App() {

  // TODO: one method to grab all focusable elements
  // dynamicly set focus to next or prev focusable element
  //  use css nth-child()

  const [focusableIndex, setFocusableIndex] = useState(0);
  useEffect(() => {
  const focusableElements = document.getElementsByClassName('focusable');

  });

  console.log(focusableIndex);

  return (
    <div className="App">
      <header className="App-header">
        <FocusableWrapper focusableIndex={focusableIndex} setFocusableIndex={setFocusableIndex} elIndex={0}>BOX 1</FocusableWrapper>
        <FocusableWrapper focusableIndex={focusableIndex} setFocusableIndex={setFocusableIndex} elIndex={1}>BOX 2</FocusableWrapper>
        <FocusableWrapper focusableIndex={focusableIndex} setFocusableIndex={setFocusableIndex} elIndex={2}>BOX 3</FocusableWrapper>
        <FocusableWrapper focusableIndex={focusableIndex} setFocusableIndex={setFocusableIndex} elIndex={3}>BOX 4</FocusableWrapper>
        <FocusableWrapper focusableIndex={focusableIndex} setFocusableIndex={setFocusableIndex} elIndex={4}>BOX 5</FocusableWrapper>
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
