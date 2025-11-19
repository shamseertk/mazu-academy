import React from 'react';
import { Button } from '@mui/material';

import { arabicNumbers, convertNumberToAR } from '../../utils/numbers';
import _ from 'lodash'
import { generateRandomNumber, NUMBER_QSTN_TYPES } from '../../utils/utils';
import DragDrop from '../common/DragDrop/DragDrop';
import { NavigateNext } from '@mui/icons-material';

class NumberExercise extends React.Component {
  constructor(props) {
    super(props);
    const maxNumber = 10;
    const itemsPerPage = 4;
    const resetValues = this.getInitiateValues(maxNumber, itemsPerPage);
    
    this.state = {
      itemsPerPage,
      maxNumber,
      ...resetValues
    }
  }
  getInitiateValues = (maxNumber, itemsPerPage) => {
    const numbersToTestFiltered = arabicNumbers.filter(arNum => arNum.number < maxNumber);
    const numbersToTest = numbersToTestFiltered.splice(generateRandomNumber(numbersToTestFiltered.length - itemsPerPage), itemsPerPage);
    const arrNumbers = Object.keys(NUMBER_QSTN_TYPES);
    const sourceIndex = generateRandomNumber(arrNumbers.length);
    const SRC_QSTN_TYPE = arrNumbers[sourceIndex];
    arrNumbers.splice(sourceIndex, 1);
    const trgtIndex = generateRandomNumber(arrNumbers.length);
    const TRGT_QSTN_TYPE = arrNumbers[trgtIndex];

    const sourceData = _.orderBy(numbersToTest.map(num => ({
      label: NUMBER_QSTN_TYPES[SRC_QSTN_TYPE] === NUMBER_QSTN_TYPES.ARABIC_NUMBER
        ? convertNumberToAR(num.number)
        : num[NUMBER_QSTN_TYPES[SRC_QSTN_TYPE]],
        itemId: `id-${num.number}`,
      orderKey: generateRandomNumber(200) })), ['orderKey']);
    const targetData = _.orderBy(numbersToTest.map(num => ({
      label: NUMBER_QSTN_TYPES[TRGT_QSTN_TYPE] === NUMBER_QSTN_TYPES.ARABIC_NUMBER
        ? convertNumberToAR(num.number)
        : num[NUMBER_QSTN_TYPES[TRGT_QSTN_TYPE]],
        itemId: `id-${num.number}`,
      orderKey: generateRandomNumber(200) })), ['orderKey']);
    const accepts = numbersToTest.map(num => `id-${num.number}`);

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
    const { maxNumber, itemsPerPage } = this.state;
    const resetValues = this.getInitiateValues(maxNumber, itemsPerPage);
    this.setState({
      ...resetValues,
    });
  }
  // FIX: Implement logic to handle item swapping and returning displaced item to source
  handleDrop = (objDropped, objElem) => {
    const { targetData, sourceData } = this.state;
    let displacedItem = null; // Variable to hold the item being kicked out of the target slot

    // 1. Update targetData (newTW) and capture the displaced item (if any)
    const newTW = targetData.map(dt => {
      if (dt.itemId === _.get(objDropped, ['targetSrc', 'itemId'])) {
        // This is the target slot
        displacedItem = dt.copied; // Capture the item currently in the slot
        return {...dt, copied: objElem.objSource}; // Place the new item
      }
      return dt;
    });

    // 2. Update sourceData (newSW) for both the dropped and the displaced item
    const newSW = sourceData.map(sw => {
      // Hide the newly dropped item from the source by setting its label to null
      if (sw.itemId === objElem.objSource.itemId) {
        return {...sw, label: null};
      }
      // If an item was displaced, return its original label to the source list to make it draggable again
      if (displacedItem && sw.itemId === displacedItem.itemId) {
        return {...sw, label: displacedItem.label}; 
      }
      return sw;
    });

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

export default NumberExercise;