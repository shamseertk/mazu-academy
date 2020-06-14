import React from 'react';
import { alphabets, LEARNED_SO_FAR } from '../utils/alphabets';
import WordTile from '../component/WordTile';
import { Grid } from '@material-ui/core';
import SubNav from '../component/common/SubNav';

function Letters(props) {
  const alphabetsUpdated = alphabets.slice(0, LEARNED_SO_FAR);
  return <React.Fragment>
    <SubNav pageTitle="Level1 &#8608; All Alphabets" />
    <div className="container">
        <WordTile letter={alphabetsUpdated[0]} />
    </div>
  </React.Fragment>
}

export default Letters;
