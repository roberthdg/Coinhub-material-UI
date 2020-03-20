import React, { useContext} from 'react';
import { settingsContext } from '../context/settingsContext'
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from '@material-ui/core/Link';

const DrawerMenu = props => {  

    const [settings, setSettings] = useContext(settingsContext);
    const textData = settings.languageData.drawer;
    const language = settings.language

    function setCurrentPage(page) {
        settings.currentPage=page;
        setSettings({...settings});
    }

    return(
        <Drawer
            variant="permanent"
            className={clsx(props.classes.drawer, {
            [props.classes.drawerOpen]: props.open,
            [props.classes.drawerClose]: !props.open,
            })}
            classes={{
            paper: clsx({
                [props.classes.drawerOpen]: props.open,
                [props.classes.drawerClose]: !props.open,
            }),
            }}
        >
            <div className={props.classes.toolbar}>
                <IconButton onClick={props.handleDrawerClose} style={ props.open? null : {display:"none"} }>
                    <ChevronLeftIcon />
                </IconButton>
            </div>

            <Divider />
            <List>
                {['Bitcoin', 'Ethereum', 'Monero'].map((text, index) => (
                    <ListItem button key={text} onClick={() => setCurrentPage(text)}>
                        <ListItemIcon key={text} style={ settings.currentPage===text? {color:'rgb(52,183,166)'} : null}>
                            {index === 0 
                            ? <FontAwesomeIcon icon={['fab', 'btc']} className="icon btc"/> 
                            : index === 1 
                            ? <FontAwesomeIcon icon={['fab', 'ethereum']} className="icon eth"/> 
                            : <FontAwesomeIcon icon={['fab', 'monero']} className="icon xmr"/>}
                        </ListItemIcon>
                        <ListItemText primary={text} style={ settings.currentPage===text? {color:'rgb(52,183,166)'} : null} />
                    </ListItem>
                ))}
            </List>

            <Divider />
            <List>
                <ListItem button key='Settings' onClick={() => setCurrentPage('Settings')}>
                    <ListItemIcon key='Settings' style={ settings.currentPage==='Settings'? {color:'rgb(52,183,166)'} : null}>
                        <FontAwesomeIcon icon={['fa', 'sliders-h']} className="icon settings" />  
                    </ListItemIcon>
                    <ListItemText primary={ textData.settings[language]} style={ settings.currentPage==='Settings'? {color:'rgb(52,183,166)'} : null} />
                </ListItem>
            </List>

            <Divider />
            <List>
                <Link href="https://github.com/roberthdg/Coinhub-material-UI" color='inherit'>
                    <ListItem button key='Github'>
                        <ListItemIcon key='Github'>
                            <FontAwesomeIcon icon={['fab', 'github']} className="icon github"/>  
                            </ListItemIcon>
                        <ListItemText primary={textData.github[language]} />
                    </ListItem>
                </Link>
            </List>
        </Drawer> 
    )
}

export default DrawerMenu;