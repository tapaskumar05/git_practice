import React from 'react';
import './App.css';
import StateHookExample from './components/StateHook';
import UseEffectHookExample from './components/UseEffectHookExample';

function App() {
  return (
    <div className="App">
      <ul>
        <li>
          State Hook <StateHookExample />
        </li>
        <li>
          UseEffect Hook <UseEffectHookExample />
        </li>
      </ul>
    </div>
  );
}

export default App;
