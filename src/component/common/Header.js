import React, { useState } from 'react';
import { AppBar, Typography, Toolbar, IconButton, Box } from '@mui/material';
import AppNav from './AppNav';
import { Menu, Brightness4, Brightness7 } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useThemeContext } from '../../contexts/ThemeContext';
import logo from '../../images/mail-emblem.jpg';

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { toggleColorMode, mode } = useThemeContext();

  const openDrawer = () => {
    setDrawerOpen(true);
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
  };

  return (
    <React.Fragment>
      <AppBar
        position="sticky"
        // Remove hardcoded background color to let MUI theme handle it, or use theme variables
        sx={{ backgroundColor: 'var(--header-bg-color)', color: 'var(--header-text-color)' }}
      >
        <Toolbar>
          <Box
            sx={{
              display: {
                xs: 'block',
                lg: 'none'
              }
            }}
          >
            <IconButton onClick={openDrawer} size="large">
              <Menu
                style={{ color: 'var(--menu-icon-color)' }}
              />
            </IconButton>
          </Box>
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center' }}>
            <img
              src={logo}
              alt="MAIL Logo"
              style={{
                height: '50px',
                width: 'auto',
                marginRight: '15px',
                borderRadius: '50%',
                border: '2px solid white'
              }}
            />
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Typography component="h1" sx={{ fontSize: '25px', lineHeight: 1, fontWeight: 'bold' }}>
                MAIL
              </Typography>
              <Typography variant="caption" sx={{ fontStyle: 'italic', lineHeight: 1 }}>
                Mazu Academy of Islamic Learning
              </Typography>
            </Box>
          </Link>
          <AppNav
            drawerOpen={drawerOpen}
            closeDrawer={closeDrawer}
          />
          <Box sx={{ flexGrow: 1 }} />
          <Typography variant="body1" component="div" sx={{ mr: 1, color: 'inherit' }}>
            Theme
          </Typography>
          <IconButton sx={{ ml: 0 }} onClick={toggleColorMode} color="inherit">
            {mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Header;