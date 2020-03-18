import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
import Typography from '@material-ui/core/Typography';

// Generate Sales Data
function createData(time, amount) {
  return { time, amount };
}


//map fetch data
const data = [
  createData('', 5),
  createData('', 40),
  createData('', 2),
  createData('', 3),
  createData('', 4),
  createData('', 6),
  createData('', 9),
];

export default function Chart() {
  const theme = useTheme();

  return (
    <>
      <Typography component="h2" variant="h6" style={{color:'rgb(52,183,166)'}} gutterBottom> This week </Typography>
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <XAxis dataKey="time" stroke={theme.palette.text.secondary} />
          <YAxis stroke={theme.palette.text.secondary}>
            <Label
              angle={270}
              position="left"
              style={{ textAnchor: 'middle', fill: theme.palette.text.primary }}
            >
              Price ($)
            </Label>
          </YAxis>
          <Line type="monotone" dataKey="amount"  dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
}