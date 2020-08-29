import React from 'react';
import { withStyles, Button, } from '@material-ui/core';
import _ from 'lodash'
import { generateRandomNumber, QUESTION_TYPES } from '../../utils/utils';
import DragDrop from '../common/DragDrop/DragDrop';
import { NavigateNext } from '@material-ui/icons';
import { arabicRelations } from '../../utils/data/relationship';

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

class FamilyExercise extends React.Component {
  constructor(props) {
    super(props);
    const itemsPerPage = 4;
    const resetValues = this.getInitiateValues(itemsPerPage);
    
    this.state = {
      itemsPerPage,
      ...resetValues
    }
  }
  getInitiateValues = (itemsPerPage) => {
    const numbersToTestFiltered = JSON.parse(JSON.stringify(arabicRelations));
    const numbersToTest = numbersToTestFiltered.splice(
      generateRandomNumber(numbersToTestFiltered.length - itemsPerPage), itemsPerPage);
    const arrNumbers = Object.keys(QUESTION_TYPES);
    const sourceIndex = generateRandomNumber(arrNumbers.length);
    const SRC_QSTN_TYPE = arrNumbers[sourceIndex];
    arrNumbers.splice(sourceIndex, 1);
    const TRGT_QSTN_TYPE = arrNumbers[0];
    
    const sourceData = _.orderBy(numbersToTest.map(num => ({
      label: num[QUESTION_TYPES[SRC_QSTN_TYPE]],
      itemId: `id-${num.english}`,
      orderKey: generateRandomNumber(200) })), ['orderKey']);
    const targetData = _.orderBy(numbersToTest.map(num => ({
      label: num[QUESTION_TYPES[TRGT_QSTN_TYPE]],
      itemId: `id-${num.english}`,
      orderKey: generateRandomNumber(200) })), ['orderKey']);
    const accepts = numbersToTest.map(num => `id-${num.english}`);

    return {
      sourceData,
      targetData,
      accepts,
      displayError: false,
    };
  }
  resetBack = (resetWord) => {
    const { targetData, sourceData } = this.state;
    const newTW = targetData.map(tw => {
      return tw.itemId !== _.get(resetWord,['itemId'])
        ? tw
        : {...tw, copied: null};
    });
    const newSW = sourceData.map(sw => {
      return sw.itemId === _.get(resetWord,['copied', 'itemId']) ? {...sw, label: resetWord.copied.label} : sw
    });
    this.setState({
      targetData: newTW,
      sourceData: newSW,
    })
  }
  checkValues = () => {
    const { targetData } = this.state;
    const updTW = targetData.map(tw => {
      if (_.get(tw, ['copied', 'itemId'], '') !== tw.itemId) {
        return {...tw, error: true}
      } else {
        return {...tw, error: false};
      }
    });
    
    this.setState({
      targetData: updTW,
      displayError: true,
    });
  }
  nextSetWords = () => {
    const { itemsPerPage } = this.state;
    const resetValues = this.getInitiateValues(itemsPerPage);
    this.setState({
      ...resetValues,
    });
  }
  handleDrop = (objDropped, objElem) => {
    const { targetData, sourceData } = this.state;
    const newTW = targetData.map(dt => {
      return dt.itemId === _.get(objDropped, ['targetSrc', 'itemId'])
        ? {...dt, copied: objElem.objSource}
        : dt;
      }
    );
    
    const newSW = sourceData.map(dt => dt.itemId !== objElem.objSource.itemId ? dt : {...dt, label: null});
    this.setState({
      targetData: newTW,
      sourceData: newSW,
    });
  }
  render() {
    const { sourceData, targetData, accepts, displayError } = this.state;
    return <React.Fragment>
      <Button
        variant="contained" color="primary"
        startIcon={<NavigateNext />}
        onClick={this.nextSetWords}
        >Next</Button>
       <DragDrop
          instruction="Drag it to correct answer"
          sourceData={sourceData}
          targetData={targetData}
          accepts={accepts}
          displayError={displayError}
          onDropTarget={this.handleDrop}
          checkAnswers={this.checkValues}
          resetBack={this.resetBack}
        />
    </React.Fragment>
  }
}

export default withStyles(styles)(FamilyExercise);
