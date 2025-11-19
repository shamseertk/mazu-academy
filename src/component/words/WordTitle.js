
import { useDroppable } from '@dnd-kit/core';
import { Paper, Typography } from '@mui/material';

// Custom Droppable component to render the English word
function WordTitle({ id, word, droppedItem }) {
  const { setNodeRef, isOver } = useDroppable({ id });
  const staticStyle = {
    border: `3px dashed ${isOver ? 'blue' : '#ccc'}`,
    backgroundColor: droppedItem ? '#d4edda' : '#f8f9fa',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '10px',
    padding: '10px',
    textAlign: 'center',
    color: droppedItem && id === droppedItem.id ? 'green' : (droppedItem ? 'red' : 'inherit')
  };

  return (
    <Paper
        elevation={3} 
        ref={setNodeRef} 
        // Apply responsive class and merge styles
        className="dnd-image-container"
        style={staticStyle}
    >
      <Typography variant="h5" style={{ marginBottom: '10px' }}>{word}</Typography>
      {droppedItem && (
          // Display the dropped image on successful match
          <img 
              // CORRECTED PATH
              src={require(`../../images/words/${droppedItem.imageFileName}`)} 
              alt={droppedItem.id} 
              style={{ maxWidth: '100%', maxHeight: '100px' }}
          />
      )}
    </Paper>
  );
}

export default WordTitle;