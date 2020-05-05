import React, { useState } from 'react';
import './App.css';
import Toolbar from './components/Toolbar';

function App() {
  const [theme, setTheme] = useState('light');
  return (
    <div className="App">
      <Toolbar theme={theme} />
    </div>
  );
}

export default App;
