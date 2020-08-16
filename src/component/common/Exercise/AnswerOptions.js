import React from 'react';
import { withStyles, FormControlLabel, Radio,
  RadioGroup } from '@material-ui/core';
const styles = () => ({
  label: {
    fontSize: '1em',
  },
});

function AnswerOptions(props){
  const { classes, options, handleAnswerOptionClick, optionValue, optionLabel } = props;
  
  return <React.Fragment>
    <RadioGroup row style={{ justifyContent: 'space-between', padding: '10px' }}>
      {options && options.map(opt => <FormControlLabel
        key={optionValue ? opt[optionValue] : opt}
        onChange={handleAnswerOptionClick}
        classes={{ label: classes.label }}
        control={<Radio />}
        value={optionValue ? opt[optionValue] : opt}
        label={optionLabel ? opt[optionLabel] : opt} />)}
    </RadioGroup>
  </React.Fragment>;
}

export default withStyles(styles)(AnswerOptions);
