import React from 'react';
import { alphabets, LEARNED_SO_FAR } from '../utils/alphabets';
import WordTile from '../component/WordTile';
import { MobileStepper, Button, withStyles, Switch, FormControlLabel } from '@material-ui/core';
import SubNav from '../component/common/SubNav';

const style = () => ({
  bookWrapper: {
    width: '900px',
    selfAlign: 'center',
    margin: 'auto',
  },
  '@media screen and (max-width: 900px)': {
    bookWrapper: {
      width: '100%',
      selfAlign: 'center',
      margin: 'auto',
    },
  }
});

class Words extends React.Component {
  constructor(props) {
    super(props);
    const alphabetsUpdated = alphabets.slice(0, LEARNED_SO_FAR);
    this.state = {
      alphabetsUpdated,
      activeStep: 0,
      enableJoinedWords: false,
    };
  }

  nextPage = () => {
    const { activeStep, alphabetsUpdated } = this.state;
    if(alphabetsUpdated.length - 1 === activeStep) {
      this.setState({
        activeStep: 0,
      });
    } else {
      this.setState({
        activeStep: activeStep + 1,
      });
    }
  }

  prevPage = () => {
    const { activeStep, alphabetsUpdated } = this.state;
    if(activeStep === 0) {
      this.setState({
        activeStep: alphabetsUpdated.length - 1,
      })
    } else {
      this.setState({
        activeStep: activeStep - 1,
      });
    }
  }
  handleChangeJoinedWords = (evt) => {
    this.setState({
      enableJoinedWords: evt.target.checked,
    });
  }
  render() {
    const { alphabetsUpdated, activeStep, enableJoinedWords } = this.state;
    const { classes } = this.props;
    return <React.Fragment>
      <SubNav pageTitle="Level2 &#8608; Words-Beginners" />
      <div className="container">
        <FormControlLabel
          control={<Switch
            checked={enableJoinedWords}
            onChange={this.handleChangeJoinedWords}
            name="checkedB"
            color="primary" />}
          label="Joined Words"
          labelPlacement="start"
          disabled
          />
        
        <div className={classes.bookWrapper}>
          <MobileStepper
            steps={alphabetsUpdated.length}
            position="static"
            variant="text"
            activeStep={activeStep}
            nextButton={
              <Button
                onClick={this.nextPage}
                >Next</Button>
            }
            backButton={
              <Button
                onClick={this.prevPage}
                >Prev</Button>
            }
            />
            <WordTile
              letter={alphabetsUpdated[activeStep]}
              enableJoinedWords={enableJoinedWords}
              />
        </div>
      </div>
    </React.Fragment>
  }
}

export default withStyles(style)(Words);
