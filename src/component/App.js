import React from 'react';

import { PokeProvider } from './PokeContext';
import Header from './Header';

import '../style/App.css';

function App() {
  return (
    <PokeProvider>
      <Header />
    </PokeProvider>
    
  );
}

export default App;
