import React from 'react';

import { Link, useLocation } from 'react-router-dom';
import _ from 'lodash';
import { menus } from '../../utils/menus';

import { Box } from '@mui/material';

function SubNavWrapper(props) {
  const location = useLocation();
  return <SubNav location={location} {...props} />
}

class SubNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: null
    };
  }

  componentDidMount() {
    this.updateCurrentPage();
  }

  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.updateCurrentPage();
    }
  }

  updateCurrentPage() {
    const currentPath = this.props.location.pathname;

    // Find the parent menu that contains the current path
    const menuSelected = menus.find(menu => {
      // Check if main link matches (ignore #)
      if (menu.link !== '#' && currentPath.startsWith(menu.link)) return true;

      // Check megaMenu items
      if (menu.megaMenu) {
        return menu.megaMenu.some(section =>
          section.items.some(item =>
            item.link !== '#' && currentPath.startsWith(item.link)
          )
        );
      }

      return false;
    });

    this.setState({ currentPage: menuSelected || null });
  }

  render() {
    const { currentPage } = this.state;
    const currentPath = this.props.location.pathname;

    if (!currentPage) {
      return null; // Don't render anything if no matching menu found
    }

    // Flatten submenus from megaMenu or use old subMenus
    let subNavigationItems = [];
    if (currentPage.megaMenu) {
      currentPage.megaMenu.forEach(section => {
        subNavigationItems = [...subNavigationItems, ...section.items];
      });
    } else if (currentPage.subMenus) {
      subNavigationItems = currentPage.subMenus;
    }

    return (
      <div className="pageTitleWrapper">
        <Box sx={{
          display: {
            xs: 'none',
            lg: 'block'
          }
        }}>
          {/* Main Level Link */}
          {currentPage.link !== '#' && (
            <Link
              key={currentPage.link}
              to={currentPage.link}
              className={`subMenuButton ${currentPath === currentPage.link ? 'subMenuButtonActive' : ''}`}
            >{currentPage.label} Home</Link>
          )}

          {/* Sub-Menu Links */}
          {subNavigationItems.map(menu => {
            const isActive = currentPath === menu.link;
            return _.get(menu, ['active'], true) && (
              <Link
                key={menu.link}
                to={menu.link}
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