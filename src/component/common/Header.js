import React, { useState } from 'react';
import { AppBar, Typography, Toolbar, IconButton, Box, useTheme } from '@mui/material';
import AppNav from './AppNav';
import { Menu, Brightness4, Brightness7 } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useThemeContext } from '../../contexts/ThemeContext';

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { toggleColorMode, mode } = useThemeContext();
  const theme = useTheme();

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
          <Typography
            component="h1"
            style={{ fontSize: '25px' }}
          >
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>Arabic Learning</Link>
          </Typography>
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