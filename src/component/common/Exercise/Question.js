import React from 'react';
import { Grid, withStyles, Typography, } from '@material-ui/core';

const styles = () => ({
  questNumber: {
    fontSize: '1.5em',
    fontWeight: 'bold',
  },
});

function Question (props){
  const { classes, questionNumber, questionText, displayFinalContent } = props;
  return <React.Fragment>
    {!displayFinalContent 
      ? <Grid container>
        <Grid item>
          <Typography component="h3" style={{padding: '10px'}}>
            <span className={classes.questNumber}>Question # {questionNumber}.</span>
            {questionText}
          </Typography>
        </Grid>
      </Grid>
      : <Typography component="div"
        style={{textAlign: 'center', color: 'blue', backgroundColor: 'orange', padding: '20px', fontSize: '2em'}}>
        {displayFinalContent}
      </Typography>}
  </React.Fragment>;
}

export default withStyles(styles)(Question);
