import React from 'react';

import Canvas from './Drawing/Canvas';

class WritingArea extends React.Component {
  render() {
    return (
      <div>
        <div>
          <Canvas themeMode={this.props.themeMode} /></div>
      </div>
    );
  }
}

export default WritingArea;
