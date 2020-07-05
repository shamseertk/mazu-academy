import React from 'react';
import SubNav from '../component/common/SubNav';
import { alphabets } from '../utils/alphabets';
import ExcerciseWordOne from '../component/ExcerciseWordOne';

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
      <SubNav pageTitle="Level1 &#8608; Word Exercise" />
      <ExcerciseWordOne
        data={allAlphabets}
        />
    </React.Fragment>
  }
}

export default WordOneTest;