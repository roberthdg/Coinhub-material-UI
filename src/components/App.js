import React, { useContext } from 'react';
import { settingsContext } from '../context/settingsContext'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBtc, faEthereum, faGithub, faMonero, faViacoin } from '@fortawesome/free-brands-svg-icons'
import { faCalculator, faSlidersH } from '@fortawesome/free-solid-svg-icons'
import Main from './Main';

library.add( faBtc, faEthereum, faGithub, faCalculator, faSlidersH, faMonero, faViacoin )

const lightTheme = createMuiTheme();

const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

const App = () => {

  const [settings] = useContext(settingsContext)

  return (
    <ThemeProvider theme={settings.theme==='Light'? lightTheme : darkTheme}>
      <Main />
    </ThemeProvider>
  );
}

export default App;
