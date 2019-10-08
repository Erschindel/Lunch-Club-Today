import React from 'react';
import './App.css';
import Timer from "./components/timer";
import Search from "./components/mapSearch";
import 'bootstrap/dist/css/bootstrap.min.css';

function Clock() {
  return (
    <div>
      <header className="App-header">
        < Timer />
        < Search />

      </header>
    </div>
  );
}

export default Clock;
