import React from 'react';
import { alphabets } from '../../utils/alphabets';
import ExerciseWordOne from '../ExerciseWordOne';

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
      <ExerciseWordOne
        data={allAlphabets}
        themeMode={this.props.themeMode}
      />
    </React.Fragment>
  }
}

export default WordOneTest;