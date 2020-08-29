import React from 'react';
import { Button, withStyles, IconButton } from '@material-ui/core';
import { Backspace, Undo, FiberManualRecord } from '@material-ui/icons';
import CanvasDraw from 'react-canvas-draw';

const styles = () => ({
  buttonStyle: {
    margin: '4px 0px 0px 4px',
  },
  eraseButton: {
    backgroundColor: 'gray',
    '&:hover': {
      backgroundColor: 'red',
    }
  },
  writingPadWrapper: {
    border: '1px solid #000',
  }
});

class WritingArea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      brushColor: 'green',
    };
  }
  eraseWindow = () => {
    this.saveableCanvas.clear();
  }
  changeColorTo = (color) => {
    this.setState({
      brushColor: color,
    })
  }
  undoPaint = () => {
    this.saveableCanvas.undo();
  }
  render() {
    const { brushColor } = this.state;
    const { classes } = this.props;
    return <div className={classes.writingPadWrapper}>
      <Button
        className={`${classes.buttonStyle} ${classes.eraseButton}`} variant="contained" color="primary"
        onClick={this.eraseWindow}
        startIcon={<Backspace />}
        >Erase All</Button>
      <Button className={`${classes.buttonStyle} ${classes.eraseButton}`} variant="contained" color="primary"
        onClick={this.undoPaint}
        startIcon={<Undo />}
        >Undo</Button>
      <IconButton onClick={() => this.changeColorTo('green')}>
        <FiberManualRecord style={{backgroundColor: 'green'}} />
      </IconButton>
      <IconButton onClick={() => this.changeColorTo('red')}>
        <FiberManualRecord style={{backgroundColor: 'red'}} />
      </IconButton>
      <IconButton onClick={() => this.changeColorTo('blue')}>
        <FiberManualRecord style={{backgroundColor: 'blue'}} />
      </IconButton>
      <div style={{display: 'flex', justifyContent: 'center'}}><CanvasDraw
        ref={canvasDraw => (this.saveableCanvas = canvasDraw)}
        lazyRadius={0}
        brushColor={brushColor}
        brushRadius={3}
        imgSrc={require("../../images/writing/writingLines.png")}
        canvasWidth="640px"
        canvasHeight="208px"
        catenaryColor={brushColor}
        /></div>
    </div>
  }
}

export default withStyles(styles)(WritingArea);
