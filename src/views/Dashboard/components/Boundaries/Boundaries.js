import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardContent,
  Grid,
  Typography,
  Avatar,
} from '@material-ui/core';

import AccessibilityNewIcon from '@material-ui/icons/AccessibilityNew';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    // backgroundColor: theme.palette.primary.main,
    // color: theme.palette.primary.contrastText
  },
  content: {
    alignItems: 'center',
    display: 'flex'
  },
  title: {
    fontWeight: 700
  },
  avatar: {
    backgroundColor: theme.palette.warning.light,
    height: 56,
    width: 56
  },
  icon: {
    height: 32,
    width: 32
  },
}));

const Boundaries = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardContent>
        <Grid
          container
          justify="space-between"
        >
          <Grid item>
            <Typography className={classes.title}
              color="inherit"
              gutterBottom
              variant="body2"
            >
              <h3>BOUNDARIES</h3>
              <Typography variant="h4" color="inherit">21226 </Typography>
            </Typography>
            <Typography variant="body2" color="inherit"><strong>4s : </strong> 15413 </Typography>
            <Typography variant="body2" color="inherit"><strong>6s : </strong>5813</Typography>
          </Grid>
          <Grid item>
            <Avatar className={classes.avatar}>
              <AccessibilityNewIcon className={classes.icon} />
            </Avatar>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

Boundaries.propTypes = {
  className: PropTypes.string
};

export default Boundaries;
