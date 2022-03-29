import React, { useContext, useEffect, useState } from 'react';
import { settingsContext } from '../context/settingsContext'
import clsx from 'clsx';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Chart from './Chart';
import PriceInfo from './PriceInfo';
import Converter from './Converter';
import { Alert } from '@material-ui/lab';

const Dashboard = props => {
  const [settings] = useContext(settingsContext)
  const [isLoaded, setIsLoaded] = useState(false)
  const [displayAlert, setDisplayAlert] = useState(false)
  const [coinData, setCoinData] = useState([])
  const [exchangesData, setExchangesData] = useState([])
  const fixedHeightPaper = clsx(props.classes.paper, props.classes.fixedHeight);
  const failedConnectionAlert =  <Alert severity="warning" variant="outlined">{settings.languageData.alert[settings.language]}</Alert>
  
  useEffect(() => {
    //Fetching crytocurrency prices data
    fetch(`https://min-api.cryptocompare.com/data/v2/histoday?fsym=${props.coin}&tsym=${settings.currency}&limit=7&api_key=${process.env.REACT_APP_API_KEY}`)
    .then(res => res.json())
    .then(data => {
      setCoinData(data.Data.Data); 
      setIsLoaded(true);
    })
    .catch(error => {setIsLoaded(false); setDisplayAlert(true)})
    
    //Fetching currencies exchange rates
    const url = `https://api.currencyapi.com/v3/latest?apikey=${process.env.REACT_APP_EXCHANGES_API_KEY}`
    fetch(url)
    .then(res => res.json())
    .then(data => {setExchangesData(data.data)})
    .catch(error => setDisplayAlert(true))  

  }, [props.coin, settings.currency])

  function renderDashboard() {
    return(
      <Grid container spacing={3}>
        <Grid item xs={12} md={8} lg={9}>
          <Paper className={fixedHeightPaper}>
            <Chart data={coinData}/>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4} lg={3}>
          <Paper className={fixedHeightPaper}>
            <PriceInfo currentPrice={coinData[coinData.length-1]} />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={props.classes.paper}>
            <Converter currentPrice={coinData[coinData.length-1].close} exchangesData={exchangesData}/>
          </Paper>
        </Grid>
      </Grid>
    )
  }

  return (
    <main className={props.classes.content}>
      <div className={props.classes.toolbar} />
      {displayAlert? failedConnectionAlert : isLoaded 
      ? renderDashboard() 
      : <CircularProgress style={{color:'rgb(52,183,166)', marginLeft:'20vw', marginTop: '10vh'}} size='80px'/>}
    </main>
  );
}

export default Dashboard;