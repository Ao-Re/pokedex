import React from 'react';

import { PokeProvider } from './PokeContext';
import Main from './Main';

import '../style/App.css';

function App() {
  return (
    <PokeProvider>
      <Main />
    </PokeProvider>
    
  );
}

export default App;
