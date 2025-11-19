import React from 'react';
import {IconButton, Divider, Box } from '@mui/material';
import Drawer from '@mui/material/Drawer';

import { Link } from 'react-router-dom';
import { ChevronLeft, SubdirectoryArrowRight } from '@mui/icons-material';
import _ from 'lodash'
import { menus } from '../../utils/menus';

class AppNav extends React.Component {
  render() {
    const { drawerOpen, closeDrawer } = this.props;
    return (
      <div className="menuWrapper">
        <Box sx={{
          display: {
            lg: 'block',
            xs: 'none'
          }
        }}>
          {menus && menus.map(menu => _.get(menu, ['active'], true) && <Link key={menu.link}
          to={`${menu.link}`}
          className="menuButton">{menu.label}</Link>)}
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
          {menus && menus.map(menu => _.get(menu, ['active'], true) && <div key={menu.link} style={{display: 'flex', flexDirection: 'column'}} onClick={closeDrawer}>
            <Link key={menu.link}
              to={`${menu.link}`}
              className="menuButtonDrawer">{menu.label}</Link>
            {menu.subMenus && menu.subMenus.map(subMenu => _.get(subMenu, ['active'], true) && <Link
              key={subMenu.link}
              to={`${subMenu.link}`}
              className="subMenuButtonDrawer"
              >
              <SubdirectoryArrowRight />
              {subMenu.label}
            </Link>)}
          </div>)}
        </Drawer>
      </div>
    );
  }
}

export default AppNav;
