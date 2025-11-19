import React from 'react';
import { Grid, Button, Typography, Slider, Avatar } from '@mui/material';

import { Replay, NavigateNext, Forward } from '@mui/icons-material';

function TopPanel(props){
  const { restartQuiz, maxQuestions, rightAnswers, 
    wrongAnswers, handleNextClick, children } = props;
  return (
    <React.Fragment>
      <Grid container justifyContent="space-around" style={{border: '1px solid #224422', padding: '5px'}}>
        {children && <Grid item >
          <children.type {...children.props} />
        </Grid>}
        {handleNextClick && <Grid item><Button
          className="nextButton"
          startIcon={<NavigateNext />}
          endIcon={<Forward />}
          onClick={handleNextClick}
          >Next Qstn.</Button></Grid>}
        {restartQuiz && <Grid item><Button
          className="buttonStyle restartButton"
          variant="contained" color="primary" onClick={restartQuiz}
          startIcon={<Replay />}
          >Restart</Button>
          </Grid>}
        <Grid item style={{ paddingLeft: '10px' }}>
          <Slider
            max={maxQuestions}
            disabled
            valueLabelDisplay="on"
            value={rightAnswers}
            classes={{valueLabel: "sliderValueLabel", rail: "rail", track: "track"}}
            />
          <Typography component="h3" style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
              You have <Avatar style={{margin: '0px 5px', backgroundColor: 'green'}}>{rightAnswers}</Avatar> right answers and 
              <Avatar style={{margin: '0px 5px', backgroundColor: 'red'}}>{wrongAnswers}</Avatar> wrong answers.</Typography>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default TopPanel;
