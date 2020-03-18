import React from 'react';
import clsx from 'clsx';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Chart from './Chart';
import PriceInfo from './PriceInfo';

const Dashboard = props => {

    const fixedHeightPaper = clsx(props.classes.paper, props.classes.fixedHeight);

    return (
        <Container maxWidth="lg" className={props.classes.container}>
          <Grid container spacing={3}>
            {/* Chart */}
            <Grid item xs={12} md={8} lg={9}>
              <Paper className={fixedHeightPaper}>
                <Chart />
              </Paper>
            </Grid>
            {/* Recent Deposits */}
            <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedHeightPaper}>
                <PriceInfo />
              </Paper>
            </Grid>
            {/* Recent Orders */}
            <Grid item xs={12}>
              <Paper className={props.classes.paper}>
                {/* <Orders /> */}
              </Paper>
            </Grid>
          </Grid>
        </Container>
  );
}

export default Dashboard;