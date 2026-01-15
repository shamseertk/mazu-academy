import React from 'react';
import { alphabets, LEARNED_SO_FAR } from '../utils/alphabets';
import AlphabetTile from '../component/AlphabetTile';
import { Grid } from '@mui/material';
import SubNav from '../component/common/SubNav';

import PageTitle from '../component/common/PageTitle';

function Letters(props) {
  const alphabetsUpdated = alphabets.slice(0, LEARNED_SO_FAR);
  return (
    <React.Fragment>
      <SubNav />
      <div className="container">
        <PageTitle pageTitle="Level1 &#8608; All Alphabets" />
        <div className="instruction">
          This page shows all the Arabic alphabets, click on the Read It button to hear how it pronounces.</div>
        <Grid
          container
          direction="row-reverse"
          justifyContent="space-around"
          alignItems="flex-start"
        >
          {alphabetsUpdated && alphabetsUpdated.map(letter => <AlphabetTile key={letter.letter} letter={letter} />)}
        </Grid>
      </div>
    </React.Fragment>
  );
}

export default Letters;
