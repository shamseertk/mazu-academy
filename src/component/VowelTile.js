import { Card, CardContent, IconButton } from '@mui/material';

import { PlayArrowRounded } from '@mui/icons-material';
import _ from 'lodash';

function playTheLetter(audiofile){
  const audio = new Audio(require(`../audio/vowel/${audiofile}`));
  audio.play();
}

function VowelTile(props){
  
  return (
    <Card className="vowelRoot">
      <CardContent style={{textAlign: 'right', width: '100%', padding: '6px'}}>
        <div className="letterTitle arabic-font">{props.letter.arabic}</div>
        <div className="boxContainer">
        {_.get(props.letter, ['harakat', 'letters'],'').split(' ').map((haraka, index) => <div
          key={`${haraka}`} style={{display: 'flex', flexDirection: 'column'}}>
          <div className="gridBox arabic-font">{haraka}</div>
          <div className="gridBoxButton"><IconButton
            style={{width: '5px', height: '5px'}}
            onClick={() => playTheLetter(_.get(props.letter, ['harakat', 'audio'],'').split(' ')[index])}
            size="large"><PlayArrowRounded /></IconButton></div>
        </div>)}
        </div>
      </CardContent>
    </Card>
  );
}

export default VowelTile;
