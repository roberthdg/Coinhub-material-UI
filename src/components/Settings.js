import React, { useContext } from 'react';
import { settingsContext } from '../context/settingsContext'
import Typography from '@material-ui/core/Typography';

const Settings = props => {

    const [settings, setSettings] = useContext(settingsContext)

    function setTheme() {
        if(settings.theme==='Light') settings.theme='Dark';
        else settings.theme='Light';
        setSettings({...settings})
    }

    function setCurrency() {
        if(settings.theme==='Light') settings.theme='Dark';
        else settings.theme='Light';
        setSettings({...settings})
    }

    function setLanguage() {
        if(settings.theme==='Light') settings.theme='Dark';
        else settings.theme='Light';
        setSettings({...settings})
    }

    return(
      <main className={props.classes.content}>
        <div className={props.classes.toolbar} />
        <Typography paragraph>
            <button onClick={() => setTheme()}> {settings.theme} theme </button> <br />
            <button onClick={() => setCurrency()}> {settings.currency} </button>
            <button onClick={() => setLanguage()}> {settings.language} </button>
        </Typography>
      </main>
    )
}

export default Settings