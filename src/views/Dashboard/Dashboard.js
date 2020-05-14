import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid, Avatar} from '@material-ui/core';
import {
  MiniCard,
  CustomRadar,
  CustomPie,
  CustomBar,
  SeasonRuns,
  Summary,
} from './components';

import AccessibilityNewIcon from '@material-ui/icons/AccessibilityNew';
import SportsHandballIcon from '@material-ui/icons/SportsHandball';
import SportsCricketIcon from '@material-ui/icons/SportsCricket';
import SportsKabaddiIcon from '@material-ui/icons/SportsKabaddi';


import data from './data.json';
import miniCardData from './mini-card.json';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  },
  content: {
    alignItems: 'center',
    display: 'flex'
  },
  title: {
    fontWeight: 700
  },
  avatar: {
    backgroundColor: theme.palette.success.main,
    height: 56,
    width: 56
  },
  icon: {
    height: 32,
    width: 32
  },
  difference: {
    marginTop: theme.spacing(2),
    display: 'flex',
    alignItems: 'center'
  },
  differenceIcon: {
    color: theme.palette.success.dark
  },
  differenceValue: {
    color: theme.palette.success.dark,
    marginRight: theme.spacing(1)
  }
}));

const Dashboard = () => {
  const classes = useStyles();

  const matchesIcon = (<Grid item>
                        <Avatar className={classes.avatar}>
                          <SportsKabaddiIcon className={classes.icon} />
                        </Avatar>
                      </Grid>)
  const runsIcon = (
          <Grid item>
          <Avatar className={classes.avatar}>
            <SportsCricketIcon className={classes.icon} />
          </Avatar>
        </Grid>
  )
  const ballsIcon = (
      <Grid item>
      <Avatar className={classes.avatar}>
        <SportsHandballIcon className={classes.icon} />
      </Avatar>
    </Grid>
  )
  const boundariesIcons = (
        <Grid item>
            <Avatar className={classes.avatar}>
              <AccessibilityNewIcon className={classes.icon} />
            </Avatar>
        </Grid>
  )

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
          <MiniCard data={miniCardData["matches"]} icon={matchesIcon} />
        </Grid>
        <Grid
          item
          lg={3}
          sm={6}
          xl={3}
          xs={12}
        >
          <MiniCard data={miniCardData["runs"]}  icon={runsIcon}/>
        </Grid>
        <Grid
          item
          lg={3}
          sm={6}
          xl={3}
          xs={12}
        >
          <MiniCard data={miniCardData["balls"]} icon={ballsIcon} />
        </Grid>
        <Grid
          item
          lg={3}
          sm={6}
          xl={3}
          xs={12}
        >
          <MiniCard data={miniCardData["boundaries"]} icon={boundariesIcons}/>
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
