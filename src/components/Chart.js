import React, { useContext } from 'react';
import { settingsContext } from '../context/settingsContext'
import { useTheme } from '@material-ui/core/styles';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import Typography from '@material-ui/core/Typography';


export default function Chart(props) {
  const [settings] = useContext(settingsContext)
  let title = settings.languageData.chart.label[settings.language]
  const theme = useTheme();
  const chartData = props.data.map(price => ({time: '', amount: price.close}))

  return (
    <>
      <Typography component="h2" variant="h6" style={{color:'rgb(52,183,166)'}} gutterBottom> {title} </Typography>
      <ResponsiveContainer>
        <LineChart
          data={chartData}
          margin={{top: 16, right: 16, bottom: 0, left: 0}}
        >
          <XAxis dataKey="time" stroke={theme.palette.text.secondary} />
          <YAxis stroke={theme.palette.text.secondary} />
          <Line type="monotone" dataKey="amount"  dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
}