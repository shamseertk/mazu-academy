import React from 'react';
import { Container, AppBar, Typography } from '@material-ui/core';
import Alphabet from './container/Alphabet';

function App() {
  return <Container>
    <AppBar
      style={{height: '50px'}}
      position="fixed"
      ><Typography
        component="h1"
        style={{fontSize: '25px'}}
        >Arabic Learning</Typography></AppBar>
    <Alphabet />
  </Container>
}

export default App;
