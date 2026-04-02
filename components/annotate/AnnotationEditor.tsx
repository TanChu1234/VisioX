"use client";

import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Konva from "konva";
import { Stage, Layer, Image as KonvaImage, Rect, Transformer } from "react-konva";
import useImage from "use-image";

export interface AnnotationBox {
  id: string;
  x: number;
  y: number;
  width: number;
  height: number;
  stroke: string;
}

interface AnnotationEditorProps {
  imageUrl: string;
  boxes?: AnnotationBox[];
  onChange?: (boxes: AnnotationBox[]) => void;
}

const MIN_BOX_SIZE = 5;
const CANVAS_PADDING = 40;

const AnnotationEditor: React.FC<AnnotationEditorProps> = ({ imageUrl, boxes: controlledBoxes, onChange }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [image] = useImage(imageUrl);

  const [internalBoxes, setInternalBoxes] = useState<AnnotationBox[]>(controlledBoxes ?? []);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [newBox, setNewBox] = useState<{ x: number; y: number; width: number; height: number } | null>(null);

  const transformerRef = useRef<Konva.Transformer | null>(null);
  const layerRef = useRef<Konva.Layer | null>(null);

  const isControlled = Array.isArray(controlledBoxes);
  const boxes = useMemo(
    () => (isControlled ? (controlledBoxes ?? []) : internalBoxes),
    [controlledBoxes, internalBoxes, isControlled],
  );

  const setBoxes = useCallback(
    (updater: AnnotationBox[] | ((prev: AnnotationBox[]) => AnnotationBox[])) => {
      const next = typeof updater === "function" ? updater(boxes) : updater;

      if (isControlled) {
        onChange?.(next);
        return;
      }

      setInternalBoxes(next);
      onChange?.(next);
    },
    [boxes, isControlled, onChange],
  );

  useEffect(() => {
    const updateSize = () => {
      if (!containerRef.current) return;

      setDimensions({
        width: containerRef.current.offsetWidth,
        height: containerRef.current.offsetHeight,
      });
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  useEffect(() => {
    if (!selectedId || !transformerRef.current || !layerRef.current) return;

    const node = layerRef.current.findOne<Konva.Rect>(`#${selectedId}`);
    if (!node) return;

    transformerRef.current.nodes([node]);
    transformerRef.current.getLayer()?.batchDraw();
  }, [selectedId]);

  const stageTransform = useMemo(() => {
    if (!image || dimensions.width <= 0 || dimensions.height <= 0) {
      return { scale: 1, x: 0, y: 0 };
    }

    const scale = Math.min(
      (dimensions.width - CANVAS_PADDING) / image.width,
      (dimensions.height - CANVAS_PADDING) / image.height,
    );

    return {
      scale,
      x: (dimensions.width - image.width * scale) / 2,
      y: (dimensions.height - image.height * scale) / 2,
    };
  }, [dimensions, image]);

  const { scale: stageScale, x: stageX, y: stageY } = stageTransform;

  const isBackgroundTarget = useCallback((target: Konva.Node) => {
    return target.getClassName() === "Stage" || target.name() === "background-image";
  }, []);

  const toImagePoint = useCallback(
    (point: { x: number; y: number }) => ({
      x: (point.x - stageX) / stageScale,
      y: (point.y - stageY) / stageScale,
    }),
    [stageScale, stageX, stageY],
  );

  const handleCanvasClick = useCallback(
    (event: Konva.KonvaEventObject<MouseEvent>) => {
      if (isBackgroundTarget(event.target)) {
        setSelectedId(null);
      }
    },
    [isBackgroundTarget],
  );

  const handleMouseDown = useCallback(
    (event: Konva.KonvaEventObject<MouseEvent>) => {
      if (selectedId || !isBackgroundTarget(event.target)) return;

      const stage = event.target.getStage();
      const pointer = stage?.getRelativePointerPosition();
      if (!pointer) return;

      const point = toImagePoint(pointer);
      setNewBox({
        x: point.x,
        y: point.y,
        width: 0,
        height: 0,
      });
    },
    [isBackgroundTarget, selectedId, toImagePoint],
  );

  const handleMouseMove = useCallback(
    (event: Konva.KonvaEventObject<MouseEvent>) => {
      if (!newBox) return;

      const stage = event.target.getStage();
      const pointer = stage?.getRelativePointerPosition();
      if (!pointer) return;

      const point = toImagePoint(pointer);
      setNewBox({
        ...newBox,
        width: point.x - newBox.x,
        height: point.y - newBox.y,
      });
    },
    [newBox, toImagePoint],
  );

  const handleMouseUp = useCallback(() => {
    if (!newBox) return;

    if (Math.abs(newBox.width) > MIN_BOX_SIZE && Math.abs(newBox.height) > MIN_BOX_SIZE) {
      const normalizedX = newBox.width >= 0 ? newBox.x : newBox.x + newBox.width;
      const normalizedY = newBox.height >= 0 ? newBox.y : newBox.y + newBox.height;

      setBoxes((prev) => [
        ...prev,
        {
          id: `box-${Date.now()}`,
          x: normalizedX,
          y: normalizedY,
          width: Math.abs(newBox.width),
          height: Math.abs(newBox.height),
          stroke: "#ff7300",
        },
      ]);
    }

    setNewBox(null);
  }, [newBox, setBoxes]);

  return (
    <div
      ref={containerRef}
      className="w-full h-full bg-stone-900 overflow-hidden relative border border-stone-800 rounded-3xl"
    >
      <Stage
        width={dimensions.width}
        height={dimensions.height}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onClick={handleCanvasClick}
        className="cursor-crosshair"
      >
        <Layer ref={layerRef} scaleX={stageScale} scaleY={stageScale} x={stageX} y={stageY}>
          {image && (
            <KonvaImage
              image={image}
              name="background-image"
              onMouseDown={handleCanvasClick}
            />
          )}

          {boxes.map((box, index) => (
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
              onClick={() => setSelectedId(box.id)}
              onTransformEnd={(event: Konva.KonvaEventObject<Event>) => {
                const node = event.target as Konva.Rect;
                setBoxes((prev) => {
                  const next = [...prev];
                  next[index] = {
                    ...box,
                    x: node.x(),
                    y: node.y(),
                    width: Math.max(MIN_BOX_SIZE, node.width() * node.scaleX()),
                    height: Math.max(MIN_BOX_SIZE, node.height() * node.scaleY()),
                  };
                  return next;
                });

                node.scaleX(1);
                node.scaleY(1);
              }}
              onDragEnd={(event: Konva.KonvaEventObject<DragEvent>) => {
                const node = event.target as Konva.Rect;
                setBoxes((prev) => {
                  const next = [...prev];
                  next[index] = {
                    ...box,
                    x: node.x(),
                    y: node.y(),
                  };
                  return next;
                });
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
            ref={transformerRef}
            flipEnabled={false}
            rotateEnabled={false}
            boundBoxFunc={(oldBox, newBoxCandidate) => {
              if (newBoxCandidate.width < MIN_BOX_SIZE || newBoxCandidate.height < MIN_BOX_SIZE) {
                return oldBox;
              }
              return newBoxCandidate;
            }}
          />
        </Layer>
      </Stage>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-4 py-2 bg-black/60 backdrop-blur rounded-full border border-white/10 text-[10px] font-bold text-white uppercase tracking-widest pointer-events-none">
        Click and Drag to draw Bounding Box
      </div>
    </div>
  );
};

export default AnnotationEditor;
