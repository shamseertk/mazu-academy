import React from 'react';
import { Card, CardMedia, CardActionArea, makeStyles, Button } from '@material-ui/core';
import { PlayArrowRounded } from '@material-ui/icons';

const styles = makeStyles({
  root: {
    maxWidth: '220px',
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
    <CardActionArea style={{textAlign: 'center'}}>
      <Button className={classes.buttonStyle}
        color="primary" onClick={() => playTheLetter(props.letter.letter)}
        startIcon={<PlayArrowRounded />}
        >Read It</Button>
    </CardActionArea>
  </Card>
}

export default AlphabetTile;
