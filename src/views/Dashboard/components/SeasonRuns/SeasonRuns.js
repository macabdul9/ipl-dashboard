import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { Line } from 'react-chartjs-2';

import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardContent,
  Divider,
} from '@material-ui/core';


import CustomHeader from '../CustomHeader';

import { Data, options } from './chart';

const useStyles = makeStyles((theme) => ({
  root: {},
  chartContainer: {
    height: 400,
    position: 'relative'
  },
  actions: {
    justifyContent: 'flex-end'
  },
  avatar: {
    backgroundColor: theme.palette.info.light,
    // color: theme.palette.white,
    // height: 56,
    // width: 56
  },
}));


const SeasonRuns = props => {
  const { className, ...rest } = props;

  const classes = useStyles();
//   console.log("SeasonRuns.js", Object.keys(obj));
  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CustomHeader header={props.data.header}/>
      <Divider />
      <CardContent>
        <div className={classes.chartContainer}>
          <Line
            data={Data}
            options={options}
          />
        </div>
      </CardContent>
      <Divider />
    </Card>
  );
};

SeasonRuns.propTypes = {
  className: PropTypes.string
};

export default SeasonRuns;
