import React from 'react';
import { Card, CardMedia, CardActionArea, makeStyles, CardContent, Grid, Paper, IconButton, Button } from '@material-ui/core';
import { PlayArrowRounded } from '@material-ui/icons';
import _ from 'lodash';

const styles = makeStyles({
  root: {
    maxWidth: '100%',
    marginBottom: '8px',
    display: 'flex',
    justifyContent: 'space-between',
  },
  letterTitle: {
    fontSize: '30px',
    color: 'blue',
    textAlign: 'center',
    backgroundColor: '#faf0dd',
    marginBottom: '10px',
  },
  gridBox: {
    border: '1px solid #bca234',
    padding: '10px 15px',
    textAlign: 'center',
    margin: '0px 10px 0px 10px',
    fontSize: '2em',
  },
  gridBoxButton: {
    padding: '0px 15px',
    textAlign: 'center',
    margin: '0px 10px 0px 10px',
  },
  boxContainer: {
    width: '100%',
    margin: 'auto',
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    flexDirection:'row-reverse',
  },
  word: {
    margin: '10px 0px 0px 0px',
    fontSize: '3em',
    textAlign: 'center',
    backgroundColor: '#afd275'
  }
});

function playTheLetter(audiofile){
  const audio = new Audio(require(`../audio/vowel/${audiofile}`));
  audio.play();
}

function VowelTile(props){
  const classes = styles();
  
  return <Card className={classes.root}>
    <CardContent style={{textAlign: 'right', width: '100%', padding: '6px'}}>
      <div className={classes.letterTitle}>{props.letter.arabic}</div>
      <div className={classes.boxContainer}>
      {_.get(props.letter, ['harakat', 'letters'],'').split(' ').map((haraka, index) => <div style={{display: 'flex', flexDirection: 'column'}}>
        <div className={classes.gridBox}>{haraka}</div>
        <div className={classes.gridBoxButton}><IconButton style={{width: '5px', height: '5px'}}
          onClick={() => playTheLetter(_.get(props.letter, ['harakat', 'audio'],'').split(' ')[index])}
        ><PlayArrowRounded /></IconButton></div>
      </div>)}
      </div>
    </CardContent>
  </Card>
}

export default VowelTile;
