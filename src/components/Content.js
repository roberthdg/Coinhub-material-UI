import React, { useContext, useEffect, useState, memo } from 'react';
import { settingsContext } from '../context/settingsContext'
import CircularProgress from '@material-ui/core/CircularProgress';
import Dashboard from './Dashboard';

const Content = (props) => {

  const [settings] = useContext(settingsContext);
  const [isLoaded, setIsLoaded] = useState(false)
  const [data, setData] = useState()

  // useEffect(() => {
  //   fetch(`https://min-api.cryptocompare.com/data/v2/histoday?fsym=${props.coin}&tsym=${settings.currency}&limit=10&api_key=${process.env.REACT_APP_API_KEY}`)
  //     .then(res => res.json())
  //     .then(data => {
  //       setData(data.Data.Data); 
  //       setIsLoaded(true);
  //     })
  //     .catch(error => setIsLoaded(false))  
  // }, [props.coin, settings.currency, setIsLoaded])

  useEffect(() => {
    setData([9100, 8800, 8760, 6000, 5400, 4893, 5200])
    setIsLoaded(true)
  }, [])

  return(
    <main className={props.classes.content}>
      <div className={props.classes.toolbar} />
      {isLoaded? <Dashboard classes={props.classes}/> : <CircularProgress style={{color:'rgb(52,183,166)', marginLeft:'20vw', marginTop: '10vh'}} size='80px'/>}
    </main>
  )
}

export default Content