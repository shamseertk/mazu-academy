import React from 'react';
import { withStyles, Dialog, DialogContent, DialogTitle } from '@material-ui/core';
import Header from '../component/common/Header';
import { learnedAlphabets } from '../utils/alphabets';

const style = () => ({
  highlighted: {
    height: '70px',
    width: '70px',
    border: '1px solid #abc234',
    cursor: 'pointer',
  },
  dialogTitle: {
    height: '40px',
    width: '40px',
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
      <Header pageTitle="All Alphabets" />
      <div className="container">
      <div style={{display: 'flex', flexDirection: 'row-reverse', flexWrap: 'wrap', width: '100%'}}>
        {learnedAlphabets && learnedAlphabets.map(
          (alphabet, index) => {
            return <img
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
              style={{ textAlign:'center' }}
              ><img
              className={classes.dialogTitle}
              src={require(`../images/alphabets/${learnedAlphabets[selectedIndex].image}`)}
              alt="alphabet"
              /></DialogTitle>
          <DialogContent>
          <iframe
            title="Alphabet Writing"
            width="100%"
            height="300px"
            src={`https://www.youtube.com/embed/0kMyyfL0LTA?controls=0&start=${learnedAlphabets[selectedIndex].writing.start}
              &end=${learnedAlphabets[selectedIndex].writing.end}&autoplay=1&mute=1`} frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </DialogContent>
        </Dialog>
      </div>
    </React.Fragment>
  }
}

export default withStyles(style)(Writing);
