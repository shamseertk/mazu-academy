import React from 'react';
import { alphabets } from '../utils/alphabets';
import AlphabetTile from '../component/AlphabetTile';
import Header from '../component/common/Header';
import { Grid } from '@material-ui/core';

function Letters() {
  return <React.Fragment>
    <Header pageTitle="All Alphabets" />
    <div className="container">
    <Grid
        container
        direction="row-reverse"
        justify="space-between"
        alignItems="flex-start"
      >
      {alphabets && alphabets.map(letter=> <AlphabetTile letter={letter} />)}
      </Grid>
    </div>
  </React.Fragment>
}

export default Letters;
