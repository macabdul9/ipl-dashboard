import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
import {
  Matches,
  Runs,
  Boundaries,
  Balls,
  CustomRadar,
  CustomPie,
  CustomBar,
  SeasonRuns,
  Summary
} from './components';

import data from './data.json';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  }
}));

const Dashboard = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={4}
      >
        <Grid
          item
          lg={3}
          sm={6}
          xl={3}
          xs={12}
        >
          <Matches />
        </Grid>
        <Grid
          item
          lg={3}
          sm={6}
          xl={3}
          xs={12}
        >
          <Runs />
        </Grid>
        <Grid
          item
          lg={3}
          sm={6}
          xl={3}
          xs={12}
        >
          <Balls />
        </Grid>
        <Grid
          item
          lg={3}
          sm={6}
          xl={3}
          xs={12}
        >
          <Boundaries />
        </Grid>

        <Grid
          item
          // zeroMinWidth
          lg={4}
          md={6}
          xl={4}
          xs={12}
        >
          
          <CustomPie data={data['toss']}/>
        </Grid>
        <Grid
          item
          lg={4}
          md={6}
          xl={4}
          xs={12}
        >
          <CustomPie data={data['champion']}/>
        </Grid>
        <Grid
          item
          lg={4}
          md={6}
          xl={4}
          xs={12}
        >
      
          <CustomPie data={data['runner_up']}/>
        </Grid>

        <Grid
          item
          // zeroMinWidth
          lg={8}
          md={12}
          xl={9}
          xs={12}
        >
          <CustomBar data={data["WDRatio"]}/>
        </Grid>
        <Grid
          item
          lg={4}
          md={6}
          xl={3}
          xs={12}
        >
          <CustomRadar data={data["score"]}/>
        </Grid>

        <Grid
          item
          // zeroMinWidth
          lg={8}
          md={12}
          xl={9}
          xs={12}
        >
          <CustomBar data={data["MOTM"]} />
        </Grid>
        <Grid
          item
          lg={4}
          md={6}
          xl={3}
          xs={12}
        >
          <CustomRadar data={data["dismissal"]}/>
        </Grid>


        <Grid
          item
          // zeroMinWidth
          lg={8}
          md={12}
          xl={6}
          xs={12}
        >
          <CustomBar data={data["top_batsman"]}/>
        </Grid>

        <Grid
          item
          // zeroMinWidth
          lg={8}
          md={12}
          xl={6}
          xs={12}
        >
          <CustomBar data={data["top_bowler"]}/>
        </Grid>
        
        <Grid
          item
          lg={12}
          md={12}
          xl={12}
          xs={12}
        >
          <SeasonRuns data={data["season"]}/>
        </Grid>

        <Grid
          item
          lg={12}
          md={12}
          xl={12}
          xs={12}
        >
          <Summary data={data["summary"]}/>
        </Grid>
        

      </Grid>
    </div>
  );
};

export default Dashboard;
