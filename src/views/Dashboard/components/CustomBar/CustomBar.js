import React from 'react';
import { Bar } from 'react-chartjs-2';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import palette from 'theme/palette';
import {
  Card,
  CardContent,
  Divider,
} from '@material-ui/core';

import CustomHeader from '../CustomHeader';

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

const CustomBar = props => {
  const { className, ...rest } = props;

  const classes = useStyles();
  // const theme = useTheme();

  const data = {
    labels:props.data.labels,
    datasets: props.data.stacked ? props.data.datasets : [
      {
        data: props.data.data,
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
          'violet',
          '#8C735C',
          '#B68569',
          '#67B2E5',
          'skyblue',
          '#B9A3BC',
          '#29AA9E',
          '#CCECF1',
          '#73C7C7',
      ]
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
      borderColor: palette.divider,
      backgroundColor: palette.white,
      titleFontColor: palette.text.primary,
      bodyFontColor: palette.text.secondary,
      footerFontColor: palette.text.secondary
    },
    layout: { padding: 0 },
    scales: {
      xAxes: [
        {
          stacked:props.data.stacked,
          barThickness: 16,
          maxBarThickness: 20,
          barPercentage: 0.5,
          categoryPercentage: 0.5,
          ticks: {
            fontColor: palette.text.secondary
          },
          gridLines: {
            display: false,
            drawBorder: false
          }
        }
      ],
      yAxes: [
        {
          stacked:props.data.stacked,
          ticks: {
            fontColor: palette.text.secondary,
            beginAtZero: true,
            min: 0
          },
          gridLines: {
            borderDash: [2],
            borderDashOffset: [2],
            color: palette.divider,
            drawBorder: false,
            zeroLineBorderDash: [2],
            zeroLineBorderDashOffset: [2],
            zeroLineColor: palette.divider
          }
        }
      ]
    }
    }

  // console.log("TopScore.js", props.data.header);
  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      {/* <CardHeader
        title={props.title}
        style={{'textAlign': 'center'}}
      /> */}
      <CustomHeader header={props.data.header}/>
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

CustomBar.propTypes = {
  className: PropTypes.string
};

export default CustomBar;