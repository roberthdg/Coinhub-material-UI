import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function PriceInfo() {
  const classes = useStyles();
  return (
    <>
      <Typography component="h2" variant="h6" style={{color:'rgb(52,183,166)'}} gutterBottom> Recent price </Typography>
      <Typography component="p" variant="h4">
        $3,024.00
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        on 15 March, 2019
      </Typography>
    </>
  );
}