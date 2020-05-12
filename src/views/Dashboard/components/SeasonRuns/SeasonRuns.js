import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { Line } from 'react-chartjs-2';

import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Divider,
  Button
} from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

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
      <CardHeader
        title="Most wins by the teams"
        style={{'textAlign': 'center'}}
        className={classes.avatar}
      />
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
      <CardActions className={classes.actions}>
        <Button
          color="primary"
          size="small"
          variant="text"
        >
           {/* <ArrowRightIcon /> */}
        </Button>
      </CardActions>
    </Card>
  );
};

SeasonRuns.propTypes = {
  className: PropTypes.string
};

export default SeasonRuns;
