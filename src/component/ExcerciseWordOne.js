import React from 'react';
import { Card, CardContent, withStyles } from '@material-ui/core';
import _ from 'lodash';
import Highlighter from "react-highlight-words";
import { isCharTashkeel } from '../utils/utils';

const styles = () => ({
  question: {
    fontSize: '4em',
  },
  hideLetter: {
    //display: 'none',
    textDecoration: 'underline dashed #f00',
    color: '#fff',
    '&::selection': {
      backgroundColor: '#fff',
    }
  }
});

class ExcerciseWordOne extends React.Component {
  constructor(props) {
    super(props);
    const { data } = props;
    const indexMissingLetter = data[0].words[0].together.split('').findIndex((ltr, index) => {
      const boolRand = true; //Math.random() >= 0.5;
      console.log(ltr, !isCharTashkeel(ltr), boolRand);
      
      return !isCharTashkeel(ltr) && boolRand && index > 3;
      
      }
      );

      console.log(indexMissingLetter);
    const indexMissingLetterEndd = data[0].words[0].together.split('').findIndex((ltr, ind) => {
      //console.log(ltr, !isCharTashkeel(ltr), boolRand);
      
      return !isCharTashkeel(ltr) && ind > indexMissingLetter;
      
      }
      );
      const indexMissingLetterEnd = 6;
      console.log('===', indexMissingLetter, indexMissingLetterEnd, data[0].words[0].together.split('').length);
      const charToReplace = data[0].words[0].together.substring(indexMissingLetter, indexMissingLetterEnd);
    console.log('===', charToReplace);
    
    
    this.state = {
      data,
      indexLetter: 0,
      indexMissingLetter,
      indexMissingLetterEnd,
      charToReplace,
    }
  }
  render() {
    const { data, indexLetter, indexMissingLetter, charToReplace } = this.state;
    const { classes } = this.props;
    let wordIndex = -1;
    return <Card style={{textAlign: 'center'}}>
      <span>َأَس&#x200d;</span><span style={{color: 'white',}}>&#x200d;دٌ</span>
      <CardContent className={`${classes.question}  arabic-font`}>
        {_.map(data[indexLetter].words[0].together, word => {
          if (!isCharTashkeel(word)) {
            wordIndex++;
          }
          return (wordIndex === indexMissingLetter) 
            ? <span className={classes.hideLetter} key={word}>{word}</span>
            : <span>{word}</span>
          }
        )}
        <hr></hr>
        <Highlighter
          highlightClassName={classes.hideLetter}
          searchWords={[charToReplace]}
          autoEscape={true}
          textToHighlight={data[indexLetter].words[0].together}
          />
      </CardContent>
    </Card>
  }
}

export default withStyles(styles)(ExcerciseWordOne);
