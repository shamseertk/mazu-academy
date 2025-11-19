import React from 'react';
import { AppBar, Typography, Toolbar, IconButton, Box } from '@mui/material';

import AppNav from './AppNav';
import { Menu } from '@mui/icons-material';

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
    return (
      <React.Fragment><AppBar
        position="sticky"
        >
          <Toolbar>
            <Box
              sx={{
                display: {
                  xs: 'block',
                  lg: 'none'
                }
              }}
              >
              <IconButton onClick={this.openDrawer} size="large">
                <Menu
                  style={{color: '#fff'}}
                  />
              </IconButton>
            </Box>
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
    );
  }
}

export default Header;