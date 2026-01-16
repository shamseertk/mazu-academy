import React from 'react';
import { IconButton, Divider, Box } from '@mui/material';
import Drawer from '@mui/material/Drawer';

import { Link, useLocation } from 'react-router-dom';
import { ChevronLeft, SubdirectoryArrowRight, KeyboardArrowDown } from '@mui/icons-material';
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
        <Box className="menuContainer" sx={{
          display: {
            lg: 'flex',
            xs: 'none'
          }
        }}>
          {menus && menus.map(menu => {
            const isActive = currentPath.startsWith(menu.link) && menu.link !== '/' && menu.link !== '#';
            const hasMegaMenu = menu.megaMenu && menu.megaMenu.length > 0;

            return _.get(menu, ['active'], true) && (
              <div key={menu.label} className="navItemContainer">
                <Link
                  to={menu.link}
                  className={`menuButton ${isActive ? 'menuButtonActive' : ''}`}
                >
                  {menu.label}
                  {hasMegaMenu && <KeyboardArrowDown sx={{ verticalAlign: 'middle', ml: 0.5 }} />}
                </Link>

                {hasMegaMenu && (
                  <div className="megaMenuDropdown">
                    {menu.megaMenu.map((section, idx) => (
                      <div key={idx} className="megaMenuSection">
                        <div className="megaMenuHeading">{section.heading}</div>
                        {section.items.map(item => (
                          <div key={item.link} style={{ display: 'flex', flexDirection: 'column' }}>
                            <Link
                              to={item.link}
                              className="megaMenuItem"
                            >
                              {item.label}
                            </Link>
                            {/* Render Nested Items */}
                            {item.subItems && item.subItems.map(subItem => (
                              <Link
                                key={subItem.link}
                                to={subItem.link}
                                className="megaMenuItemSub"
                              >
                                {subItem.label}
                              </Link>
                            ))}
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
              </div>
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
            const isActive = currentPath.startsWith(menu.link) && menu.link !== '/' && menu.link !== '#';
            return _.get(menu, ['active'], true) && (<div
              key={menu.label}
              style={{ display: 'flex', flexDirection: 'column' }}
              onClick={closeDrawer}
            >
              <Link key={menu.link}
                to={`${menu.link}`}
                className={`menuButtonDrawer ${isActive ? 'menuButtonDrawerActive' : ''}`}
              >{menu.label}</Link>

              {/* Handle old subMenus */}
              {menu.subMenus && menu.subMenus.map(subMenu => (
                _.get(subMenu, ['active'], true) && <Link
                  key={subMenu.link}
                  to={`${subMenu.link}`}
                  className={`subMenuButtonDrawer ${currentPath === subMenu.link ? 'subMenuButtonDrawerActive' : ''}`}
                >
                  <SubdirectoryArrowRight />
                  {subMenu.label}
                </Link>
              ))}

              {/* Handle new Mega Menu structure in Drawer */}
              {menu.megaMenu && menu.megaMenu.map(section => (
                section.items.map(item => (
                  <React.Fragment key={item.link}>
                    {_.get(item, ['active'], true) && <Link
                      to={item.link}
                      className={`subMenuButtonDrawer ${currentPath === item.link ? 'subMenuButtonDrawerActive' : ''}`}
                    >
                      <SubdirectoryArrowRight />
                      {item.label}
                    </Link>}

                    {item.subItems && item.subItems.map(subItem => (
                      _.get(subItem, ['active'], true) && <Link
                        key={subItem.link}
                        to={subItem.link}
                        className={`subMenuButtonDrawer ${currentPath === subItem.link ? 'subMenuButtonDrawerActive' : ''}`}
                        style={{ paddingLeft: '35px', fontSize: '16px' }}
                      >
                        - {subItem.label}
                      </Link>
                    ))}
                  </React.Fragment>
                ))
              ))}
            </div>)
          })}
        </Drawer>
      </div>
    );
  }
}


export default AppNavWrapper;