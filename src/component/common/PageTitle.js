import React from 'react';
import { withStyles } from '@material-ui/core';

const styles = () => ({
  pageTitle: {
    padding: '8px', 
    backgroundColor: '#00d0ff',
    fontFamily: 'sans-serif',
    color: '#083f92',
  },
});

function PageTitle(props) {
  const { classes, styleParam } = props;
  return <div className={classes.pageTitle} style={{...styleParam}}>{props.pageTitle}</div>
}

export default withStyles(styles)(PageTitle);
