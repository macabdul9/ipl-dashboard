import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Divider, Drawer } from '@material-ui/core';

import HelpIcon from '@material-ui/icons/Help';
import TextFieldsIcon from '@material-ui/icons/TextFields';
import SportsCricketIcon from '@material-ui/icons/SportsCricket';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import ShowChartIcon from '@material-ui/icons/ShowChart';
import InsertChartIcon from '@material-ui/icons/InsertChart';
import DescriptionIcon from '@material-ui/icons/Description';
import GitHubIcon from '@material-ui/icons/GitHub';

import {SidebarNav } from './components';

const useStyles = makeStyles(theme => ({
  drawer: {
    width: 240,
    [theme.breakpoints.up('lg')]: {
      marginTop: 64,
      height: 'calc(100% - 64px)'
    }
  },
  root: {
    backgroundColor: theme.palette.white,
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    padding: theme.spacing(2)
  },
  divider: {
    margin: theme.spacing(2, 0)
  },
  nav: {
    marginBottom: theme.spacing(2)
  }
}));

const Sidebar = props => {
  const { open, variant, onClose, className, ...rest } = props;

  const classes = useStyles();

  const pages = [
    {
      title: 'Dashboard',
      href: '/dashboard',
      icon: <InsertChartIcon />
    },
    {
      title: 'Trivia',
      href: '/trivia',
      icon: <HelpIcon  />
    },
    {
      title: 'Teams',
      href: '/teams',
      icon: <SportsCricketIcon />
    },
    {
      title: 'readme',
      href: '/readme',
      icon: <DescriptionIcon />
    },
    {
      title: 'contact',
      href: '/contact',
      icon: <ContactMailIcon />
    },
    // {
    //   title: 'Source Code',
    //   href: 'www.github.com',
    //   icon: <GitHubIcon />
    // },

  ];

  return (
    <Drawer
      anchor="left"
      classes={{ paper: classes.drawer }}
      onClose={onClose}
      open={open}
      variant={variant}
    >
      <div
        {...rest}
        className={clsx(classes.root, className)}
      >
        {/* <Profile /> */}
        {/* <Divider className={classes.divider} /> */}
        <SidebarNav
          className={classes.nav}
          pages={pages}
        />
        
      </div>
    </Drawer>
  );
};

Sidebar.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
  open: PropTypes.bool.isRequired,
  variant: PropTypes.string.isRequired
};

export default Sidebar;
