import React from 'react';
import { DragSource } from 'react-dnd';


class WordImage extends React.Component {
  render() {
    const { word, isDragging, connectDragSource } = this.props;
    const draggingStyle = isDragging ? {opacity: 0.2, maxWidth: '80px'} : {opacity: 1, maxWidth: '150px'};
    
    if (isDragging || !word.image) return null;
    return connectDragSource(<div style={{ minHeght: '100px', minWidth: '150px',
      margin: '5px 15px 20px 5px', padding: '3px', textAlign: 'center'}}>
      <img style={{cursor: 'move', ...draggingStyle}} src={require(`../../images/words/${word.image}`)} alt={word.arabic} />
    </div>);
  }
}

export default DragSource(props => 
  props.word.english,
  {
    beginDrag(props) {
      return {
        word: props.word,
        index: props.index
      }
    }
  },
  (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging(),
  }),
)(WordImage);
