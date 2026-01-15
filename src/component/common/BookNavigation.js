import React from 'react';
import { MobileStepper, Button, Select, MenuItem } from '@mui/material';

import { get } from 'lodash';

class BookNavigation extends React.Component {
  render() {
    const { stepperSteps, activeStep, clickNextButton, clickPrevButton, selectDropDown, selectOptions,
      selectLabelValue, selectedValue } = this.props;
      
    return <MobileStepper
      steps={stepperSteps}
      position="static"
      variant="text"
      activeStep={activeStep}
      nextButton={
        <Button
          onClick={clickNextButton}
          >Next</Button>
      }
      backButton={
        <React.Fragment>
          <Select
            onChange={selectDropDown}
            value={selectedValue}
            >
            {selectOptions && selectOptions.map(sel => 
            <MenuItem
              key={get(sel, [selectLabelValue.value])}
              value={get(sel, [selectLabelValue.value])}
              className="menuClass"
              >{get(sel, [selectLabelValue.label])}</MenuItem>)}
          </Select>
          <Button
            onClick={clickPrevButton}
            >Prev</Button>
        </React.Fragment>
      }
      />
  }
}

export default BookNavigation;
