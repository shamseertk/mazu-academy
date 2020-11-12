import React from 'react';
import { withStyles, Button, Grid, Select, MenuItem } from '@material-ui/core';
import { DndProvider } from 'react-dnd-multi-backend';
import HTML5toTouch from 'react-dnd-multi-backend/dist/esm/HTML5toTouch';
import { arabicWords } from '../../utils/words';
import WordImage from './WordImage';
import WordTitle from './WordTitle';
import _ from 'lodash'
import { HowToReg, NavigateNext, CheckCircle, ErrorRounded, Refresh } from '@material-ui/icons';
import { generateRandomNumber } from '../../utils/utils';

const styles = () => ({
  buttonWrapper: {
    padding: '5px',
  },
  letterTitle: {
    fontSize: '4em',
    padding: '20px',
    color: 'blue',
    textDecoration: 'none dotted #fff',
    textAlign: 'center',
    border: '1px solid #453bca',
    margin: '10px',
    borderRadius: '40px'
  },
  filterLtr: {
    padding: '10px'
  }
});

class ExerciseOne extends React.Component {
  constructor(props) {
    super(props);
    const currentIndex = 0;
    const resetValues = this.resetInitiateValues(currentIndex);
    
    this.state = {
      currentIndex: 0,
      ...resetValues
    }
  }
  resetInitiateValues = (currentIndex) => {
    const targetWords = _.orderBy(arabicWords[currentIndex].words.map( word => 
      ({ arabic: word.arabic, english: word.english, orderKey: generateRandomNumber(200) })), ['orderKey']);
    const accepts = arabicWords[currentIndex].words.map( word => word.english );
    const sourceWords = _.orderBy(arabicWords[currentIndex].words, ['orderKey']);
    return {
      targetWords,
      accepts,
      sourceWords,
      checkIt: false,
    };
  }
  handleDrop = (objDropped, objElem) => {
    const { targetWords, sourceWords } = this.state;
    const newTW = targetWords.map(word => {
      return word.english === objDropped.word.english 
        ? {...word, copied: objElem.word}
        : word;
      }
    );
    const newSW = sourceWords.map(word => word.english !== objElem.word.english ? word : {...word, image: null});
    this.setState({
      targetWords: newTW,
      sourceWords: newSW,
    });
  }
  resetImage = (resetWord) => {
    const { targetWords, sourceWords } = this.state;
    
    const newTW = targetWords.map(tw => {
      
      return tw.english !== _.get(resetWord,['english'])
        ? tw
        : {...tw, copied: null};
    });
    
    const newSW = sourceWords.map(sw => {
      return sw.english === _.get(resetWord,['copied', 'english']) ? {...sw, image: resetWord.copied.image} : sw
    });
    this.setState({
      targetWords: newTW,
      sourceWords: newSW,
    })
  }
  checkValues = () => {
    const { targetWords } = this.state;
    const updTW = targetWords.map(tw => {
      if (_.get(tw, ['copied', 'english'], '') !== tw.english) {
        return {...tw, error: true}
      } else {
        return {...tw, error: false};
      }
    });
    
    this.setState({
      targetWords: updTW,
      checkIt: true,
    });
  }
  nextSetWords = () => {
    const { currentIndex } = this.state;
    const newIndex = currentIndex + 1;
    const resetValues = this.resetInitiateValues(newIndex); 
    this.setState({
      currentIndex: newIndex,
      ...resetValues,
    });
  }
  setIndexFilter = (ev) => {
    const newIndex = ev.target.value;
    // const resetValues = this.resetInitiateValues(newIndex); 
    this.setState({
      currentIndex: newIndex,
    })
  }
  restartLetter = () => {
    const currentIndex = 0;
    const resetValues = this.resetInitiateValues(currentIndex); 
    this.setState({
      currentIndex,
      ...resetValues,
    });
  }
  render() {
    const { targetWords, sourceWords, accepts, currentIndex, checkIt } = this.state;
    const { classes } = this.props;
    return <DndProvider options={HTML5toTouch}>
      <Grid container>
        <Grid md="auto" item xs={12} sm={6}>
          <div className="instruction">Drag the picture to the correct box and click on Check It or Next Button.</div>
          <div className={classes.filterLtr}>
          <Select
            onChange={this.setIndexFilter}
            value={currentIndex}
            >
            {arabicWords && arabicWords.map((sel, index) => 
            <MenuItem
              key={index}
              value={index}
              className={classes.menuClass}
              >{sel.arabic}</MenuItem>)}
          </Select></div>
          <div className={`${classes.letterTitle} arabic-font`}>{arabicWords[currentIndex].arabic}</div>
        </Grid>
        <Grid md="auto" item xs={6} sm={3}>
          <div style={{textAlign: 'center', padding: '3px'}}><Button
            style={{backgroundColor: 'green', marginRight: '5px'}}
            variant="contained" color="primary"
            startIcon={<HowToReg />}
            onClick={this.checkValues}
            >Check It</Button></div>
          {sourceWords && sourceWords.map((word, index) =>
            <WordImage key={word.english} word={word} index={index} />
          )}
        </Grid>
        <Grid md="auto" item xs={6} sm={3}>
          <div style={{textAlign: 'center', padding: '3px'}}>
            {currentIndex < (arabicWords.length - 1) && <Button
              variant="contained" color="primary"
              startIcon={<NavigateNext />}
              onClick={this.nextSetWords}
              >Next</Button>}<Button
            variant="contained" color="primary"
            style={{backgroundColor: 'blue', marginLeft: '5px'}}
            startIcon={<Refresh />}
            onClick={this.restartLetter}
            >Restart</Button></div>
          {targetWords && targetWords.map((word, index) => <Grid key={_.get(word, ['english'], index)} container>
            <Grid item>
              <div style={{textAlign: 'center',
                marginBottom: '3px', border: '1px solid green', maxWidth: '200px'}}>
                <div style={{ backgroundColor: 'yellow', fontSize: '2em'}} className="arabic-font">{word.arabic}</div>
                <WordTitle accepts={_.get(word, ['copied','image']) ? [] : accepts}
                  onReset={this.resetImage}
                  onDrop={this.handleDrop} word={word} index={index} />
              </div>
            </Grid>
            <Grid item>
              <div style={{ padding: '30px 0px 0px 0px' }}>
                {checkIt && ((_.get(word, ['error'], false))
                  ? <div style={{ color: 'red' }}><ErrorRounded />Wrong</div>
                  : <div style={{ color: 'green' }}><CheckCircle />Right</div>)}
              </div>
            </Grid>
          </Grid>)}
        </Grid>
      </Grid>
    </DndProvider>
  }
}

export default withStyles(styles)(ExerciseOne);
