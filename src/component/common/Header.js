import React from 'react';
import { AppBar, Typography, Toolbar, withStyles, Hidden, IconButton } from '@material-ui/core';
import AppNav from './AppNav';
import { Menu } from '@material-ui/icons';

const styles = () => ({
});

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      drawerOpen: false,
    }
  }
  openDrawer = () => {
    this.setState({
      drawerOpen: true,
    })
  }
  closeDrawer = () => {
    this.setState({
      drawerOpen: false,
    })
  }
  render () {
    const { drawerOpen } = this.state;
    return <React.Fragment><AppBar
      position="sticky"
      >
        <Toolbar>
          <Hidden lgUp>
            <IconButton
              onClick={this.openDrawer}
              >
              <Menu
                style={{color: '#fff'}}
                />
            </IconButton>
          </Hidden>
          <Typography
            component="h1"
            style={{fontSize: '25px'}}
            >Arabic Learning</Typography>
          <AppNav
            drawerOpen={drawerOpen}
            closeDrawer={this.closeDrawer}
            />
        </Toolbar>
      </AppBar>
    </React.Fragment>
  }
}

export default withStyles(styles)(Header);