import React, { useContext, useState } from 'react';
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
    const currencyList = ['USD','EUR','ARS','BRL','COP','CLP','UYU']

    //set current price to base USD (API exchanges limitations)
    let currentPrice = props.currentPrice/props.exchangesData[settings.currency]?.value

    return currencyList.map((row,i) => (
      <TableRow key={i}>
        <TableCell>{props.exchangesData[row]?.code}</TableCell>
        <TableCell align="right">{(props.exchangesData[row]?.value*currentPrice*amount).toFixed(2)}</TableCell>
      </TableRow>
    ))
  }

  return (    
    <>
      <Typography component="h2" variant="h6" style={{color:'rgb(52,183,166)'}} gutterBottom> 
        {textData.label[language]}
      </Typography>
      <div style={{marginBottom:'15px', marginTop: '15px', marginLeft:'15px'}}>
        <TextField
          id="filled-number"
          value={amount}
          label={settings.currentPage}
          type="number"  
          variant="outlined"
          onChange={ e => (setAmount(e.target.value))}
        />
      </div>
      {props.exchangesData 
      ? <Table size="small" style={{overflowX: 'scroll'}}>
          <TableHead>
            <TableRow>
              <TableCell>{textData.currency[language]}</TableCell>
              <TableCell align="right">{textData.total[language]}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody style={{textAlign:'center'}}>
            {renderRows(amount)}
          </TableBody>
        </Table>
      : <CircularProgress style={{color:'rgb(52,183,166)', marginLeft:'20vw', marginTop: '10vh', marginBottom:'50px'}} size='80px'/> }
    </>
  )
}

export default Converter