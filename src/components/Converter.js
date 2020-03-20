import React, { useContext, useEffect, useState } from 'react';
import { settingsContext } from '../context/settingsContext'
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TextField from '@material-ui/core/TextField';
import CircularProgress from '@material-ui/core/CircularProgress';

const Converter = (props) => {

  const [amount, setAmount] = useState(1)
  const [settings] = useContext(settingsContext)
  const language = settings.language
  const textData = settings.languageData.converter

  function renderRows(amount) {
    //filter relevant currencies from fetched data
    const currencyList = ['ARS', 'BRL', 'COP', 'CLP', 'UYU']
    let currencies = props.exchangesData.filter(item => currencyList.includes(item.to))

    return currencies.map((row,i) => (
      <TableRow key={i}>
        <TableCell>{row.to}</TableCell>
        <TableCell align="right">{(row.rate*props.currentPrice*amount).toFixed(2)}</TableCell>
      </TableRow>
    ))
  }

  return (    
  <>
    <Typography component="h2" variant="h6" style={{color:'rgb(52,183,166)'}} gutterBottom> 
      {textData.label[language]}
    </Typography>
    <TextField
          id="filled-number"
          value={amount}
          label={settings.currentPage}
          type="number"
          variant="outlined"
          onChange={ e => (setAmount(e.target.value))}
        />
    <Table size="small" style={{overflowX: 'scroll'}}>
      <TableHead>
        <TableRow>
          <TableCell>{textData.currency[language]}</TableCell>
          <TableCell align="right">{textData.total[language]}</TableCell>
        </TableRow>
      </TableHead>
      <TableBody style={{textAlign:'center'}}>
        {props.exchangesData.length>0? renderRows(amount) : <CircularProgress style={{color:'rgb(52,183,166)', marginLeft:'20vw', marginTop: '10vh', marginBottom:'50px'}} size='80px'/> }
      </TableBody>
    </Table>
  </>
  )
  
}

export default Converter