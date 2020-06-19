import React from 'react';
import { Card, CardMedia, CardActionArea, makeStyles, CardContent, Grid, Paper } from '@material-ui/core';
import { PlayArrowRounded } from '@material-ui/icons';
import _ from 'lodash';

const styles = makeStyles({
  root: {
    maxWidth: '100%',
    marginBottom: '8px',
    display: 'flex',
    justifyContent: 'space-between',
  },
  '@media screen and (min-width: 1250px)': {
    root: {
      maxWidth: '100%'
    }
  },
  letterTitle: {
    fontSize: '40px',
    color: 'blue',
    textAlign: 'center',
    backgroundColor: '#faf0dd',
    marginBottom: '10px',
  },
  gridBox: {
    border: '1px solid #bca234',
    padding: '10px 35px',
    textAlign: 'center',
    margin: '0px 10px 0px 10px',
    fontSize: '2.5em',
  },
  boxContainer: {
    width: '100%',
    margin: 'auto',
    display: 'flex',
    justifyContent: 'space-around',
  },
  word: {
    margin: '10px 0px 0px 0px',
    fontSize: '3em',
    textAlign: 'center',
    backgroundColor: '#afd275'
  }
});

function playTheLetter(audiofile){
  const audio = new Audio(require(`../audio/${audiofile}.m4a`));
  audio.play();
}

function WordTile(props){
  const img = require(`../images/words/${props.letter.words[0].image}`);
  const classes = styles();
  
  return <Card className={classes.root}>
    <CardContent style={{textAlign: 'right', width: '100%'}}>
      <div className={classes.letterTitle}>{props.letter.arabic}</div>
      <div className={classes.boxContainer}>
        <div className={classes.gridBox}>
          {_.get(_.get(props.letter, ['harakat'], '').split(' '), ['2'], '')}
        </div>
        <div className={classes.gridBox}>
        {_.get(_.get(props.letter, ['harakat'], '').split(' '), ['1'], '')}
        </div>
        <div className={classes.gridBox}>
        {_.get(_.get(props.letter, ['harakat'], '').split(' '), ['0'], '')}
        </div>
      </div>
      <Paper elevation={10} className={classes.word}>
        {props.letter.words[0].separate.split('').map(lttr => lttr === props.letter.arabic 
          ? <span style={{color: 'red'}}>{lttr}</span> 
          : lttr)}
      </Paper>
      {/* {props.letter.words[0].together.split('').map(lttr => lttr === 'س' ? <span style={{color: 'green'}}>{lttr}</span> : lttr)} */}
    </CardContent>
    <CardMedia
      style={{width: '50%', height: '50%'}}
      component="img"
      src={img} />
  </Card>
}

export default WordTile;
