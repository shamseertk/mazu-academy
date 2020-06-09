import React from 'react';
import { AppBar, Typography, Toolbar, withStyles } from '@material-ui/core';
import AppNav from './AppNav';

const styles = () => ({
  pageTitle: {
    fontSize: '24px',
    padding: '10px 0px 10px 50px',
    fontFamily: 'sans-serif',
    color: '#083f92',
    backgroundColor: '#00d0ff',
  }
});

function Header(props){
  return <React.Fragment><AppBar
    position="sticky"
    >
      <Toolbar>
        <Typography
          component="h1"
          style={{fontSize: '25px'}}
          >Arabic Learning</Typography>
        <AppNav />
      </Toolbar>
    </AppBar>
    <div className={props.classes.pageTitle}>{props.pageTitle}</div>
  </React.Fragment>
}

export default withStyles(styles)(Header);