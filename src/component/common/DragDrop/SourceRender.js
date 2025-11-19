import { useDraggable } from '@dnd-kit/core';

// Renders the source element using dnd-kit's useDraggable hook.
function SourceRender(props) {
  const { objSource, isDragging: isDraggingProp, elemType } = props;
  const { labelKey } = { labelKey: props.elemLabel ? props.elemLabel : 'label' };
  
  // Use unique item ID for the draggable hook
  const { attributes, listeners, setNodeRef, transform, isDragging: isDraggingHook } = useDraggable({
    id: objSource.itemId,
    data: { objSource }, // Pass the full source object in data
  });
  
  const isDragging = isDraggingProp || isDraggingHook;
  
  const style = transform ? { 
    transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
    cursor: 'grabbing',
  } : {
    cursor: 'grab',
  };

  const commonStyle = {
    textAlign: 'center',
    margin: '5px 15px 20px 5px',
    padding: '3px',
    opacity: isDragging ? 0.2 : 1,
    transition: 'opacity 0.2s',
  };

  const renderSourceElement = () => {
    switch(elemType) {
      case 'img':
        return objSource.image
          ? <img 
            style={{maxWidth: '150px'}}
            src={require(`../../../images/words/${objSource.image}`)}
            alt={objSource[labelKey]} />
          : null;
      default:
        // Use new CSS class for rectangular, bold, and larger look
        return objSource[labelKey] !== undefined && objSource[labelKey] !== null
          ? <div 
              className="arabic-font dnd-source-box"
              style={{cursor: 'move'}}
            >
              {objSource[labelKey]}
            </div>
          : null;
    }
  };
  
  // Only render if the label/content exists (not hidden by parent state)
  if (objSource[labelKey] === null && elemType !== 'img') return null;
  if (elemType === 'img' && !objSource.image) return null;


  return (
    <div 
        ref={setNodeRef} 
        style={{...style, ...commonStyle }}
        {...listeners} 
        {...attributes}
    >
        {renderSourceElement()}
    </div>
  );
}

export default SourceRender;