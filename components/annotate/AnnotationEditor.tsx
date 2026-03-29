"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Stage, Layer, Image as KonvaImage, Rect, Transformer } from 'react-konva';
import useImage from 'use-image';

interface Box {
  id: string;
  x: number;
  y: number;
  width: number;
  height: number;
  stroke: string;
}

interface AnnotationEditorProps {
  imageUrl: string;
  onSave?: (boxes: Box[]) => void;
}

const AnnotationEditor: React.FC<AnnotationEditorProps> = ({ imageUrl, onSave }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [image] = useImage(imageUrl);
  const [boxes, setBoxes] = useState<Box[]>([]);
  const [selectedId, selectShape] = useState<string | null>(null);
  const [newBox, setNewBox] = useState<{ x: number; y: number; width: number; height: number } | null>(null);
  const [stageScale, setStageScale] = useState(1);
  const [stageX, setStageX] = useState(0);
  const [stageY, setStageY] = useState(0);

  const trRef = useRef<any>(null);
  const layerRef = useRef<any>(null);

  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight
        });
      }
    };
    
    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  useEffect(() => {
    if (image && dimensions.width > 0) {
      const scale = Math.min(
        (dimensions.width - 40) / image.width,
        (dimensions.height - 40) / image.height
      );
      setStageScale(scale);
      setStageX((dimensions.width - image.width * scale) / 2);
      setStageY((dimensions.height - image.height * scale) / 2);
    }
  }, [image, dimensions]);

  useEffect(() => {
    if (selectedId && trRef.current) {
      const node = layerRef.current.findOne('#' + selectedId);
      if (node) {
        trRef.current.nodes([node]);
        trRef.current.getLayer().batchDraw();
      }
    }
  }, [selectedId]);

  const checkDeselect = (e: any) => {
    const clickedOnEmpty = e.target === e.target.getStage() || e.target.name() === 'background-image';
    if (clickedOnEmpty) {
      selectShape(null);
    }
  };

  const handleMouseDown = (e: any) => {
    if (selectedId) return;
    
    const clickedOnEmpty = e.target === e.target.getStage() || e.target.name() === 'background-image';
    if (clickedOnEmpty) {
      const stage = e.target.getStage();
      const pos = stage.getRelativePointerPosition();
      setNewBox({
        x: (pos.x - stageX) / stageScale,
        y: (pos.y - stageY) / stageScale,
        width: 0,
        height: 0,
      });
    }
  };

  const handleMouseMove = (e: any) => {
    if (!newBox) return;
    const stage = e.target.getStage();
    const pos = stage.getRelativePointerPosition();
    setNewBox({
      ...newBox,
      width: (pos.x - stageX) / stageScale - newBox.x,
      height: (pos.y - stageY) / stageScale - newBox.y,
    });
  };

  const handleMouseUp = () => {
    if (newBox && Math.abs(newBox.width) > 5 && Math.abs(newBox.height) > 5) {
      const box: Box = {
        id: `box-${Date.now()}`,
        ...newBox,
        stroke: '#ff7300',
      };
      setBoxes([...boxes, box]);
    }
    setNewBox(null);
  };

  return (
    <div ref={containerRef} className="w-full h-full bg-stone-900 overflow-hidden relative border border-stone-800 rounded-3xl">
      <Stage
        width={dimensions.width}
        height={dimensions.height}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onClick={checkDeselect}
        className="cursor-crosshair"
      >
        <Layer ref={layerRef} scaleX={stageScale} scaleY={stageScale} x={stageX} y={stageY}>
          {image && (
            <KonvaImage
              image={image}
              name="background-image"
              onMouseDown={checkDeselect}
            />
          )}
          {boxes.map((box, i) => (
            <Rect
              key={box.id}
              id={box.id}
              x={box.x}
              y={box.y}
              width={box.width}
              height={box.height}
              fill="rgba(255, 115, 0, 0.1)"
              stroke={box.stroke}
              strokeWidth={2 / stageScale}
              draggable
              onClick={() => selectShape(box.id)}
              onTransformEnd={(e) => {
                const node = e.target;
                const newBoxes = boxes.slice();
                newBoxes[i] = {
                  ...box,
                  x: node.x(),
                  y: node.y(),
                  width: Math.max(5, node.width() * node.scaleX()),
                  height: Math.max(5, node.height() * node.scaleY()),
                };
                node.scaleX(1);
                node.scaleY(1);
                setBoxes(newBoxes);
              }}
            />
          ))}
          {newBox && (
            <Rect
              {...newBox}
              stroke="#ff7300"
              strokeWidth={2 / stageScale}
              dash={[5, 5]}
            />
          )}
          <Transformer
            ref={trRef}
            flipEnabled={false}
            rotateEnabled={false}
            boundBoxFunc={(oldBox, newBox) => {
              if (newBox.width < 5 || newBox.height < 5) {
                return oldBox;
              }
              return newBox;
            }}
          />
        </Layer>
      </Stage>
      
      {/* Dynamic Instruction */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-4 py-2 bg-black/60 backdrop-blur rounded-full border border-white/10 text-[10px] font-bold text-white uppercase tracking-widest pointer-events-none">
        Click and Drag to draw Bounding Box
      </div>
    </div>
  );
};

export default AnnotationEditor;
