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
    const currentPath = this.props.location.pathname; // Get current path

    return (
      <div className="pageTitleWrapper">
        <PageTitle pageTitle={this.props.pageTitle} />
        <Box sx={{
          display: {
            xs: 'none',
            lg: 'block'
          }
        }}>
          {/* Main Level Link (e.g., /level1) - Highlight if the path is exactly the link */}
          <Link
            key={currentPage.link}
            to={currentPage.link}
            className={`subMenuButton ${currentPath === currentPage.link ? 'subMenuButtonActive' : ''}`}
          >{currentPage.label} Home</Link>

          {/* Sub-Menu Links */}
          {currentPage && _.get(currentPage, ['subMenus'], []).map(menu => {
            // Determine if the sub-menu link is the currently active one
            const isActive = currentPath === menu.link;

            return _.get(menu, ['active'], true) && (
              <Link
                key={menu.link}
                to={menu.link}
                // Conditionally apply new active class
                className={`subMenuButton ${isActive ? 'subMenuButtonActive' : ''}`}
              >
                {menu.label}
              </Link>
            )
          })}
        </Box>
      </div>
    );
  }
}

export default SubNavWrapper;