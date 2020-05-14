import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { Bar } from 'react-chartjs-2';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardContent,
  CardActions,
  Divider,
  Button
} from '@material-ui/core';

import CustomHeader from '../CustomHeader'

import { data, options } from './chart';

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
  },
}));

const MOTM = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      {/* <CardHeader
        title="Top-20 most M.O.T.M award winners"
        style={{'textAlign': 'center'}}
        className={classes.avatar}
      /> */}
      <CustomHeader/>
      <Divider />
      <CardContent>
        <div className={classes.chartContainer}>
          <Bar
            data={data}
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
        </Button>
      </CardActions>
    </Card>
  );
};

MOTM.propTypes = {
  className: PropTypes.string
};

export default MOTM;
