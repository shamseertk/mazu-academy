import React from 'react';
import { Grid, Typography } from '@mui/material';

function Question (props){
  const { questionNumber, questionText, displayFinalContent } = props;
  return <React.Fragment>
    {!displayFinalContent 
      ? <Grid container>
        <Grid item>
          <Typography component="h3" style={{padding: '10px'}}>
            <span className="questNumber">Question # {questionNumber}.</span>
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

export default Question;
