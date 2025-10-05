'use client';

import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, RotateCcw, Download, Maximize2 } from 'lucide-react';
import FloorPlanCanvas from './FloorPlanCanvas';
import ComplianceChecker from './ComplianceChecker';
import { FloorPlanData } from '@/lib/openai-mock';

interface BeforeAfterComparisonProps {
  beforePlan: FloorPlanData | null;
  afterPlan: FloorPlanData | null;
  beforeCompliance: any;
  afterCompliance: any;
}

const BeforeAfterComparison: React.FC<BeforeAfterComparisonProps> = ({
  beforePlan,
  afterPlan,
  beforeCompliance,
  afterCompliance
}) => {
  const [viewMode, setViewMode] = useState<'side-by-side' | 'overlay' | 'before-only' | 'after-only'>('side-by-side');
  const [selectedPlan, setSelectedPlan] = useState<'before' | 'after'>('before');

  const handleExport = (plan: FloorPlanData, filename: string) => {
    // Create a canvas element for export
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const scale = 20;
    const width = plan.dimensions.width * scale;
    const height = plan.dimensions.height * scale;
    
    canvas.width = width;
    canvas.height = height;

    // Draw the floor plan (simplified version of FloorPlanCanvas logic)
    ctx.clearRect(0, 0, width, height);
    
    // Draw walls
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 2;
    plan.walls.forEach(wall => {
      ctx.beginPath();
      ctx.moveTo(wall.x1 * scale, wall.y1 * scale);
      ctx.lineTo(wall.x2 * scale, wall.y2 * scale);
      ctx.stroke();
    });

    // Draw rooms
    plan.rooms.forEach(room => {
      const roomX = room.x * scale;
      const roomY = room.y * scale;
      const roomWidth = room.width * scale;
      const roomHeight = room.height * scale;

      ctx.fillStyle = '#f0f0f0';
      ctx.fillRect(roomX, roomY, roomWidth, roomHeight);
      ctx.strokeStyle = '#333';
      ctx.lineWidth = 1;
      ctx.strokeRect(roomX, roomY, roomWidth, roomHeight);

      ctx.fillStyle = '#000';
      ctx.font = '12px Arial';
      ctx.textAlign = 'center';
      ctx.fillText(room.name, roomX + roomWidth / 2, roomY + roomHeight / 2);
    });

    // Convert to blob and download
    canvas.toBlob((blob) => {
      if (blob) {
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${filename}.png`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
      }
    });
  };

  if (!beforePlan && !afterPlan) {
    return (
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <div className="text-gray-500 mb-4">
          <Maximize2 className="h-12 w-12 mx-auto" />
        </div>
        <h3 className="text-lg font-medium text-gray-900 mb-2">No Plans to Compare</h3>
        <p className="text-gray-600">Generate floor plans to see the comparison view.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Controls */}
      <div className="bg-white p-4 rounded-lg shadow-lg">
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-2">
            <label className="text-sm font-medium text-gray-700">View Mode:</label>
            <select
              value={viewMode}
              onChange={(e) => setViewMode(e.target.value as any)}
              className="px-3 py-1 border border-gray-300 rounded-md text-sm"
            >
              <option value="side-by-side">Side by Side</option>
              <option value="overlay">Overlay</option>
              <option value="before-only">Before Only</option>
              <option value="after-only">After Only</option>
            </select>
          </div>

          <div className="flex items-center gap-2">
            <label className="text-sm font-medium text-gray-700">Selected Plan:</label>
            <div className="flex gap-2">
              <button
                onClick={() => setSelectedPlan('before')}
                className={`px-3 py-1 rounded-md text-sm ${
                  selectedPlan === 'before' 
                    ? 'bg-blue-100 text-blue-700' 
                    : 'bg-gray-100 text-gray-700'
                }`}
              >
                Before
              </button>
              <button
                onClick={() => setSelectedPlan('after')}
                className={`px-3 py-1 rounded-md text-sm ${
                  selectedPlan === 'after' 
                    ? 'bg-blue-100 text-blue-700' 
                    : 'bg-gray-100 text-gray-700'
                }`}
              >
                After
              </button>
            </div>
          </div>

          <div className="flex gap-2">
            {beforePlan && (
              <button
                onClick={() => handleExport(beforePlan, 'before-plan')}
                className="flex items-center gap-1 px-3 py-1 bg-green-100 text-green-700 rounded-md hover:bg-green-200 text-sm"
              >
                <Download className="h-4 w-4" />
                Export Before
              </button>
            )}
            {afterPlan && (
              <button
                onClick={() => handleExport(afterPlan, 'after-plan')}
                className="flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-700 rounded-md hover:bg-blue-200 text-sm"
              >
                <Download className="h-4 w-4" />
                Export After
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Floor Plan Display */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {viewMode === 'side-by-side' && (
          <>
            {beforePlan && (
              <div className="bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">Before (Existing)</h3>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-600">
                      {beforePlan.rooms.reduce((sum, room) => sum + room.area, 0)} sq ft
                    </span>
                    <button
                      onClick={() => handleExport(beforePlan, 'before-plan')}
                      className="p-1 text-gray-500 hover:text-gray-700"
                    >
                      <Download className="h-4 w-4" />
                    </button>
                  </div>
                </div>
                <FloorPlanCanvas floorPlan={beforePlan} />
              </div>
            )}

            {afterPlan && (
              <div className="bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">After (WABO Compliant)</h3>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-600">
                      {afterPlan.rooms.reduce((sum, room) => sum + room.area, 0)} sq ft
                    </span>
                    <button
                      onClick={() => handleExport(afterPlan, 'after-plan')}
                      className="p-1 text-gray-500 hover:text-gray-700"
                    >
                      <Download className="h-4 w-4" />
                    </button>
                  </div>
                </div>
                <FloorPlanCanvas floorPlan={afterPlan} />
              </div>
            )}
          </>
        )}

        {viewMode === 'before-only' && beforePlan && (
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Before (Existing)</h3>
              <button
                onClick={() => handleExport(beforePlan, 'before-plan')}
                className="flex items-center gap-1 px-3 py-1 bg-green-100 text-green-700 rounded-md hover:bg-green-200 text-sm"
              >
                <Download className="h-4 w-4" />
                Export
              </button>
            </div>
            <FloorPlanCanvas floorPlan={beforePlan} />
          </div>
        )}

        {viewMode === 'after-only' && afterPlan && (
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">After (WABO Compliant)</h3>
              <button
                onClick={() => handleExport(afterPlan, 'after-plan')}
                className="flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-700 rounded-md hover:bg-blue-200 text-sm"
              >
                <Download className="h-4 w-4" />
                Export
              </button>
            </div>
            <FloorPlanCanvas floorPlan={afterPlan} />
          </div>
        )}
      </div>

      {/* Compliance Comparison */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {beforePlan && beforeCompliance && (
          <ComplianceChecker 
            floorPlan={beforePlan} 
            compliance={beforeCompliance} 
          />
        )}
        {afterPlan && afterCompliance && (
          <ComplianceChecker 
            floorPlan={afterPlan} 
            compliance={afterCompliance} 
          />
        )}
      </div>

      {/* Summary */}
      {beforePlan && afterPlan && (
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Transformation Summary</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">
                {beforePlan.rooms.reduce((sum, room) => sum + room.area, 0)}
              </div>
              <div className="text-sm text-gray-600">Before Area (sq ft)</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">
                {afterPlan.rooms.reduce((sum, room) => sum + room.area, 0)}
              </div>
              <div className="text-sm text-gray-600">After Area (sq ft)</div>
            </div>
            <div className="text-center">
              <div className={`text-2xl font-bold ${
                afterCompliance.compliant ? 'text-green-600' : 'text-red-600'
              }`}>
                {afterCompliance.compliant ? 'Compliant' : 'Issues'}
              </div>
              <div className="text-sm text-gray-600">WABO Status</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BeforeAfterComparison;
