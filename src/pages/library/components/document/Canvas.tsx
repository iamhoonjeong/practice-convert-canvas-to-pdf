/* eslint-disable */
import React, { useEffect } from 'react';
import { fabric } from 'fabric';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../../store';
import { setCanvas, setCanvasWidth, setCanvasHeight } from '../../../../store/canvas/actions';

const Canvas = () => {
  const dispatch = useDispatch();

  let canvasContainer = document.querySelector('.canvas-container');
  let canvasWidth = 0;
  let canvasHeight = 0;

  let canvas = useSelector((state: RootState) => state.canvas.canvas);
  let canvasWidthProps = useSelector((state: RootState) => state.canvas.width);
  let canvasHeightProps = useSelector((state: RootState) => state.canvas.height);
  const canvasImage = useSelector((state: RootState) => state.canvas.image);
  const zoomValue = useSelector((state: RootState) => state.canvas.zoomValue / 100);
  const fields = useSelector((state: RootState) => state.canvas.fields);

  // set canvas
  useEffect(() => {
    dispatch(
      setCanvas(
        new fabric.Canvas('canvas', {
          backgroundColor: '#fff',
          selectionColor: 'rgba(30, 35, 46, 0.3)',
        }),
      ),
    );
  }, []);

  useEffect(() => {
    canvas?.setWidth(canvasWidth);
    canvas?.setHeight(canvasHeight);
  }, [canvas]);

  // canvas & background image setting
  useEffect(() => {
    fabric.Group.prototype.hasControls = false;
    fabric.Group.prototype.borderColor = 'rgba(0, 0, 0, 0)';
    fabric.Object.prototype.transparentCorners = false;
    fabric.Object.prototype.cornerColor = '#1990ff';
    fabric.Object.prototype.lockRotation = true;
    fabric.Object.prototype.cornerSize = 6;
    fabric.Object.prototype.borderScaleFactor = 2;
    fabric.Object.prototype.borderDashArray = [5, 5];
    fabric.Object.prototype.borderColor = 'red';

    if (canvasImage) {
      let reader: any = new FileReader();
      reader.readAsDataURL(canvasImage);

      reader.onload = () => {
        canvas?.setBackgroundImage(reader.result, canvas.renderAll.bind(canvas), {
          scaleX: 1,
          scaleY: 1,
        });

        setTimeout(() => {
          let image = new Image();
          image.src = reader.result;
          const { width, height } = image;
          canvas?.setWidth(width);
          canvas?.setHeight(height);
          dispatch(setCanvasWidth(width));
          dispatch(setCanvasHeight(height));
        }, 0);
      };
    }
  }, [canvasImage]);

  // zoom & out action
  useEffect(() => {
    canvasWidth = canvasWidthProps *= zoomValue;
    canvasHeight = canvasHeightProps *= zoomValue;

    const lowerCanvas = document.querySelector('.lower-canvas');
    const upperCanvas = document.querySelector('.upper-canvas');

    canvasContainer?.setAttribute(
      'style',
      `width: ${canvasWidth}px; height: ${canvasHeight}px; position: relative; user-select: none`,
    );
    lowerCanvas?.setAttribute(
      'style',
      `position: absolute; width: 100%; height: 100%; left: 0px; top: 0px; touch-action: none; user-select: none`,
    );
    upperCanvas?.setAttribute(
      'style',
      `position: absolute; width: 100%; height: 100%; left: 0px; top: 0px; touch-action: none; user-select: none; cursor: default`,
    );
  }, [zoomValue]);

  // insert fields
  useEffect(() => {
    let rect = new fabric.Rect({
      width: 100,
      height: 100,
      left: 20,
      top: 20,
      fill: 'rgba(25, 144, 255, 0.3)',
    });

    canvas?.add(rect);
    canvas?.setActiveObject(rect);
  }, [fields]);

  return (
    <>
      <canvas id="canvas"></canvas>
    </>
  );
};

export default Canvas;
