import React from 'react';
import { Typography, Card, CardContent } from '@mui/material';

import { vowel } from '../utils/vowel';

class LongVowel extends React.Component {
  render() {
    return <React.Fragment>
      <h3>Other Vowels</h3>
      <div>
        <div className="instruction">
          <Typography component="p">As mentioned, Long vowels are made by using the letters
            <span className="arabic">(ا،ي٬و)</span>. These letters come after the letter with 
            <span className="highlighter">Fat'ha</span> <span className="arabic">(فَتْحَة)</span>, 
            <span className="highlighter">Kasra</span> <span className="arabic">(كَسْرَة)</span> and 
            <span className="highlighter">Damma</span> <span className="arabic">(ضَمَّة)</span> respectively.</Typography>
        </div>
        <Typography component="h2" align="center">Eg:- With <span className="highlighter">Fat'ha</span> <span className="arabic">(فَتْحَة)</span></Typography>

        <div style={{display: 'flex', flexDirection: 'row-reverse', justifyContent: 'center'}}>
          {vowel && vowel.map(vwl => <Card className="root" key={`${vwl.letter}${vwl.longFath}`}>
            <CardContent style={{textAlign: 'right', width: '100%', padding: '6px'}}>
              <div className="letterTitle arabic-font">{vwl.letter}</div>
              <div className="boxContainer">
                <div className="gridBox arabic-font">{vwl.longFath}</div>
              </div>
            </CardContent>
          </Card>)}
        </div>
        <Typography component="h2" align="center">Eg:- With <span className="highlighter">Kasra</span> <span className="arabic">(كَسْرَة)</span></Typography>
        <div style={{display: 'flex', flexDirection: 'row-reverse', justifyContent: 'center'}}>
          {vowel && vowel.map(vwl => <Card className="root" key={`${vwl.letter}${vwl.longKasra}`}>
            <CardContent style={{textAlign: 'right', width: '100%', padding: '6px'}}>
              <div className="letterTitle arabic-font">{vwl.letter}</div>
              <div className="boxContainer">
                <div className="gridBox arabic-font">{vwl.longKasra}</div>
              </div>
            </CardContent>
          </Card>)}
        </div>

        <Typography component="h2" align="center">Eg:- With <span className="highlighter">Damma</span> <span className="arabic">(ضَمَّة)</span></Typography>
        <div style={{display: 'flex', flexDirection: 'row-reverse', justifyContent: 'center'}}>
          {vowel && vowel.map(vwl => <Card className="root" key={`${vwl.letter}${vwl.longDhamma}`}>
            <CardContent style={{textAlign: 'right', width: '100%', padding: '6px'}}>
              <div className="letterTitle arabic-font">{vwl.letter}</div>
              <div className="boxContainer">
                <div className="gridBox} arabic-font">{vwl.longDhamma}</div>
              </div>
            </CardContent>
          </Card>)}
        </div>

        <div className="instruction">
          <Typography component="p">The additional vowels are <span className="highlighter">Thanveen and Shadh</span>. Thanveen is just double 
          <span className="highlighter">Harakat</span><span className="arabic">(حَرَكَة)</span>. And Shadh is adding a shadh mark just before regular 
          <span className="highlighter">Harakat</span><span className="arabic">(حَرَكَة)</span> except 
          <span className="highlighter">Sukoon</span><span className="arabic">(سُكون)</span></Typography>
        </div>

        <Typography component="h2" align="center">Eg:- With <span className="highlighter">Thanveen</span></Typography>
        <div style={{display: 'flex', flexDirection: 'row-reverse', justifyContent: 'center'}}>
          {vowel && vowel.map(vwl => <Card className="root" key={`${vwl.letter}${vwl.thanveen}`}>
            <CardContent style={{textAlign: 'right', width: '100%', padding: '6px'}}>
              <div className="letterTitle arabic-font">{vwl.letter}</div>
              <div className="boxContainer">
                <div className="gridBox arabic-font">{vwl.thanveen}</div>
              </div>
            </CardContent>
          </Card>)}
        </div>

        <Typography component="h2" align="center">Eg:- With <span className="highlighter">Shadh</span></Typography>
        <div style={{display: 'flex', flexDirection: 'row-reverse', justifyContent: 'center'}}>
          {vowel && vowel.map(vwl => <Card className="root" key={`${vwl.letter} ${vwl.shadh}`}>
            <CardContent style={{textAlign: 'right', width: '100%', padding: '6px'}}>
              <div className="letterTitle arabic-font">{vwl.letter}</div>
              <div className="boxContainer">
                <div className="gridBox arabic-font">{vwl.shadh}</div>
              </div>
            </CardContent>
          </Card>)}
        </div>
      </div>
    </React.Fragment>
  }
}


export default LongVowel;
