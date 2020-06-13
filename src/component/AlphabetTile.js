import React from 'react';
import { Card, CardMedia, CardActionArea, makeStyles } from '@material-ui/core';
import { PlayArrowRounded } from '@material-ui/icons';

const styles = makeStyles({
  root: {
    maxWidth: '150px',
    marginBottom: '8px',
  }
});

function playTheLetter(audiofile){
  const audio = new Audio(require(`../audio/${audiofile}.m4a`));
  audio.play();
}

function AlphabetTile(props){
  const img = require(`../images/alphabets/${props.letter.image}`);
  const classes = styles();
  return <Card className={classes.root}>
    <CardMedia
      component="img"
      src={img} />
    <CardActionArea style={{textAlign: 'center', backgroundColor: '#9ee7e7', display: 'flex'}} onClick={() => playTheLetter(props.letter.letter)}>
      <PlayArrowRounded /><div>Read It</div>
    </CardActionArea>
  </Card>
}

export default AlphabetTile;
