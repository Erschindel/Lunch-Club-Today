import React from 'react';
import './App.css';
import Timer from "./components/timer.jsx";
import Maps from "./components/map.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';

function Clock() {
  return (
    <div className="Apple">
      <header className="App-header">
        < Timer />
        < Maps />
      </header>
    </div>
  );
}

export default Clock;
