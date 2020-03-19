import React, { useState, useContext } from 'react';
import { settingsContext } from '../context/settingsContext'
import CssBaseline from '@material-ui/core/CssBaseline';
import DrawerMenu from './Drawer';
import Appbar from './Appbar'
import { useStyles } from '../styles/drawerStyle'
import Settings from './Settings';
import Dashboard from './Dashboard';

const Main = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const handleDrawerOpen = () => setOpen(true);
  const handleDrawerClose = () => setOpen(false);
  const [settings] = useContext(settingsContext)
  
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Appbar classes={classes} handleDrawerOpen={handleDrawerOpen} open={open}/>
      <DrawerMenu classes={classes} handleDrawerClose={handleDrawerClose} open={open}/>

      { settings.currentPage==='Bitcoin' ? <Dashboard key='BTC' coin='BTC'  classes={classes}/> : null }
      { settings.currentPage==='Ethereum' ? <Dashboard key='ETH' coin='ETH' classes={classes}/> : null }
      { settings.currentPage==='Monero' ? <Dashboard key='XMR' coin='XMR'  classes={classes}/> : null }
      { settings.currentPage==='Settings' ? <Settings classes={classes}/> : null }

    </div>
  );
}

export default Main;