import React from 'react';
import logo from './images/cog.svg';
import './App.css';

function App() {
  return (
    <div className="Sivu">
      <header className="App-header">
        <img src={logo} className="up right wheel spin-r fader" alt="Spinning wheel" />
        <div className="Nauha">
          <p className="Otsikko">
            Tulossa...
          </p>
        </div>
        <img src={logo} className="low right wheel spin-l" alt="Spinning wheel"/>
      </header>
    </div>
  );
}

export default App;
