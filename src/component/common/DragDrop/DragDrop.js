import { DndContext } from '@dnd-kit/core';
import { HowToReg } from '@mui/icons-material';
import { Button, Grid } from '@mui/material';
import React from 'react';
import SourceRender from './SourceRender';
import TargetRender from './TargetRender';

class DragDrop extends React.Component {
  // Translate dnd-kit event format to the format expected by parent components (NumberExercise, ColorExercise, etc.)
  handleDragEnd = (event) => {
    const { active, over } = event;
    const { onDropTarget, targetData } = this.props;

    if (over) {
      const draggedSource = active.data.current.objSource;
      const targetSource = targetData.find(t => t.itemId === over.id);

      const objElem = {
        objSource: draggedSource, // Original source data
        index: active.id, // Original ID (unused but available)
      };

      const objDropped = {
        targetSrc: targetSource, // Target data structure
      };

      // Call the parent's handler with the expected payload structure
      onDropTarget(objDropped, objElem);
    }
  }

  render() {
    const { instruction, sourceData, targetData, accepts, displayError, onDropTarget, checkAnswers, resetBack, elemType } = this.props;
    
    return (
      <DndContext onDragEnd={this.handleDragEnd}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <div className="instruction">{instruction}</div>
          </Grid>
          
          <Grid item xs={12} sm={6}>
            <div style={{textAlign: 'center', padding: '3px'}}>
              <Button
                style={{backgroundColor: 'green', marginRight: '5px'}}
                variant="contained" color="primary"
                startIcon={<HowToReg />}
                onClick={checkAnswers}
                >Check It</Button>
              {/* Optional Next Button logic here based on parent component needs, 
                  but typically managed by the consumer (e.g., NumberExercise.js) */}
            </div>
            
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', minHeight: '150px' }}>
              {sourceData && sourceData.map((eachSrc, index) =>
                <SourceRender 
                  key={eachSrc.itemId}
                  objSource={eachSrc}
                  index={index}
                  elemType={elemType} // Pass type to render text or image
                  />
              )}
            </div>
          </Grid>
          
          <Grid item xs={12} sm={6}>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
              {targetData && targetData.map((eachTgt, index) => 
                <TargetRender 
                  key={eachTgt.itemId}
                  targetSrc={eachTgt}
                  accepts={accepts}
                  displayError={displayError}
                  onDropTarget={onDropTarget}
                  onResetBack={resetBack}
                  elemType={elemType} // Pass type to render text or image
                />
              )}
            </div>
          </Grid>
        </Grid>
      </DndContext>
    );
  }
}

export default DragDrop;