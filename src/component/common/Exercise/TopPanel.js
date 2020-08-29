import React from 'react';
import { Grid, Button, withStyles, Typography
  , Slider, Avatar } from '@material-ui/core';
import { Replay, NavigateNext, Forward } from '@material-ui/icons';

const styles = () => ({
  buttonStyle: {
    margin: '4px 0px 0px 4px',
  },
  restartButton: {
    backgroundColor: 'blue'
  },
  sliderValueLabel: {
    color: 'green',
  },
  rail: {
    backgroundColor: 'red',
    height: '15px',
  },
  track: {
    backgroundColor: 'green',
    height: '15px',
  },
  nextButton: {
    backgroundColor: 'green',
    color: 'white',
    '&:hover': {
      backgroundColor: '#9acd32',
      color: 'blue',
    }
  },
});

function TopPanel(props){
  const { classes, restartQuiz, maxQuestions, rightAnswers, 
    wrongAnswers, handleNextClick, children } = props;
  return <React.Fragment>
    <Grid container justify="space-around" style={{border: '1px solid #224422', padding: '5px'}}>
      {children && <Grid item >
        <children.type {...children.props} />
      </Grid>}
      {handleNextClick && <Grid item><Button
        className={classes.nextButton}
        startIcon={<NavigateNext />}
        endIcon={<Forward />}
        onClick={handleNextClick}
        >Next Qstn.</Button></Grid>}
      {restartQuiz && <Grid item><Button className={`${classes.buttonStyle} ${classes.restartButton}`}
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
          classes={{valueLabel: classes.sliderValueLabel, rail: classes.rail, track: classes.track}}
          />
        <Typography component="h3" style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
            You have <Avatar style={{margin: '0px 5px', backgroundColor: 'green'}}>{rightAnswers}</Avatar> right answers and 
            <Avatar style={{margin: '0px 5px', backgroundColor: 'red'}}>{wrongAnswers}</Avatar> wrong answers.</Typography>
      </Grid>
    </Grid>
  </React.Fragment>;
}

export default withStyles(styles)(TopPanel);
