import { Backspace, FiberManualRecord } from '@mui/icons-material';
import { Button, IconButton } from '@mui/material';
import React from 'react';
import { Image, Layer, Line, Stage } from 'react-konva';

const Canvas = (props) => {
  const [tool, setTool] = React.useState('brush');
  const isDrawing = React.useRef(false);
  const imageRef = React.useRef(null);
  const lastPos = React.useRef(null);

  /* Existing useMemo block for canvas creation */
  const { canvas, context } = React.useMemo(() => {
    const canvas = document.createElement('canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight - 25;
    const context = canvas.getContext('2d');
    context.strokeStyle = 'black'; // Default, will be overridden by useEffect
    context.lineJoin = 'round';
    context.lineWidth = 5;
    return { canvas, context };
  }, []);

  React.useEffect(() => {
    const defaultColor = props.themeMode === 'dark' ? 'white' : 'black';
    context.strokeStyle = defaultColor;
  }, [props.themeMode, context]);

  const handleMouseDown = (e) => {
    isDrawing.current = true;
    lastPos.current = e.target.getStage().getPointerPosition();
  };

  const handleMouseUp = () => {
    isDrawing.current = false;
  };

  const handleMouseMove = (e) => {
    if (!isDrawing.current) {
      return;
    }

    const image = imageRef.current;
    const stage = e.target.getStage();

    context.globalCompositeOperation = tool === 'eraser' ? 'destination-out' : 'source-over';
    context.beginPath();

    const localPos = {
      x: lastPos.current.x - image.x(),
      y: lastPos.current.y - image.y(),
    };
    context.moveTo(localPos.x, localPos.y);

    const pos = stage.getPointerPosition();
    const newLocalPos = {
      x: pos.x - image.x(),
      y: pos.y - image.y(),
    };
    context.lineTo(newLocalPos.x, newLocalPos.y);
    context.closePath();
    context.stroke();

    lastPos.current = pos;
    image.getLayer().batchDraw();
  };

  const changeColorTo = (color) => {
    context.strokeStyle = color;
  }

  const eraseWindow = () => {
    context.reset();
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight - 25;
    context.strokeStyle = props.themeMode === 'dark' ? 'white' : 'black';
    context.lineJoin = 'round';
    context.lineWidth = 5;
    if (imageRef.current) {
      imageRef.current.getLayer().batchDraw();
    }
  }

  return (
    <>
      <Button className="buttonStyle eraseButton" variant="contained" color="primary"
        onClick={eraseWindow}
        startIcon={<Backspace />}
      >Erase All</Button>
      <IconButton onClick={() => changeColorTo(props.themeMode === 'dark' ? 'white' : 'black')} size="large" >
        <FiberManualRecord
          style={{ backgroundColor: props.themeMode === 'dark' ? 'white' : 'black' }}
          // Simple selection check, might need refinement if context.strokeStyle is converted to hex by browser
          className={context.strokeStyle === (props.themeMode === 'dark' ? 'white' : 'black') || context.strokeStyle === (props.themeMode === 'dark' ? '#ffffff' : '#000000') ? 'brush-color-icon-selected' : 'brush-color-icon'}
        /></IconButton>
      <IconButton onClick={() => changeColorTo('green')} size="large">
        <FiberManualRecord style={{ backgroundColor: 'green' }} /></IconButton>
      <IconButton onClick={() => changeColorTo('red')} size="large">
        <FiberManualRecord style={{ backgroundColor: 'red' }} /></IconButton>
      <IconButton onClick={() => changeColorTo('blue')} size="large">
        <FiberManualRecord style={{ backgroundColor: 'blue' }} /></IconButton>
      <IconButton onClick={() => changeColorTo('orange')} size="large">
        <FiberManualRecord style={{ backgroundColor: 'orange' }} /></IconButton>
      <select
        value={tool}
        onChange={(e) => {
          setTool(e.target.value);
        }}
      >
        <option value="brush">Brush</option>
        <option value="eraser">Eraser</option>
      </select>
      <Stage
        onMouseDown={handleMouseDown}
        onMousemove={handleMouseMove}
        onMouseup={handleMouseUp}
        onTouchStart={handleMouseDown}
        onTouchMove={handleMouseMove}
        onTouchEnd={handleMouseUp}
        width={608}
        height={300}
      >
        <Layer>
          <Line
            points={[5, 70, 600, 70]}
            stroke="red"
            lineCap="round"
            lineJoin="round"
          />
          <Line
            points={[5, 110, 600, 110]}
            stroke="red"
            lineCap="round"
            lineJoin="round"
          />
          <Line
            points={[5, 150, 600, 150]}
            stroke="red"
            lineCap="round"
            lineJoin="round"
          />
          <Line
            points={[5, 190, 600, 190]}
            stroke="red"
            lineCap="round"
            lineJoin="round"
          />
          <Image
            ref={imageRef}
            image={canvas}
            x={0}
            y={0}
          />
        </Layer>
      </Stage>
    </>
  );
};

export default Canvas;
