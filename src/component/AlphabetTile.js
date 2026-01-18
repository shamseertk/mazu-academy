import { Card, CardMedia, CardActionArea } from '@mui/material';
import { PlayArrowRounded } from '@mui/icons-material';

function playTheLetter(audiofile) {
  const audio = new Audio(require(`../audio/${audiofile}.m4a`));
  audio.play();
}

function AlphabetTile(props) {
  const img = require(`../images/alphabets/${props.letter.image}`);
  return <Card sx={{
    maxWidth: '100px',
    marginBottom: '8px',
    backgroundColor: 'var(--card-bg)', // Use variable for theme support
  }}>
    <CardMedia
      component="img"
      src={img}
      // Ensure image doesn't force a white background if it's transparent
      style={{ backgroundColor: 'transparent' }}
    />
    <CardActionArea
      style={{
        textAlign: 'center',
        backgroundColor: 'var(--tile-read-btn-bg)',
        color: 'var(--tile-read-btn-text)',
        display: 'flex'
      }}
      onClick={() => playTheLetter(props.letter.letter)}
    >
      <PlayArrowRounded /><div>Read It</div>
    </CardActionArea>
  </Card>
}

export default AlphabetTile;
