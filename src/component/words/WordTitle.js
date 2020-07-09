import React from 'react';
import { DropTarget } from 'react-dnd';
import _ from 'lodash';
import { Button } from '@material-ui/core';

class WordTitle extends React.Component {
  render() {
    const {
      connectDropTarget,
      word,
      onReset,
      isOver,
      canDrop,
    } = this.props;
    const isActive = canDrop && isOver;
    const backgroundColor = isActive ? '#81d4fa' : null;
    return connectDropTarget(<div style={{backgroundColor: backgroundColor, minWidth: '150px', minHeight: '120px',
      textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'space-around'}}>
      {_.get(word, ['copied', 'image']) && <React.Fragment>
        <Button
          style={{backgroundColor: '#f34123', color: '#fff'}} onClick={()=>onReset(word)}>
            Back</Button>
      <img width="100"
      src={require(`../../images/words/${word.copied.image}`)} alt={word.arabic} />
      </React.Fragment>
      }
    </div>)
  }
}

export default DropTarget(
  (props) => props.accepts,
  {
    drop(props, monitor, component) {
      props.onDrop(props, monitor.getItem())
    },
  },
  (connect, monitor) => ({
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop(),
  }),
)(WordTitle);
