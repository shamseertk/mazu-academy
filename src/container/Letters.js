import React from 'react';
import { alphabets, LEARNED_SO_FAR } from '../utils/alphabets';
import AlphabetTile from '../component/AlphabetTile';
import { Grid } from '@material-ui/core';
import SubNav from '../component/common/SubNav';

function Letters(props) {
  const alphabetsUpdated = alphabets.slice(0, LEARNED_SO_FAR);
  return <React.Fragment>
    <SubNav pageTitle="Level1 &#8608; All Alphabets" />
    <div className="container">
      <Grid
          container
          direction="row-reverse"
          justify="space-around"
          alignItems="flex-start"
        >
        {alphabetsUpdated && alphabetsUpdated.map(letter=> <AlphabetTile key={letter.letter} letter={letter} />)}
      </Grid>
    </div>
  </React.Fragment>
}

export default Letters;
