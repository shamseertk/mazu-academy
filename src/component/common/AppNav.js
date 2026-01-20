import { useState } from 'react';
import { IconButton, Divider, Box, Collapse } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import { Link, useLocation } from 'react-router-dom';
import { ChevronLeft, KeyboardArrowDown, ExpandLess, ExpandMore } from '@mui/icons-material';
import _ from 'lodash';
import { menus } from '../../utils/menus';

// Recursive Mobile Menu Item Component
const MobileMenuItem = ({ item, level = 0, onClose, currentPath }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Flatten children: subItems, subMenus, or megaMenu items
  const children = item.subItems || item.subMenus || (item.megaMenu ? item.megaMenu.flatMap(s => s.items) : []);
  const hasChildren = children.length > 0;

  // Basic active check
  const isActive = currentPath === item.link || (currentPath.startsWith(item.link) && item.link !== '/' && item.link !== '#');

  const handleLinkClick = (e) => {
    // If the item has no valid link (or is just a placeholder '#'), toggle expansion
    if (item.link === '#' || !item.link) {
      e.preventDefault();
      e.stopPropagation();
      setIsOpen(!isOpen);
    } else {
      // Otherwise, it's a real link. Let it navigate and close the drawer.
      onClose();
    }
  };

  if (!_.get(item, ['active'], true)) return null;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingRight: '10px' }}>
        <Link
          to={item.link || '#'}
          className={level === 0 ? `menuButtonDrawer ${isActive ? 'menuButtonDrawerActive' : ''}` : `subMenuButtonDrawer ${isActive ? 'subMenuButtonDrawerActive' : ''}`}
          style={{ flexGrow: 1, paddingLeft: `${level === 0 ? 6 : level * 15 + 6}px`, cursor: 'pointer' }}
          onClick={handleLinkClick}
        >
          {level > 0 && "- "} {item.label}
        </Link>
        {hasChildren && (
          <IconButton
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setIsOpen(!isOpen);
            }}
            size="medium"
            sx={{
              color: 'var(--menu-icon-color)',
              marginTop: level === 0 ? '10px' : '0px',
              '&:hover': {
                bgcolor: 'rgba(255,255,255,0.1)'
              }
            }}
          >
            {isOpen ? <ExpandLess /> : <ExpandMore />}
          </IconButton>
        )}
      </div>
      <Collapse in={isOpen} timeout="auto" unmountOnExit>
        {children.map((child, idx) => (
          <MobileMenuItem
            key={child.label + idx}
            item={child}
            level={level + 1}
            onClose={onClose}
            currentPath={currentPath}
          />
        ))}
      </Collapse>
    </div>
  );
};

const AppNav = ({ drawerOpen, closeDrawer }) => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className="menuWrapper">
      {/* Desktop Menu - Hidden on XS */}
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
                {hasMegaMenu && <KeyboardArrowDown color='#000' sx={{ verticalAlign: 'middle', ml: 0.5 }} />}
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
                            <div key={subItem.link}>
                              <Link
                                to={subItem.link}
                                className="megaMenuItemSub"
                              >
                                {subItem.label}
                              </Link>
                              {/* Level 4 Nesting */}
                              {subItem.subItems && subItem.subItems.map(subSubItem => (
                                <Link
                                  key={subSubItem.link}
                                  to={subSubItem.link}
                                  className="megaMenuItemSubSub"
                                >
                                  {subSubItem.label}
                                </Link>
                              ))}
                            </div>
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

      {/* Mobile Drawer */}
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
        <div style={{ paddingBottom: '20px' }}>
          {menus && menus.map((menu, idx) => (
            <MobileMenuItem
              key={menu.label + idx}
              item={menu}
              level={0}
              onClose={closeDrawer}
              currentPath={currentPath}
            />
          ))}
        </div>
      </Drawer>
    </div>
  );
}

export default AppNav;