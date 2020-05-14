import React from 'react';
import { Pie } from 'react-chartjs-2';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/styles';
// import Card as card from "react-bootstrap";

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

const CustomPie = props => {
  const { className, ...rest } = props;

  const classes = useStyles();
  const theme = useTheme();

  const data = {
    datasets: [
      {
        data: props.data.data,
        // labels:props.data.labels,
        backgroundColor: [
          'red',
          'green',
          'orange',
          'yellow',
          'grey',
          'purple',
          'skyblue',
          'blue',
          'black',
          'purple',
          'maroon',
          'teal',
          'olive'

        ],
        borderColor: theme.palette.white,
        hoverBorderColor: theme.palette.white
      }
    ],
    labels: props.data.labels
  };

  const options = {
    legend: {
      display: true
    },
    responsive: true,
    maintainAspectRatio: false,
    animation: false,
    cutoutPercentage: 0,
    layout: { padding: 0 },
  };
  // console.log("CustomPie.js", props.data.data);
  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CustomHeader header={props.data.header}/>

      <Divider />
      <CardContent>
        <div className={classes.chartContainer}>
          <Pie
            data={data}
            options={options}
          />
        </div>
      </CardContent>
    </Card>
  );
};

CustomPie.propTypes = {
  className: PropTypes.string
};

export default CustomPie;