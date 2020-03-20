import React, { useContext } from 'react';
import { settingsContext } from '../context/settingsContext'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

const PriceInfo = props => {
  const classes = useStyles();
  const [settings] = useContext(settingsContext)
  const language = settings.language
  const textData = settings.languageData.priceInfo

  return (
    <>
      <Typography component="h2" variant="h6" style={{color:'rgb(52,183,166)'}} gutterBottom> 
        {textData.label[language]} 
      </Typography>
      <Typography component="p" variant="h4">
        {settings.currency==='USD' ? '$' : '€' }{props.currentPrice.close}
      </Typography> <br/> <br/>
      <Typography color="textSecondary" className={classes.depositContext}>
        {textData.high[language]} <strong> {settings.currency==='USD' ? '$' : '€' }{props.currentPrice.high}</strong>
      </Typography> 
      <Typography color="textSecondary" className={classes.depositContext}>
        {textData.low[language]} <strong>{settings.currency==='USD' ? '$' : '€' }{props.currentPrice.low}</strong>
      </Typography>
    </>
  )
}

export default PriceInfo