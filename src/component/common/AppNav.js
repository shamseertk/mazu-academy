import React from 'react';
import {IconButton, Divider, Box } from '@mui/material';
import Drawer from '@mui/material/Drawer';

import { Link, useLocation } from 'react-router-dom';
import { ChevronLeft, SubdirectoryArrowRight } from '@mui/icons-material';
import _ from 'lodash'
import { menus } from '../../utils/menus';

// Wrapper component to provide location prop to AppNav
function AppNavWrapper(props) {
  const location = useLocation();
  return <AppNav location={location} {...props} />
}

class AppNav extends React.Component {
  render() {
    const { drawerOpen, closeDrawer, location } = this.props;
    const currentPath = location.pathname;

    return (
      <div className="menuWrapper">
        <Box sx={{
          display: {
            lg: 'block',
            xs: 'none'
          }
        }}>
          {menus && menus.map(menu => {
            // Determine if the menu item is active
            const isActive = currentPath.startsWith(menu.link) && menu.link !== '/';
            return _.get(menu, ['active'], true) && (
              <Link 
                key={menu.link}
                to={`${menu.link}`}
                // Apply 'menuButtonActive' class when active
                className={`menuButton ${isActive ? 'menuButtonActive' : ''}`}
              >
                {menu.label}
              </Link>
            );
          })}
        </Box>
        <Drawer
          open={drawerOpen}
          onClose={closeDrawer}
          className="menuDrawer"
          >
          <IconButton onClick={closeDrawer} size="large">
            <ChevronLeft />
            <ChevronLeft />
          </IconButton>
          <Divider />
          {menus && menus.map(menu => {
            const isActive = currentPath.startsWith(menu.link) && menu.link !== '/';
            return _.get(menu, ['active'], true) && (<div 
              key={menu.link} 
              style={{display: 'flex', flexDirection: 'column'}} 
              onClick={closeDrawer}
              >
              <Link key={menu.link}
                to={`${menu.link}`}
                // Apply 'menuButtonDrawerActive' class when active
                className={`menuButtonDrawer ${isActive ? 'menuButtonDrawerActive' : ''}`}
                >{menu.label}</Link>
              {menu.subMenus && menu.subMenus.map(subMenu => {
                const isSubMenuActive = currentPath === subMenu.link; // Check if the sub-menu link is the current path
                return _.get(subMenu, ['active'], true) && <Link
                  key={subMenu.link}
                  to={`${subMenu.link}`}
                  className={`subMenuButtonDrawer ${isSubMenuActive ? 'subMenuButtonDrawerActive' : ''}`} // Apply conditional active class
                  >
                  <SubdirectoryArrowRight />
                  {subMenu.label}
                </Link>
              })}
            </div>)
          })}
        </Drawer>
      </div>
    );
  }
}

export default AppNavWrapper;