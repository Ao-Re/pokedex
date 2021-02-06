import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { PokeProvider } from './PokeContext';
import Header from './Header';

import '../style/App.css';

function App() {
  return (
    <PokeProvider>
      <Router>
        <Header />
      </Router>
    </PokeProvider>
    
  );
}

export default App;
