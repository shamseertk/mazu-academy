import React from 'react';
import { withStyles, Hidden, Drawer, IconButton, Divider } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { ChevronLeft, SubdirectoryArrowRight } from '@material-ui/icons';
import { menus } from '../../utils/menus';

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
  subMenuButtonDrawer: {
    backgroundColor: '#5f9ea0',
    textDecoration: 'none',
    padding: '6px',
    borderRadius: 5,
    fontSize: '20px',
    color: 'white',
    fontFamily: 'cursive',
    marginTop: '1px',
    paddingLeft: '5px',
    '&:hover': {
      backgroundColor: '#0b9862',
    }
  },
});

class AppNav extends React.Component {
  render() {
    const { classes, drawerOpen, closeDrawer } = this.props;
    return <div className={classes.menuWrapper}>
      <Hidden smDown>
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
        {menus && menus.map(menu => <div key={menu.link} style={{display: 'flex', flexDirection: 'column'}} onClick={closeDrawer}>
          <Link key={menu.link}
            to={`${menu.link}`}
            className={classes.menuButtonDrawer}>{menu.label}</Link>
          {menu.subMenus && menu.subMenus.map(subMenu => <Link
            key={subMenu.link}
            to={`${subMenu.link}`}
            className={classes.subMenuButtonDrawer}
            >
            <SubdirectoryArrowRight />
            {subMenu.label}
          </Link>)}
        </div>)}
      </Drawer>
    </div>
  }
}

export default withStyles(styles)(AppNav);
