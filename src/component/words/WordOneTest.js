import React from 'react';
import { alphabets } from '../../utils/alphabets';
import ExcerciseWordOne from '../ExcerciseWordOne';

class WordOneTest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allAlphabets: JSON.parse(JSON.stringify(alphabets)),
    }
  }
  render() {
    const { allAlphabets } = this.state;
    return <React.Fragment>
      <ExcerciseWordOne
        data={allAlphabets}
        />
    </React.Fragment>
  }
}

export default WordOneTest;