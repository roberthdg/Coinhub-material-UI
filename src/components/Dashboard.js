import React, { useContext, useEffect, useState } from 'react';
import { settingsContext } from '../context/settingsContext'
import clsx from 'clsx';
import CircularProgress from '@material-ui/core/CircularProgress';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Chart from './Chart';
import PriceInfo from './PriceInfo';
import Converter from './Converter';

const Dashboard = props => {
  const [settings] = useContext(settingsContext)
  const fixedHeightPaper = clsx(props.classes.paper, props.classes.fixedHeight);
  const [isLoaded, setIsLoaded] = useState(false)
  const [data, setData] = useState([])
  
  useEffect(() => {
    fetch(`https://min-api.cryptocompare.com/data/v2/histoday?fsym=${props.coin}&tsym=${settings.currency}&limit=10&api_key=${process.env.REACT_APP_API_KEY}`)
      .then(res => res.json())
      .then(data => {
        setData(data.Data.Data); 
        setIsLoaded(true);
      })
      .catch(error => setIsLoaded(false))  
  }, [props.coin, settings.currency, setIsLoaded])

  function renderDashboard() {
    return(
      <Container maxWidth="lg" className={props.classes.container}>
        <Grid container spacing={3}>
      
          <Grid item xs={12} md={8} lg={9}>
            <Paper className={fixedHeightPaper}>
              <Chart data={data}/>
            </Paper>
          </Grid>
        
          <Grid item xs={12} md={4} lg={3}>
            <Paper className={fixedHeightPaper}>
              <PriceInfo currentPrice={data[data.length-1].close} />
            </Paper>
          </Grid>

          <Grid item xs={12}>
            <Paper className={props.classes.paper}>
              <Converter currentPrice={data[data.length-1].close} />
            </Paper>
          </Grid>
          
        </Grid>
      </Container>
    )
  }

  return (
    <main className={props.classes.content}>
      <div className={props.classes.toolbar} />
      {isLoaded? renderDashboard() : <CircularProgress style={{color:'rgb(52,183,166)', marginLeft:'20vw', marginTop: '10vh'}} size='80px'/>}
    </main>
  );
}

export default Dashboard;