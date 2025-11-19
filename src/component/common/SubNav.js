import React from 'react';

import {  Link, useLocation } from 'react-router-dom';
import _ from 'lodash';
import { menus } from '../../utils/menus';
import PageTitle from './PageTitle';
import { Box } from '@mui/material';

function SubNavWrapper(props) {
  const location = useLocation();
  return <SubNav location={location} {...props} />
}

class SubNav extends React.Component {
  constructor(props) {
    super(props);
    const firstPartMenu = _.get(props.location.pathname.split('/'), ['1'], '');
    const menuSelected = menus.filter(menu => menu.link.includes(firstPartMenu));
    this.state = {
      currentPage: _.get(menuSelected, ['0']),
    }
  }
  render() {
    const { currentPage } = this.state;
    return (
      <div className="pageTitleWrapper">
        <PageTitle pageTitle={this.props.pageTitle} />
        <Box sx={{
          display: {
            xs: 'none',
            lg: 'block'
          }
        }}>
          <Link
            key={currentPage.link}
            to={currentPage.link}
            className="subMenuButton"
          >{currentPage.label} Home</Link>
          {currentPage && _.get(currentPage, ['subMenus'], []).map(menu => _.get(menu, ['active'], true) && <Link
            key={menu.link}
            to={menu.link}
            className="subMenuButton"
          >{menu.label}</Link>)}
        </Box>
      </div>
    );
  }
}

export default SubNavWrapper;
