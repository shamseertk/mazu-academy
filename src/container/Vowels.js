import React from 'react';
import { alphabets, LEARNED_SO_FAR } from '../utils/alphabets';
import VowelTile from '../component/VowelTile';
import { Grid, Typography } from '@material-ui/core';
import SubNav from '../component/common/SubNav';
import LongVowel from '../component/LongVowel';
import SimpleTabs from '../component/common/SimpleTabs';

class Vowels extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'short',
    }
  }
  selectTab = (evt, val) => {
    this.setState({
      selectedTab: val,
    });
  }
  render() {
    const alphabetsUpdated = alphabets.slice(0, LEARNED_SO_FAR);
    const { selectedTab } = this.state;
    return <React.Fragment>
      <SubNav pageTitle="Level1 &#8608; Vowels" />
      <div className="container">
        <div className="instruction">
          <Typography component="p">The vowels are made in Arabic by using certain marks called 
            <span className="highlighter">Harakat</span><span className="arabic">(حَرَكَة)</span>. Long vowels are made by using the letters
            <span className="arabic">(ا،ي٬و)</span>.</Typography>
          <Typography component="p">The main <span className="highlighter">Harakats</span><span className="arabic">(حَرَكَة)
            </span> are <span className="highlighter">Fat'ha</span> <span className="arabic">(فَتْحَة)</span>, 
            <span className="highlighter">Damma</span> <span className="arabic">(ضَمَّة)</span>, 
            <span className="highlighter">Kasra</span> <span className="arabic">(كَسْرَة)</span> and
            finally <span className="highlighter">Sukoon</span><span className="arabic">(سُكون)</span>
            .</Typography>
          <Typography component="p">Additional vowel sounds are <span className="highlighter">Thanveen and Shadd</span> </Typography>
        </div>
        <SimpleTabs
          selectedTab={selectedTab}
          handleChangeTab={this.selectTab}
          tabsInfo={[{
            label: 'Short Vowel',
            value: 'short',
            component: <React.Fragment><h3>Short Vowel</h3>
              <Grid
                container
                direction="row-reverse"
                justify="space-around"
                alignItems="flex-start"
              >
                {alphabetsUpdated && alphabetsUpdated.map(letter=> <VowelTile key={letter.letter} letter={letter} />)}
              </Grid></React.Fragment>
          }, {
            label: 'Other Vowels',
            value: 'other',
            component: <LongVowel />
          }]}
          />
      </div>
    </React.Fragment>
  }
}
  

export default Vowels;
