import { useDraggable } from '@dnd-kit/core';
import { Paper } from '@mui/material';

// Custom Draggable component to render the image
function WordImage({ id, imageFileName, isDropped }) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({ id });
  const style = transform ? { 
    transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
    cursor: 'grabbing',
  } : {
    cursor: 'grab',
  };

  const isHidden = isDropped ? { visibility: 'hidden', pointerEvents: 'none' } : {};

  return (
    <Paper 
        elevation={3}
        ref={setNodeRef} 
        // Apply responsive class and default styles
        className="dnd-image-container" 
        style={{...style, ...isHidden, margin: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center'}} 
        {...listeners} 
        {...attributes}
    >
        <img 
            // CORRECTED PATH
            src={require(`../../images/words/${imageFileName}`)} 
            alt={id} 
            style={{ maxWidth: '100%', maxHeight: '100%' }}
        />
    </Paper>
  );
}

export default WordImage;