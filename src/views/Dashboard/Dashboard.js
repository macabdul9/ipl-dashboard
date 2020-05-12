import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
// import * as data from './data';
import {

  Matches,
  Runs,
  Boundaries,
  Balls,
  MOTM,
  Victories,
  RunsRadar,
  Toss,
  TopScorer,
  SeasonRuns,
  UsersByDevice,
  Awards
} from './components';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  }
}));

const Dashboard = () => {
  const classes = useStyles();

  const tossLabel = ['Bat','Field']
  const wins = [173, 118]
  const defeats = [143, 140]
  const champions = [2, 0, 2, 2, 1, 0, 0, 1, 1, 0, 0, 0, 0]
  const runner_up = [4, 3, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0]
  const finaleLabel = ['Chennai Super Kings',
  'Royal Challengers Bangalore',
  'Mumbai Indians',
  'Kolkata Knight Riders',
  'Rajasthan Royals',
  'Kings XI Punjab',
  'Delhi Daredevils',
  'Sunrisers Hyderabad',
  'Deccan Chargers',
  'Pune Warriors',
  'Gujarat Lions',
  'Kochi Tuskers Kerala',
  'Rising Pune Supergiants']

  const top_10_runs = [4273, 4246, 3963, 3817, 3633, 3560, 3507, 3399, 3373, 3245]
  const top_10_run_scorer = ['SK Raina', 'V Kohli', 'RG Sharma', 'G Gambhir', 'CH Gayle', 'RV Uthappa', 
  'DA Warner', 'MS Dhoni', 'AB de Villiers', 'S Dhawan']

  const top_10_wickets = [120, 107, 101, 100,  98,  81,  79,  76,  75,  74]
  const top_10_wicket_taker = ['SL Malinga',
  'Harbhajan Singh',
  'PP Chawla',
  'A Mishra',
  'DJ Bravo',
  'A Nehra',
  'R Ashwin',
  'PP Ojha',
  'Z Khan',
  'RP Singh']

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
          <Toss label ={tossLabel} data = {wins}  title={"Won the toss and match result"}/>
        </Grid>
        <Grid
          item
          lg={4}
          md={6}
          xl={4}
          xs={12}
        >
          <Toss label ={finaleLabel} data = {champions} title={'Champions'}/>
        </Grid>
        <Grid
          item
          lg={4}
          md={6}
          xl={4}
          xs={12}
        >
          <Toss label ={finaleLabel} data = {runner_up} title={'Runner-ups'}/>
        </Grid>

        <Grid
          item
          // zeroMinWidth
          lg={8}
          md={12}
          xl={9}
          xs={12}
        >
          <Victories RunsRadar/>
        </Grid>
        <Grid
          item
          lg={4}
          md={6}
          xl={3}
          xs={12}
        >
          <RunsRadar />
        </Grid>

        <Grid
          item
          // zeroMinWidth
          lg={8}
          md={12}
          xl={9}
          xs={12}
        >
          <MOTM />
        </Grid>
        <Grid
          item
          lg={4}
          md={6}
          xl={3}
          xs={12}
        >
          <UsersByDevice />
        </Grid>

        
        <Grid
          item
          lg={4}
          md={6}
          xl={4}
          xs={12}
        >
          {/* <LatestProducts /> */}
        </Grid>
        <Grid
          item
          lg={12}
          md={12}
          xl={12}
          xs={12}
        >
          <Awards />
        </Grid>

        <Grid
          item
          // zeroMinWidth
          lg={8}
          md={12}
          xl={6}
          xs={12}
        >
          <TopScorer label = {top_10_run_scorer} data={top_10_runs} title={'Top-10 Batsmans'} labelString={"Runs"}/>
        </Grid>

        <Grid
          item
          // zeroMinWidth
          lg={8}
          md={12}
          xl={6}
          xs={12}
        >
          <TopScorer label = {top_10_wicket_taker} data={top_10_wickets} title={'Top-10 Bowlers'} labelString={"Wickets"}/>
        </Grid>
        
        <Grid
          item
          lg={12}
          md={12}
          xl={12}
          xs={12}
        >
          <SeasonRuns />
        </Grid>

      </Grid>
    </div>
  );
};

export default Dashboard;
