import React from 'react';
import { Card, CardMedia, CardActionArea } from '@mui/material';
import { PlayArrowRounded } from '@mui/icons-material';

function playTheLetter(audiofile){
  const audio = new Audio(require(`../audio/${audiofile}.m4a`));
  audio.play();
}

function AlphabetTile(props){
  const img = require(`../images/alphabets/${props.letter.image}`);
  return <Card sx={{
    maxWidth: '100px',
    marginBottom: '8px',
  }}>
    <CardMedia
      component="img"
      src={img} />
    <CardActionArea style={{textAlign: 'center', backgroundColor: '#9ee7e7', display: 'flex'}} onClick={() => playTheLetter(props.letter.letter)}>
      <PlayArrowRounded /><div>Read It</div>
    </CardActionArea>
  </Card>
}

export default AlphabetTile;
