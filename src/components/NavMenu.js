import React, { useState } from 'react';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { useStyles } from '../styles/drawerStyle'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Content from './Content';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';

export default function NavMenu() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const handleDrawerOpen = () => setOpen(true);
  const handleDrawerClose = () => setOpen(false);

  return (
    <div className={classes.root}>
      <CssBaseline />
      
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon/>
          </IconButton>
          <img src={process.env.PUBLIC_URL + 'logo.png'}  className="logo" alt="Logo" draggable={false}/>
          <Typography variant="h6" noWrap> coinhub </Typography>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose} style={ open? null : {display:"none"} }>
           <ChevronLeftIcon />
          </IconButton>
        </div>

        <Divider />
        <List>
          {['Bitcoin', 'Ethereum', 'Calculator'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index === 0 
                ? <FontAwesomeIcon icon={['fab', 'btc']}  className="btcIcon"/> 
                : index === 1 
                ? <FontAwesomeIcon icon={['fab', 'ethereum']} className="ethIcon"/> 
                : <FontAwesomeIcon icon={['fa', 'calculator']} className="calculatorIcon"/>  }
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>

        <Divider />
        <List>
            <ListItem button key={'Settings'}>
              <ListItemIcon><FontAwesomeIcon icon={['fa', 'sliders-h']} className="settingsIcon"/>  </ListItemIcon>
              <ListItemText primary='Settings' />
            </ListItem>
        </List>

        <Divider />
        <List>
          <Link href="#" color='inherit'>
            <ListItem button key={'Github'}>
              <ListItemIcon><FontAwesomeIcon icon={['fab', 'github']} className="btcIcon"/>  </ListItemIcon>
              <ListItemText primary='Github page' />
            </ListItem>
          </Link>
        </List>
      </Drawer> 

      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Content/>
      </main>

    </div>
  );
}