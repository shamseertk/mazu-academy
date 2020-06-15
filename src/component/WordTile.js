import React from 'react';
import { Card, CardMedia, CardActionArea, makeStyles, CardContent } from '@material-ui/core';
import { PlayArrowRounded } from '@material-ui/icons';

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
  }
});

function playTheLetter(audiofile){
  const audio = new Audio(require(`../audio/${audiofile}.m4a`));
  audio.play();
}

function WordTile(props){
  const img = require(`../images/words/apple.jpg`);
  const classes = styles();
  const str = props.letter.words[0].separate.replace('ا', match => <span style={{color: 'red'}}>ا</span>);
  console.log(JSON.stringify(str));
  
  return <Card className={classes.root}>
    <CardContent style={{textAlign: 'right', width: '100%'}}>
      <div className={classes.letterTitle}>{props.letter.arabic}</div>
      {props.letter.words[0].separate.split('').map(lttr => lttr === props.letter.arabic ? <span style={{color: 'red'}}>{lttr}</span> : lttr)}
      {props.letter.words[0].together.split('').map(lttr => lttr === 'س' ? <span style={{color: 'green'}}>{lttr}</span> : lttr)}
      <CardActionArea style={{textAlign: 'center', backgroundColor: '#9ee7e7', display: 'flex'}} onClick={() => playTheLetter(props.letter.letter)}>
      <PlayArrowRounded /><div>Read It</div>
    </CardActionArea>
    </CardContent>
    <CardMedia
      style={{width: '50%'}}
      component="img"
      src={img} />
  </Card>
}

export default WordTile;
