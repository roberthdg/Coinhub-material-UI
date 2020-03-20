import React, { useContext } from 'react';
import { settingsContext } from '../context/settingsContext'
import Grid from '@material-ui/core/Grid';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';

const Settings = props => {
    const [settings, setSettings] = useContext(settingsContext)
    const language = settings.language;
    const textData = settings.languageData.settings;

    function changeSettings(event, type) {
        settings[type]=event.target.value;
        setSettings({...settings})
    }

    return(
      <main className={props.classes.content}>
        <div className={props.classes.toolbar} />
        <Grid container spacing={3}>
            <Grid item xs={12} md={4} lg={3}>
                <Paper className={props.classes.paper}>
                    <Typography>{textData.currency.label[language]}</Typography><br />
                    <FormControl component="fieldset">
                        <RadioGroup aria-label={textData.currency.label[language]} name="currency" value={settings.currency} onChange={(e) => changeSettings(e, 'currency')}>
                            <FormControlLabel value="USD" control={<Radio style={ settings.currency==='USD'? {color:'rgb(52,183,166)'} : null } />} label={textData.currency.options.dollar[language]} />
                            <FormControlLabel value="EUR" control={<Radio style={ settings.currency==='EUR'? {color:'rgb(52,183,166)'} : null } />} label="Euro" />
                        </RadioGroup>
                    </FormControl>
                </Paper>
            </Grid>
            <Grid item xs={12} md={4} lg={3}>
                <Paper className={props.classes.paper}>
                    <Typography>{textData.language.label[language]}</Typography><br />
                    <FormControl component="fieldset">
                        <RadioGroup aria-label="Language selector" name="language" value={settings.language} onChange={(e) => changeSettings(e, 'language')}>
                            <FormControlLabel value="ENG" control={<Radio style={ settings.language==='ENG'? {color:'rgb(52,183,166)'} : null }/>} label="English" />
                            <FormControlLabel value="ESP" control={<Radio style={ settings.language==='ESP'? {color:'rgb(52,183,166)'} : null }/>} label="Español" />
                            <FormControlLabel value="POR" control={<Radio style={ settings.language==='POR'? {color:'rgb(52,183,166)'} : null }/>} label="Português" />
                        </RadioGroup>
                    </FormControl>
                </Paper>
            </Grid>
            <Grid item xs={12} md={4} lg={3}>
                <Paper className={props.classes.paper}>
                <Typography>{textData.theme.label[language]}</Typography><br />
                    <FormControl component="fieldset">
                        <RadioGroup aria-label="Theme selector" name="theme" value={settings.theme} onChange={(e) => changeSettings(e, 'theme')}>
                            <FormControlLabel value="Light" control={<Radio style={ settings.theme==='Light'? {color:'rgb(52,183,166)'} : null }/>} label={textData.theme.options.light[language]} />
                            <FormControlLabel value="Dark" control={<Radio style={ settings.theme==='Dark'? {color:'rgb(52,183,166)'} : null }/>} label={textData.theme.options.dark[language]} />
                        </RadioGroup>
                    </FormControl>
                </Paper>
            </Grid>
        </Grid>
      </main>
    )
}

export default Settings