import React from 'react';
import { Bar } from 'react-chartjs-2';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/styles';
import {
  Card,
  CardHeader,
  CardContent,
  Divider,
} from '@material-ui/core';

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

const Toss = props => {
  const { className, ...rest } = props;

  const classes = useStyles();
  const theme = useTheme();

  const data = {
    labels:props.label,
    datasets: [
      {
        // label: 'Top-20 most M.O.T.M Winners ',
        label:props.score,
        backgroundColor: [
        "#F7464A", 
        "#46BFBD", 
        "#FDB45C", 
        "#949FB1", 
        "#4D5360", 
        'black',
        'orange',
        'yellow',
        'green',
        'blue',
        'indigo',
        'violet'],
        data: props.data
      },
      // {
      //   label: 'Last year',
      //   backgroundColor: palette.neutral,
      //   data: [11, 20, 12, 29, 30, 25, 13]
      // }
    ]
  };
  
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    animation: false,
    legend: { display: false },
    // cornerRadius: 20,
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
    layout: { padding: 0 },
    scales: {
      xAxes: [
        {
        //   text:'Runs',
          barThickness: 16,
          maxBarThickness: 20,
          barPercentage: 0.5,
          categoryPercentage: 0.5,
          ticks: {
            fontColor: theme.palette.text.secondary
          },
          gridLines: {
            display: false,
            drawBorder: false
          }
        }
      ],
      yAxes: [
        {
        //   display: true,
          ticks: {
            fontColor: theme.palette.text.secondary,
            beginAtZero: true,
            min: 0
          },
          scaleLabel: {
            display: true,
            labelString: props.labelString
          },
          gridLines: {
            borderDash: [2],
            borderDashOffset: [2],
            color: theme.palette.divider,
            drawBorder: false,
            zeroLineBorderDash: [2],
            zeroLineBorderDashOffset: [2],
            // zeroLineColor: theme.CardContentpalette.divider
          }
        }
      ]
    }
    }


  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardHeader
        title={props.title}
        style={{'textAlign': 'center'}}
      />
      <Divider />
      <CardContent>
        <div className={classes.chartContainer}>
          <Bar
            data={data}
            options={options}
          />
        </div>
      </CardContent>
    </Card>
  );
};

Toss.propTypes = {
  className: PropTypes.string
};

export default Toss;