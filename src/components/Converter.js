import React, { useContext, useEffect, useState } from 'react';
import { settingsContext } from '../context/settingsContext'
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import CircularProgress from '@material-ui/core/CircularProgress';

const Converter = (props) => {

  const [data, setData] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)
  const [settings] = useContext(settingsContext)
  const language = settings.language
  const textData = settings.languageData.converter

  //Using a proxy to bypass the API's CORS policy restriction
  const proxyurl = "https://cors-anywhere.herokuapp.com/";
  const url = `https://api.cambio.today/v1/full/${settings.currency}/json?key=${process.env.REACT_APP_EXCHANGES_API_KEY}`

  useEffect(() => {
    fetch(proxyurl+url)
      .then(res => res.json())
      .then(data => {
        setData(data.result.conversion); 
        setIsLoaded(true);
      })
      .catch(error => {setIsLoaded(false)})  
  }, [settings.currency, setIsLoaded, url])

  function renderRows() {
    //filter relevant currencies from fetched data
    const currencyList = ['ARS', 'BRL', 'COP', 'CLP', 'UYU']
    let currencies = data.filter(item => currencyList.includes(item.to))

    return currencies.map((row,i) => (
      <TableRow key={i}>
        <TableCell>{row.to}</TableCell>
        <TableCell align="right">{(row.rate*props.currentPrice).toFixed(2)}</TableCell>
      </TableRow>
    ))
  }

  return (    
  <>
    <Typography component="h2" variant="h6" style={{color:'rgb(52,183,166)'}} gutterBottom> {textData.label[language]}</Typography>
    <Table size="small">
      <TableHead>
        <TableRow>
          <TableCell>{textData.currency[language]}</TableCell>
          <TableCell align="right">{textData.total[language]}</TableCell>
        </TableRow>
      </TableHead>
      <TableBody style={{textAlign:'center'}}>
        {isLoaded? renderRows() : <CircularProgress style={{color:'rgb(52,183,166)', marginLeft:'20vw', marginTop: '10vh', marginBottom:'50px'}} size='80px'/> }
      </TableBody>
    </Table>
  </>
  )
  
}

export default Converter