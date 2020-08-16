import React from 'react';
import { DragSource } from 'react-dnd';

class SourceRender extends React.Component {
  constructor(props) {
    super(props);
    const { elemLabel } = props;
    const labelKey = elemLabel ? elemLabel : 'label';
    this.state = {
      labelKey,
    };
  }
  renderSourceElement = () => {
    const { objSource, isDragging, elemType } = this.props;
    const { labelKey } = this.state;
    const draggingStyle = isDragging ? {opacity: 0.2, maxWidth: '80px'} : {opacity: 1, maxWidth: '150px'};
    switch(elemType) {
      case 'img':
        return objSource.image
          ? <img 
            style={{cursor: 'move', ...draggingStyle}}
            src={require(`../../../images/words/${objSource.image}`)}
            alt={objSource[labelKey]} />
          : null;
      default:
        return objSource[labelKey] !== undefined && objSource[labelKey] !== null
          ? <div style={{cursor: 'move',
            minHeight: '50px',
            paddingTop: '25%', border: '1px solid #234', ...draggingStyle}}>{objSource[labelKey]}</div>
          : null;
    }
  }
  render() {
    const { isDragging, connectDragSource } = this.props;
    if (isDragging) return null;
    return connectDragSource(<div style={{ minHeght: '100px', minWidth: '150px',
      margin: '5px 15px 20px 5px', padding: '3px', textAlign: 'center'}}>
        {this.renderSourceElement()}
    </div>);
  }
}

export default DragSource(props => 
  props.objSource.itemId,
  {
    beginDrag(props) {
      return {
        objSource: props.objSource,
        index: props.index
      }
    }
  },
  (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging(),
  }),
)(SourceRender);
