import React from 'react';
import './App.css';
import Toolbar from './components/Toolbar';
import { ThemeContext } from './context/ThemeContext';

function App() {
  return (
    <div className="App">
      <ThemeContext.Provider value="light">
        <Toolbar />
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
