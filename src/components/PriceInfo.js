import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

const PriceInfo = props => {
  const classes = useStyles();

  return (
    <>
      <Typography component="h2" variant="h6" style={{color:'rgb(52,183,166)'}} gutterBottom> Current price </Typography>
      <Typography component="p" variant="h4">
        ${props.currentPrice}
      </Typography> <br/> <br/>
      <Typography color="textSecondary" className={classes.depositContext}>
        24-hour high: <strong>$7881{props.currentPrice.high}</strong>
      </Typography> 
      <Typography color="textSecondary" className={classes.depositContext}>
        24-hour low: <strong>$5453{props.currentPrice.low}</strong>
      </Typography>
    </>
  );
}

export default PriceInfo