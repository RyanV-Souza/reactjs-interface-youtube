import React from 'react';

import { 
  makeStyles, 
  Toolbar, 
  Typography, 
  IconButton, 
  Button, 
  AppBar, 
  List, 
  Divider,
  ListItem, 
  ListItemIcon, 
  ListItemText,
  Drawer } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';

import VideoCall from '@material-ui/icons/VideoCall';
import MoreVert from '@material-ui/icons/MoreVert';
import AppsIcon from '@material-ui/icons/Apps';

import HomeIcon from '@material-ui/icons/Home';
import Subscriptions from '@material-ui/icons/Subscriptions';
import WhatShot from '@material-ui/icons/Whatshot';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  appBar: {
    boxShadow: 'none',
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: 240,
    flexShrink: 0,
  },
  drawerPaper: {
    width: 240,
    borderRight: 'none',
  },
  grow: {
    flexGrow: 1,
  },
  icons: {
    paddingRight: theme.spacing(4),

  },
  menuIcon: {
    paddingRight: theme.spacing(5),
    paddingLeft: theme.spacing(3),
  },
  logo: {
    height: 29,

  },
  listItemText: {
    fontSize: 14,
  },
  listItem: {
    paddingTop: 4,
    paddingBottom: 4,
  }
  
}));


function Home() {
const classes = useStyles();

  return (
      <div className={classes.root}>
          <AppBar color='inherit' className={classes.appBar}>
              <Toolbar>
                  <IconButton
                    className={classes.menuIcon}
                    color='inherit'
                  >
                   <MenuIcon />
                  </IconButton>
                  <img src="./images/preto.png" alt='logo' className={classes.logo}/>          

                  <div className={classes.grow} />

                  <IconButton className={classes.icons} color='inherit'>
                   <VideoCall />
                  </IconButton>

                  <IconButton className={classes.icons} color='inherit'>
                   <AppsIcon />
                  </IconButton>

                  <IconButton className={classes.icons} color='inherit'>
                   <MoreVert />
                  </IconButton>

                  <Button startIcon={<AccountCircle />} variant='outlined'color='secondary'> Fazer Login </Button>
              </Toolbar>
          </AppBar>
          <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <Toolbar />
            <div className={classes.drawerContainer}>
              <List>
                  <ListItem button classes={{root: classes.listItem}}>
                    <ListItemIcon>{ <HomeIcon /> }</ListItemIcon> 
                    <ListItemText classes={{
                      primary: classes.listItemText
                    }} primary={'Início'}/>
                  </ListItem>
              </List>


              <List>
                  <ListItem button classes={{root: classes.listItem}}>
                    <ListItemIcon>{ <WhatShot /> }</ListItemIcon> 
                    <ListItemText classes={{
                      primary: classes.listItemText
                    }} primary={'Em alta'}/>
                  </ListItem>
              </List>

              <List>
                  <ListItem button classes={{root: classes.listItem}}>
                    <ListItemIcon>{ <Subscriptions /> }</ListItemIcon> 
                    <ListItemText classes={{
                      primary: classes.listItemText
                    }} primary={'Inscrições'}/>
                  </ListItem>
               
              </List>
              <Divider />
              </div>         
          </Drawer>
      </div>
  )
}

export default Home;