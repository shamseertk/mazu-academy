import React from 'react';
import { useDroppable } from '@dnd-kit/core';
import _ from 'lodash';
import { Button } from '@mui/material';
import { CheckCircle, ErrorRounded } from '@mui/icons-material';

// Renders the target element using dnd-kit's useDroppable hook.
function TargetRender(props) {
  const { targetSrc, onResetBack, elemType, displayError } = props;
  const { labelKey } = { labelKey: props.elemLabel ? props.elemLabel : 'label' };

  // useDroppable hook connects the target area
  const { setNodeRef, isOver } = useDroppable({
    id: targetSrc.itemId,
    // Accept array is no longer strictly necessary for dnd-kit core, 
    // but the ID property defines this droppable's target
  });

  const backgroundColor = isOver ? '#81d4fa' : null;
  const errorColor = displayError ? (targetSrc.error ? '2px solid red' : '2px solid green') : '1px solid gray';


  const renderCopiedTarget = () => {
    switch (elemType) {
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

  return (
    <div style={{ padding: '3px 0px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div
        ref={setNodeRef}
        style={{
          backgroundColor: backgroundColor,
          minWidth: '150px',
          minHeight: '100px',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-around',
          border: errorColor,
        }}
      >
        {/* Display the original label */}
        <div style={{ fontSize: '2em', width: '100%' }} className="arabic-font">
          {targetSrc.label}
        </div>

        {/* Display the dropped item */}
        {_.get(targetSrc, ['copied']) && <React.Fragment>
          {renderCopiedTarget()}
          {/* Display Reset Button next to dropped item */}
          <Button
            style={{ backgroundColor: '#f34123', color: '#fff', marginTop: '5px' }}
            onClick={() => onResetBack(targetSrc)}>
            Back
          </Button>
        </React.Fragment>
        }
      </div>

      {/* Display Error/Success Status */}
      {displayError && (
        <div style={{ padding: '5px 0px' }}>
          {targetSrc.error
            ? <div style={{ color: 'red' }}><ErrorRounded />Wrong</div>
            : <div style={{ color: 'green' }}><CheckCircle />Right</div>}
        </div>
      )}
    </div>
  );
}

export default TargetRender;