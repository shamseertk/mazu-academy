import React from 'react';
import { withStyles, Button, Grid } from '@material-ui/core';
import { DndProvider } from 'react-dnd-multi-backend';
import HTML5toTouch from 'react-dnd-multi-backend/dist/esm/HTML5toTouch';
import { arabicWords } from '../../../utils/words';
import SourceRender from './SourceRender';
import _ from 'lodash'
import { HowToReg, CheckCircle, ErrorRounded } from '@material-ui/icons';
import { generateRandomNumber } from '../../../utils/utils';
import TargetRender from './TargetRender';

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
  }
});

class DragDrop extends React.Component {
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
    const sourceWords = _.orderBy(arabicWords[currentIndex].words, ['orderKey']);
    return {
      targetWords,
      sourceWords,
      checkIt: false,
    };
  }
  handleDrop = (objDropped, objElem) => {
    const { targetData, sourceData } = this.state;
    const newTW = targetData.map(dt => {
      return dt.english === objDropped.word.english 
        ? {...dt, copied: objElem.word}
        : dt;
      }
    );
    const newSW = sourceData.map(word => word.english !== objElem.word.english ? word : {...word, image: null});
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
  restartLetter = () => {
    const currentIndex = 0;
    const resetValues = this.resetInitiateValues(currentIndex); 
    this.setState({
      currentIndex,
      ...resetValues,
    });
  }
  render() {
    const { classes, instruction, arabicTitle, checkAnswers, targetData, sourceData, elemLabel, itemId, onDropTarget,
      accepts, displayError, resetBack } = this.props;
    const lbl = elemLabel ? elemLabel : 'label';
    return <DndProvider options={HTML5toTouch}>
      <Grid container>
        <Grid md="auto" item xs={12} sm={6}>
          <div className="instruction">{instruction}</div>
          <div className={`${classes.letterTitle} arabic-font`}>{arabicTitle}</div>
        </Grid>
        <Grid md="auto" item xs={6} sm={3}>
          <div style={{textAlign: 'center', padding: '3px'}}><Button
            style={{backgroundColor: 'green', marginRight: '5px'}}
            variant="contained" color="primary"
            startIcon={<HowToReg />}
            onClick={checkAnswers}
            >Check It</Button></div>
          {sourceData && sourceData.map((eachSrc, index) =>
            <SourceRender key={eachSrc[lbl]
              ? typeof eachSrc[lbl] ==='string'
                ? eachSrc[lbl]
                : `SRC-D-${index}`
              : `SRC-D-${index}`} objSource={eachSrc} index={index} itemId={itemId} />
          )}
        </Grid>
        <Grid md="auto" item xs={6} sm={3}>
          {targetData && targetData.map((eachTgt, index) => <Grid key={
            typeof _.get(eachTgt, ['label'], index) === 'string' 
            ? _.get(eachTgt, ['label'], index)
            : index} container>
            <Grid item>
              <div style={{textAlign: 'center',
                marginBottom: '3px', border: '1px solid green', maxWidth: '200px'}}>
                <div style={{ backgroundColor: 'yellow', fontSize: '2em'}} className="arabic-font">{eachTgt.label}</div>
                <TargetRender accepts={_.get(eachTgt, ['copied','itemId']) ? [] : accepts} onResetBack={resetBack}
                  onDropTarget={onDropTarget}
                  targetSrc={eachTgt}
                  index={index}
                  />
              </div>
            </Grid>
            <Grid item>
              {displayError && <div style={{ padding: '30px 0px 0px 0px' }}>
                {_.get(eachTgt, ['error'], true)
                  ? <div style={{ color: 'red' }}><ErrorRounded />Wrong</div>
                  : <div style={{ color: 'green' }}><CheckCircle />Right</div>}
              </div>}
            </Grid>
          </Grid>)}
        </Grid>
      </Grid>
    </DndProvider>
  }
}

export default withStyles(styles)(DragDrop);
