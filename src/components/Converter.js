import React, { useContext, useEffect, useState } from 'react';
import { settingsContext } from '../context/settingsContext'
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const Converter = (props) => {

  const [data, setData] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)
  const [settings] = useContext(settingsContext)
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
    <Typography component="h2" variant="h6" style={{color:'rgb(52,183,166)'}} gutterBottom> Convert to your local currency </Typography>
    <Table size="small">
      <TableHead>
        <TableRow>
          <TableCell>Currency</TableCell>
          <TableCell align="right">Total amount</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {isLoaded? renderRows() : null }
      </TableBody>
    </Table>
  </>
  )
  
}

export default Converter