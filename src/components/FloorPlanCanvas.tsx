'use client';

import React, { useRef, useEffect, useState } from 'react';
import { FloorPlanData, Room, Wall, Door, Window } from '@/lib/openai';

interface FloorPlanCanvasProps {
  floorPlan: FloorPlanData;
  scale?: number;
  showDimensions?: boolean;
  showCompliance?: boolean;
  onRoomClick?: (room: Room) => void;
}

const FloorPlanCanvas: React.FC<FloorPlanCanvasProps> = ({
  floorPlan,
  scale = 20, // pixels per foot
  showDimensions = true,
  showCompliance = true,
  onRoomClick
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const width = floorPlan.dimensions.width * scale;
    const height = floorPlan.dimensions.height * scale;
    canvas.width = width;
    canvas.height = height;

    // Clear canvas
    ctx.clearRect(0, 0, width, height);

    // Draw walls
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 2;
    floorPlan.walls.forEach(wall => {
      ctx.beginPath();
      ctx.moveTo(wall.x1 * scale, wall.y1 * scale);
      ctx.lineTo(wall.x2 * scale, wall.y2 * scale);
      ctx.stroke();
    });

    // Draw rooms
    floorPlan.rooms.forEach(room => {
      const roomX = room.x * scale;
      const roomY = room.y * scale;
      const roomWidth = room.width * scale;
      const roomHeight = room.height * scale;

      // Room background
      ctx.fillStyle = getRoomColor(room.type);
      ctx.fillRect(roomX, roomY, roomWidth, roomHeight);

      // Room border
      ctx.strokeStyle = '#333';
      ctx.lineWidth = 1;
      ctx.strokeRect(roomX, roomY, roomWidth, roomHeight);

      // Room label
      ctx.fillStyle = '#000';
      ctx.font = '12px Arial';
      ctx.textAlign = 'center';
      ctx.fillText(
        room.name,
        roomX + roomWidth / 2,
        roomY + roomHeight / 2
      );

      // Room area
      if (showDimensions) {
        ctx.fillText(
          `${room.area} sq ft`,
          roomX + roomWidth / 2,
          roomY + roomHeight / 2 + 15
        );
      }
    });

    // Draw doors
    ctx.fillStyle = '#8B4513';
    floorPlan.doors.forEach(door => {
      const doorX = door.x * scale;
      const doorY = door.y * scale;
      const doorWidth = door.width * scale;
      const doorHeight = door.height * scale;

      ctx.fillRect(doorX, doorY, doorWidth, doorHeight);
      
      // Door label
      ctx.fillStyle = '#fff';
      ctx.font = '10px Arial';
      ctx.textAlign = 'center';
      ctx.fillText(
        door.type === 'accessible' ? 'A' : 'D',
        doorX + doorWidth / 2,
        doorY + doorHeight / 2
      );
      ctx.fillStyle = '#8B4513';
    });

    // Draw windows
    ctx.strokeStyle = '#4169E1';
    ctx.lineWidth = 2;
    floorPlan.windows.forEach(window => {
      const windowX = window.x * scale;
      const windowY = window.y * scale;
      const windowWidth = window.width * scale;
      const windowHeight = window.height * scale;

      ctx.beginPath();
      ctx.moveTo(windowX, windowY);
      ctx.lineTo(windowX + windowWidth, windowY);
      ctx.stroke();

      // Window label
      ctx.fillStyle = '#4169E1';
      ctx.font = '10px Arial';
      ctx.textAlign = 'center';
      ctx.fillText(
        'W',
        windowX + windowWidth / 2,
        windowY - 5
      );
    });

  }, [floorPlan, scale, showDimensions]);

  const getRoomColor = (type: Room['type']): string => {
    const colors = {
      bedroom: '#E6F3FF',
      living: '#FFF2E6',
      kitchen: '#F0FFF0',
      bathroom: '#F5F5DC',
      hallway: '#F8F8FF',
      other: '#F0F0F0'
    };
    return colors[type] || colors.other;
  };

  const handleCanvasClick = (event: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const x = (event.clientX - rect.left) / scale;
    const y = (event.clientY - rect.top) / scale;

    // Find clicked room
    const clickedRoom = floorPlan.rooms.find(room => 
      x >= room.x && x <= room.x + room.width &&
      y >= room.y && y <= room.y + room.height
    );

    if (clickedRoom) {
      setSelectedRoom(clickedRoom);
      onRoomClick?.(clickedRoom);
    }
  };

  return (
    <div className="relative">
      <canvas
        ref={canvasRef}
        onClick={handleCanvasClick}
        className="border border-gray-300 cursor-pointer"
        style={{ maxWidth: '100%', height: 'auto' }}
      />
      {selectedRoom && (
        <div className="absolute top-4 right-4 bg-white p-4 border border-gray-300 rounded shadow-lg">
          <h3 className="font-bold">{selectedRoom.name}</h3>
          <p>Type: {selectedRoom.type}</p>
          <p>Area: {selectedRoom.area} sq ft</p>
          <p>Dimensions: {selectedRoom.width}' × {selectedRoom.height}'</p>
        </div>
      )}
    </div>
  );
};

export default FloorPlanCanvas;
