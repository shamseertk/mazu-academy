import React from 'react';
import { withStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';

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
  }
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

function AppNav(props) {
  const { classes } = props;
  return <div className={classes.menuWrapper}>
    {menus && menus.map(menu => <Link key={menu.link}
      to={`${menu.link}`}
      className={classes.menuButton}>{menu.label}</Link>)}
  </div>
}

export default withStyles(styles)(AppNav);
