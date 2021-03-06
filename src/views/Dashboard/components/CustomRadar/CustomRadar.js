import React from 'react';
import { Radar } from 'react-chartjs-2';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/styles';
import {
  Card,
  CardContent,
  Divider,
} from '@material-ui/core';

import CustomHeader from '../CustomHeader'

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%'
  },
  chartContainer: {
    position: 'relative',
    height: '300px'
  },
  stats: {
    marginTop: theme.spacing(2),
    display: 'flex',
    justifyContent: 'center'
  },
  device: {
    textAlign: 'center',
    padding: theme.spacing(1)
  },
  deviceIcon: {
    color: theme.palette.icon
  }
}));

const CustomRadar = props => {
  const { className, ...rest } = props;

  const classes = useStyles();
  const theme = useTheme();

  const data = {
    labels: props.data.labels,
    datasets: [
      {
        label:'Count',
        data:props.data.data,
        backgroundColor: 'violet',
        borderColor: 'rgba(179,181,198,1)',
        pointBackgroundColor: theme.palette.primary.dark,
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(179,181,198,1)'
      }
    ],
    
  };

  const options = {
    legend: {
      title:'Display',
      display: true   
    },
    responsive: true,
    maintainAspectRatio: false,
    animation: false,
    cutoutPercentage: 80,
    layout: { padding: 0 },
    tooltips: {
      enabled: true,
      mode: 'index',
      intersect: false,
      borderWidth: 1,
      borderColor: theme.palette.divider,
      backgroundColor: theme.palette.white,
      titleFontColor: theme.palette.text.primary,
      bodyFontColor: theme.palette.text.secondary,
      footerFontColor: theme.palette.text.secondary
    },
    scale: {
      reverse: false,
      gridLines: {
        color: [
          'black',
          'red',
          'orange',
          'yellow',
          'green',
          'blue',
          'indigo',
          'violet'
        ]
      },
      ticks: {
        beginAtZero: true
      }
    }
  };

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CustomHeader header = {props.data.header}/>
      <Divider />
      <CardContent>
        <div className={classes.chartContainer}>
          <Radar
            data={data}
            options={options}
          />
        </div>
      </CardContent>
    </Card>
  );
};

CustomRadar.propTypes = {
  className: PropTypes.string
};

export default CustomRadar;
