import React from 'react';
import { DropTarget } from 'react-dnd';
import _ from 'lodash';
import { Button } from '@material-ui/core';

class TargetRender extends React.Component {
  constructor(props) {
    super(props);
    const { elemLabel } = props;
    const labelKey = elemLabel ? elemLabel : 'label';
    this.state = {
      labelKey,
    };
  }
  renderCopiedTarget = () => {
    const { elemType, targetSrc } = this.props;
    const { labelKey } = this.state;
    switch(elemType) {
      case 'img':
        return _.get(targetSrc, ['copied', 'image'])
        ? <img width="100"
          src={require(`../../../images/words/${targetSrc.copied.image}`)} alt={targetSrc[labelKey]} />
        : null;
      default:
        return _.get(targetSrc, ['copied', labelKey]) !== undefined && _.get(targetSrc, ['copied', labelKey]) !== null
        ? <div>{_.get(targetSrc, ['copied', labelKey])}</div>
        : null;
    }
  }
  render() {
    const {
      connectDropTarget,
      targetSrc,
      onResetBack,
      isOver,
      canDrop,
    } = this.props;

    const isActive = canDrop && isOver;
    const backgroundColor = isActive ? '#81d4fa' : null;
    return connectDropTarget(<div style={{backgroundColor: backgroundColor, minWidth: '150px', minHeight: '100px',
      textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'space-around'}}>
      {_.get(targetSrc, ['copied']) && <React.Fragment>
        <Button
          style={{backgroundColor: '#f34123', color: '#fff'}} onClick={()=>onResetBack(targetSrc)}>
            Back</Button>
        {this.renderCopiedTarget()}
      </React.Fragment>
      }
    </div>)
  }
}

export default DropTarget(
  (props) => props.accepts,
  {
    drop(props, monitor, component) {
      props.onDropTarget(props, monitor.getItem())
    },
  },
  (connect, monitor) => ({
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop(),
  }),
)(TargetRender);
