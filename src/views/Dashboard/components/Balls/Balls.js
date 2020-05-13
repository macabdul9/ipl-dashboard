import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Card, CardContent, Grid, Typography, Avatar } from '@material-ui/core';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import SportsHandballIcon from '@material-ui/icons/SportsHandball';


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
    backgroundColor: theme.palette.info.light,
    color: theme.palette.white,
    height: 56,
    width: 56
  },
  icon: {
    height: 32,
    width: 32
  }
}));

const Balls = props => {
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
            <Typography
              className={classes.title}
              color="inherit"
              gutterBottom
              variant="body2"
            >
              TOTAL BALL DELIVERED
            </Typography>
            <Typography color="inherit" variant="h4" >
              136590
            </Typography>
          </Grid>
          <Grid item>
            <Avatar className={classes.avatar}>
              <SportsHandballIcon className={classes.icon} />
            </Avatar>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

Balls.propTypes = {
  className: PropTypes.string
};

export default Balls;
