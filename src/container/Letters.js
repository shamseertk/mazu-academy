import React from 'react';
import { alphabets, LEARNED_SO_FAR } from '../utils/alphabets';
import AlphabetTile from '../component/AlphabetTile';
import Header from '../component/common/Header';
import { Grid } from '@material-ui/core';

function Letters() {
  const alphabetsUpdated = alphabets.slice(0, LEARNED_SO_FAR);
  return <React.Fragment>
    <Header pageTitle="All Alphabets" />
    <div className="container">
    <Grid
        container
        direction="row-reverse"
        justify="space-between"
        alignItems="flex-start"
      >
      {alphabetsUpdated && alphabetsUpdated.map(letter=> <AlphabetTile letter={letter} />)}
      </Grid>
    </div>
  </React.Fragment>
}

export default Letters;
