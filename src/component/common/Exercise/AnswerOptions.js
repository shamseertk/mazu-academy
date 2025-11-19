import React from 'react';
import { FormControlLabel, Radio, RadioGroup } from '@mui/material';

const styles = {
  label: {
    fontSize: '1em',
  }};

function AnswerOptions(props){
  const { options, handleAnswerOptionClick, optionValue, optionLabel } = props;
  
  return <React.Fragment>
    <RadioGroup row style={{ justifyContent: 'space-between', padding: '10px' }}>
      {options && options.map(opt => <FormControlLabel
        key={optionValue ? opt[optionValue] : opt}
        onChange={handleAnswerOptionClick}
        classes={{ label: styles.label }}
        control={<Radio />}
        value={optionValue ? opt[optionValue] : opt}
        label={optionLabel ? opt[optionLabel] : opt} />)}
    </RadioGroup>
  </React.Fragment>;
}

export default AnswerOptions;
