import React, { useContext } from 'react';
import { settingsContext } from '../context/settingsContext'
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

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
        <Container maxWidth="lg" className={props.classes.container}>
            <Grid item xs={12} md={4} lg={3}>
                <FormControl component="fieldset">
                    <FormLabel component="legend">Currency</FormLabel>
                    <RadioGroup aria-label="Currency" name="Currency" value={"USD"} onChange={() => setTheme()}>
                        <FormControlLabel value="USD" control={<Radio style={ settings.currency==='USD'? {color:'rgb(52,183,166)'} : null } />} label="US Dollar" />
                        <FormControlLabel value="EUR" control={<Radio style={ settings.currency==='EUR'? {color:'rgb(52,183,166)'} : null } />} label="Euro" />
                    </RadioGroup>
                </FormControl>
            </Grid>
            <Grid item xs={12} md={4} lg={3}>
                <FormControl component="fieldset">
                    <FormLabel component="legend">Language</FormLabel>
                    <RadioGroup aria-label="gender" name="gender1" value={"ENG"} onChange={() => setTheme()}>
                        <FormControlLabel value="ENG" control={<Radio style={ settings.language==='ENG'? {color:'rgb(52,183,166)'} : null }/>} label="English" />
                        <FormControlLabel value="ESP" control={<Radio style={ settings.language==='ESP'? {color:'rgb(52,183,166)'} : null }/>} label="Español" />
                        <FormControlLabel value="POR" control={<Radio style={ settings.language==='POR'? {color:'rgb(52,183,166)'} : null }/>} label="Português" />
                    </RadioGroup>
                </FormControl>
            </Grid>
            <Grid item xs={12} md={4} lg={3}>
                <FormControl component="fieldset">
                    <FormLabel component="legend">Theme</FormLabel>
                    <RadioGroup aria-label="gender" name="gender1" value={settings.theme} onChange={() => setTheme()}>
                        <FormControlLabel value="Light" control={<Radio style={ settings.theme==='Light'? {color:'rgb(52,183,166)'} : null }/>} label="Light" />
                        <FormControlLabel value="Dark" control={<Radio style={ settings.theme==='Dark'? {color:'rgb(52,183,166)'} : null }/>} label="Dark" />
                    </RadioGroup>
                </FormControl>
            </Grid>
        </Container>
      </main>
    )
}

export default Settings