import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid, Typography as MuiTypography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  }
}));

const variants = {
  // h1: 'Nisi euismod ante senectus consequat phasellus ut',
  // h2: 'Nisi euismod ante senectus consequat phasellus ut',
  // h3: 'Nisi euismod ante senectus consequat phasellus ut',
  // h4: 'Nisi euismod ante senectus consequat phasellus ut',
  // h5: 'Nisi euismod ante senectus consequat phasellus ut',
  h6: 'Nisi euismod ante senectus consequat phasellus ut',
  subtitle1: 'Leo varius justo aptent arcu urna felis pede nisl',
  subtitle2: 'Leo varius justo aptent arcu urna felis pede nisl',
  1:
    'In total 577 played so far (upto 2016), 21226 boundaries have been scored that is ~ 37/match, which is what makes ipl a thrilling event.',
  Trivia:
    'In IPL 2016, Virat Kohli was in phenomical form and score 973 runs is just 16 innings, that was the highest ever in a single season.',
  body4:
    'Do you know, Upon winning the toss a team is more likely to win the match if it chooses to bat first than the bowl (173/291 vs 118/291). ',
  body5:
    'CSK has most wins along with highest win-defeat ratio while DD has lowest win-defeat ratio.',
    2:
    'CSK, MI, and KKR has won the 6 title out of total 9 times, 2-2 each.',
  Trivia2:
    'RCB has never won the title despite being 3 times in the final.',
  body7:
    'CSK has record of playing highest number of final 7 out of 9.',
  body9:
    'CH Gayle has scored highest number of sixes.',
  
  
    




  
  overline: 'Accumsan leo pretium conubia ullamcorper.',
  
};

const Trivia = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={4}
      >
        {Object.keys(variants).map((key, i) => (
          <Fragment key={i}>
            <Grid
              item
              sm={3}
              xs={12}
            >
              {/* <MuiTypography variant="caption">{key}</MuiTypography> */}
            </Grid>
            <Grid
              item
              sm={9}
              xs={12}
            >
              <MuiTypography variant={key}>{variants[key]}</MuiTypography>
            </Grid>
          </Fragment>
        ))}
      </Grid>
    </div>
  );
};

export default Trivia;
