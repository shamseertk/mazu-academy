import React from 'react';

class FunLevelOne extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      brushColor: 'green'
    };
  }
  eraseWindow = () => {
    this.saveableCanvas.clear();
  }
  saveImage = () => {
    const d = this.saveableCanvas.canvasContainer.children[1].toDataURL();
    const w = window.open('about:blank', 'Your Drawing');
    const img = require("../images/fun/fun-rabbit1.png");
    w.document.write("<img src='"+ d +"' style='background-image: url( " + img + "); background-size: contain' alt='Exporting'/>");
  }
  render() {
    return (
      <React.Fragment>
        <div style={{display: 'flex', justifyContent: 'center', overflow:'scroll'}}>
          <div style={{border: '2px solid #4f111d'}}>{/* <Hidden mdUp>
            <Button variant="contained" color="primary"
              onClick={this.eraseWindow}
              startIcon={<Backspace />}
              >Erase All</Button>
            {/* <CanvasDraw
              ref={canvasDraw => (this.saveableCanvas = canvasDraw)}
              lazyRadius={0}
              brushColor={brushColor}
              brushRadius={3}
              imgSrc={require("../images/fun/fun-rabbit1.png")}
              canvasWidth="350px"
              canvasHeight="330px"
              catenaryColor={brushColor}
              /> 
          </Hidden>
          <Hidden mdDown>
            <Button variant="contained" color="primary"
              onClick={this.eraseWindow}
              startIcon={<Backspace />}
              >Erase All</Button>
            {/* <CanvasDraw
              ref={canvasDraw => (this.saveableCanvas = canvasDraw)}
              lazyRadius={0}
              brushColor={brushColor}
              brushRadius={3}
              imgSrc={require("../images/fun/fun-rabbit1.png")}
              canvasWidth="560px"
              canvasHeight="530px"
              catenaryColor={brushColor}
              /> 
          </Hidden> */}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default FunLevelOne;
