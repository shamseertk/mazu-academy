import React, { useState, useRef } from 'react';
import { Stage, Layer, Line, Image as KonvaImage } from 'react-konva';
import { Button, Box } from '@mui/material';
import Backspace from '@mui/icons-material/Backspace';
import useImage from 'use-image';

const DrawingCanvas = ({ width, height, brushColor, onClear }) => {
  const [lines, setLines] = useState([]);
  const isDrawing = useRef(false);
  const [image] = useImage(require("../images/fun/fun-rabbit1.png"));

  const handleMouseDown = (e) => {
    isDrawing.current = true;
    const pos = e.target.getStage().getPointerPosition();
    setLines([...lines, { tool: 'pen', points: [pos.x, pos.y], color: brushColor }]);
  };

  const handleMouseMove = (e) => {
    if (!isDrawing.current) {
      return;
    }
    const stage = e.target.getStage();
    const point = stage.getPointerPosition();
    let lastLine = lines[lines.length - 1];
    // add point
    lastLine.points = lastLine.points.concat([point.x, point.y]);

    // replace last
    lines.splice(lines.length - 1, 1, lastLine);
    setLines(lines.concat());
  };

  const handleMouseUp = () => {
    isDrawing.current = false;
  };

  // Expose clear function to parent via ref or prop if needed, 
  // but here we control state from parent or internal? 
  // Actually, let's keep state internal to this component for simplicity 
  // and expose a clear method or just pass a key to reset.
  // Better: Lift state up or use useImperativeHandle? 
  // Simplest for now: Pass a "version" or "key" prop to force re-render/reset, 
  // OR just put the clear button inside this component? 
  // The original design had the button outside. 
  // Let's use a ref for the clear action if we want to keep the button outside,
  // OR just move the button inside this wrapper.

  // Wait, the original class component had `eraseWindow`.
  // Let's just put the button here for simplicity or use a ref.

  React.useEffect(() => {
    if (onClear) {
      onClear.current = () => setLines([]);
    }
  }, [onClear]);

  return (
    <Stage
      width={width}
      height={height}
      onMouseDown={handleMouseDown}
      onMousemove={handleMouseMove}
      onMouseup={handleMouseUp}
      onTouchStart={handleMouseDown}
      onTouchMove={handleMouseMove}
      onTouchEnd={handleMouseUp}
    >
      <Layer>
        <KonvaImage image={image} width={width} height={height} />
        {lines.map((line, i) => (
          <Line
            key={i}
            points={line.points}
            stroke={line.color}
            strokeWidth={5}
            tension={0.5}
            lineCap="round"
            lineJoin="round"
            globalCompositeOperation={
              line.tool === 'eraser' ? 'destination-out' : 'source-over'
            }
          />
        ))}
      </Layer>
    </Stage>
  );
};

const FunLevelOne = () => {
  const [brushColor] = useState('green');
  const clearCanvasRefSmall = useRef(null);
  const clearCanvasRefLarge = useRef(null);

  const handleClear = () => {
    if (clearCanvasRefSmall.current) clearCanvasRefSmall.current();
    if (clearCanvasRefLarge.current) clearCanvasRefLarge.current();
  };

  return (
    <React.Fragment>
      <div style={{ display: 'flex', justifyContent: 'center', overflow: 'scroll' }}>
        <div style={{ border: '2px solid #4f111d' }}>
          <Box sx={{ p: 1, display: 'flex', justifyContent: 'center' }}>
            <Button variant="contained" color="primary"
              onClick={handleClear}
              startIcon={<Backspace />}
            >Erase All</Button>
          </Box>

          {/* Mobile/Tablet View (Small Canvas) */}
          <Box sx={{ display: { xs: 'block', md: 'none' } }}>
            <DrawingCanvas
              width={350}
              height={330}
              brushColor={brushColor}
              onClear={clearCanvasRefSmall}
            />
          </Box>

          {/* Desktop View (Large Canvas) */}
          <Box sx={{ display: { xs: 'none', md: 'block' } }}>
            <DrawingCanvas
              width={560}
              height={530}
              brushColor={brushColor}
              onClear={clearCanvasRefLarge}
            />
          </Box>
        </div>
      </div>
    </React.Fragment>
  );
}

export default FunLevelOne;

