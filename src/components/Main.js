import React, { useContext } from 'react';
import { settingsContext } from '../context/settingsContext'
import NavMenu from './NavMenu';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const lightTheme = createMuiTheme();

const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

const Main = () => {

    const [settings] = useContext(settingsContext)
    
    return(
        <ThemeProvider theme={settings.theme==='Light'? lightTheme : darkTheme}>
            <NavMenu />
        </ThemeProvider>
    )
}

export default Main;