import React from 'react';
import { withStyles, Dialog, DialogContent, DialogTitle } from '@material-ui/core';
import { learnedAlphabets } from '../utils/alphabets';
import SubNav from '../component/common/SubNav';

const style = () => ({
  highlighted: {
    height: '70px',
    width: '70px',
    border: '1px solid #abc234',
    cursor: 'pointer',
  },
});

class Writing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0,
      writingPopup: false,
    }
  }
  openWriting = (index) => {
    this.setState({
      writingPopup: true,
      selectedIndex: index,
    });
  }
  closeWriting = () => {
    this.setState({
      writingPopup: false,
    })
  }
  render() {
    const { classes } = this.props;
    const { writingPopup, selectedIndex } = this.state;
    return <React.Fragment>
      <SubNav pageTitle="Level1 &#8608; Learn to Write" />
      <div className="container">
      <h3>Instruction</h3>
      <p>Click on each letter to see how you can write the alphabet. Watch carefully, how the alphabet can be written within lines, from starting to the end.</p>
      <div style={{display: 'flex', flexDirection: 'row-reverse', justifyContent: 'center', flexWrap: 'wrap', width: '100%'}}>
        {learnedAlphabets && learnedAlphabets.map(
          (alphabet, index) => {
            return <img
              key={alphabet.letter}
              className={classes.highlighted}
              src={require(`../images/alphabets/${alphabet.image}`)}
              alt="alphabet"
              onClick={() => this.openWriting(index)}
              />
          }
        )}
        </div>
        <Dialog
          open={writingPopup}
          onClose={this.closeWriting}
          fullWidth
          >
            <DialogTitle
              style={{ textAlign:'center'}}
              ><span style={{fontSize: '40px'}}>{learnedAlphabets[selectedIndex].arabic}</span></DialogTitle>
          <DialogContent>
          <iframe
            title="Alphabet Writing"
            width="100%"
            height="340px"
            src={`https://www.youtube.com/embed/0kMyyfL0LTA?controls=0&start=${learnedAlphabets[selectedIndex].writing.start}
              &end=${learnedAlphabets[selectedIndex].writing.end}&autoplay=1&mute=1`} frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </DialogContent>
        </Dialog>
      </div>
    </React.Fragment>
  }
}

export default withStyles(style)(Writing);
