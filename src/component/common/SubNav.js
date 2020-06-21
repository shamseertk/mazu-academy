import React from 'react';
import { withStyles, Hidden } from '@material-ui/core';
import { withRouter, Link } from 'react-router-dom';
import _ from 'lodash';
import { menus } from '../../utils/menus';

const styles = () => ({
  pageTitle: {
    fontSize: '20px',
    padding: '10px 0px 10px 25px',
    fontFamily: 'sans-serif',
    color: '#083f92',
    backgroundColor: '#00d0ff',
    display: 'flex'
  },
  subMenuButton: {
    backgroundColor: '#5f9ea0',
    textDecoration: 'none',
    padding: '6px',
    borderRadius: 5,
    fontSize: '20px',
    color: 'white',
    fontFamily: 'cursive',
    marginLeft: '15px',
    '&:hover': {
      backgroundColor: '#0b9862',
    }
  },
});

class SubNav extends React.Component {
  constructor(props) {
    super(props);
    const firstPartMenu = _.get(props.match.path.split('/'), ['1'], '');
    const menuSelected = menus.filter(menu => menu.link.includes(firstPartMenu));
    this.state = {
      currentPage: _.get(menuSelected, ['0']),
    }
  }
  render() {
    const { classes } = this.props;
    const { currentPage } = this.state;
    return <div className={classes.pageTitle}><div style={{width: '250px', paddingTop: '8px'}}>{this.props.pageTitle}</div>
      <Hidden mdDown>
        <Link
          key={currentPage.link}
          to={currentPage.link}
          className={classes.subMenuButton}
        >{currentPage.label} Home</Link>
        {currentPage && _.get(currentPage, ['subMenus'], []).map(menu => _.get(menu, ['active'], true) && <Link
          key={menu.link}
          to={menu.link}
          className={classes.subMenuButton}
        >{menu.label}</Link>)}
      </Hidden>
    </div>
  }
}

export default withRouter(withStyles(styles)(SubNav));
