import React from 'react';
import { ContextProvider } from '../context/settingsContext'
import Main from './Main';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBtc, faEthereum, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faCalculator, faSlidersH } from '@fortawesome/free-solid-svg-icons'

library.add( faBtc, faEthereum, faGithub, faCalculator, faSlidersH )

function App() {
  return (
    <ContextProvider>
      <Main />
    </ContextProvider>
  );
}

export default App;
