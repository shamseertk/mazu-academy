import React from 'react';
import { withStyles, Hidden, Drawer, IconButton, Divider } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { ChevronLeft } from '@material-ui/icons';

const styles = () => ({
  menuButton: {
    backgroundColor: 'darkcyan',
    textDecoration: 'none',
    padding: '6px',
    borderRadius: 5,
    fontSize: '20px',
    color: 'white',
    fontFamily: 'cursive',
    marginLeft: '10px',
    '&:hover': {
      backgroundColor: '#28c0c0',
    }
  },
  menuWrapper: {
    marginLeft: '10px',
    flex: 1,
    justifyContent: 'flex-start',
    display: 'flex',
  },
  menuButtonDrawer: {
    backgroundColor: 'darkcyan',
    textDecoration: 'none',
    padding: '6px',
    borderRadius: 5,
    fontSize: '20px',
    color: 'white',
    fontFamily: 'cursive',
    marginTop: '10px',
    '&:hover': {
      backgroundColor: '#28c0c0',
    }
  },
});

const menus =[{
  label: 'Alphabets',
  link: '/',
}, {
  label: 'Games',
  link: '/game',
}, {
  label: 'Test',
  link: '/test',
}, {
  label: 'Writing',
  link: '/writing',
}];

class AppNav extends React.Component {
  render() {
    const { classes, drawerOpen, closeDrawer } = this.props;
    return <div className={classes.menuWrapper}>
      <Hidden xsDown>
      {menus && menus.map(menu => <Link key={menu.link}
        to={`${menu.link}`}
        className={classes.menuButton}>{menu.label}</Link>)}
      </Hidden>
      <Drawer
        open={drawerOpen}
        onClose={closeDrawer}
        className={classes.menuDrawer}
        >
        <IconButton
          onClick={closeDrawer}
          >
          <ChevronLeft />
          <ChevronLeft />
        </IconButton>
        <Divider />
        {menus && menus.map(menu => <Link key={menu.link}
        to={`${menu.link}`}
        className={classes.menuButtonDrawer}>{menu.label}</Link>)}
      </Drawer>
    </div>
  }
}

export default withStyles(styles)(AppNav);
