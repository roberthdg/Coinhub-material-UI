import React from 'react';
import clsx from 'clsx';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

export default function Appbar(props) {
    return(
      <AppBar
      position="fixed"
      className={clsx(props.classes.appBar, {
        [props.classes.appBarShift]: props.open,
      })}>
        <Toolbar>
          <IconButton
            aria-label="open drawer"
            onClick={props.handleDrawerOpen}
            edge="start"
            className={clsx(props.classes.menuButton, {
              [props.classes.hide]: props.open,
            })}
          >
            <MenuIcon/>
          </IconButton>
          <img src={process.env.PUBLIC_URL + 'logo.png'}  className="logo" alt="Logo" draggable={false}/>
          <Typography variant="h6" noWrap> coinhub </Typography>
        </Toolbar>
      </AppBar>
    )
}