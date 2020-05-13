import React, { useState } from 'react';
import clsx from 'clsx';
import PerfectScrollbar from 'react-perfect-scrollbar';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardHeader,
  CardContent,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@material-ui/core';

import mockData from './data';

const useStyles = makeStyles(theme => ({
  root: {},
  content: {
    padding: 0
  },
  avatar: {
    backgroundColor: theme.palette.info.light,
  },
  inner: {
    minWidth: 800
  },
  statusContainer: {
    display: 'flex',
    alignItems: 'center'
  },
  status: {
    marginRight: theme.spacing(1)
  },
  actions: {
    justifyContent: 'flex-end'
  }
}));

const Awards = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  const [orders] = useState(mockData);

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardHeader
        title="IPL Summary"
        style={{'textAlign': 'center'}}
        className={classes.avatar}
      />
      <Divider />
      <CardContent className={classes.content}>
        <PerfectScrollbar>
          <div className={classes.inner}>
            <Table >
              <TableHead>
                <TableRow >
                  <TableCell>Season</TableCell>
                  <TableCell>Final_Venue</TableCell>
                  <TableCell>Final_Fixture</TableCell>
                  <TableCell>Champion</TableCell>
                  <TableCell>Orange_Cap</TableCell>
                  <TableCell>Purple_Cap</TableCell>
                  <TableCell>Man_of_the_Series</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {orders.map(order => (
                  <TableRow
                    hover
                    key={order.id}
                  >
                    <TableCell>{order.season}</TableCell>
                    <TableCell>{order.venue}</TableCell>
                    <TableCell>{order.fixture}</TableCell>
                    <TableCell>{order.champion}</TableCell>
                    <TableCell>{order.Orange_Cap}</TableCell>
                    <TableCell>{order.Purple_Cap}</TableCell>
                    <TableCell>{order.Man_of_the_Series}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </PerfectScrollbar>
      </CardContent>
      <Divider />
    </Card>
  );
};

Awards.propTypes = {
  className: PropTypes.string
};

export default Awards;
