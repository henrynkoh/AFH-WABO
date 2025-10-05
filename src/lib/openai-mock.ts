// Mock OpenAI functions for testing without API key
export interface Room {
  name: string;
  width: number;
  height: number;
  x: number;
  y: number;
}

export interface Wall {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  thickness: number;
}

export interface Door {
  x: number;
  y: number;
  width: number;
  height: number;
  type: 'single' | 'double';
}

export interface Window {
  x: number;
  y: number;
  width: number;
  height: number;
  type: 'standard' | 'egress';
}

export interface FloorPlanData {
  rooms: Room[];
  walls: Wall[];
  doors: Door[];
  windows: Window[];
}

export async function generateFloorPlanFromDescription(description: string): Promise<FloorPlanData> {
  // Mock implementation - returns a sample floor plan
  return {
    rooms: [
      { name: "Living Room", width: 12, height: 10, x: 0, y: 0 },
      { name: "Kitchen", width: 8, height: 6, x: 12, y: 0 },
      { name: "Bedroom 1", width: 10, height: 8, x: 0, y: 10 },
      { name: "Bathroom", width: 6, height: 8, x: 10, y: 10 },
    ],
    walls: [
      { x1: 0, y1: 0, x2: 20, y2: 0, thickness: 0.2 },
      { x1: 0, y1: 0, x2: 0, y2: 18, thickness: 0.2 },
      { x1: 20, y1: 0, x2: 20, y2: 18, thickness: 0.2 },
      { x1: 0, y1: 18, x2: 20, y2: 18, thickness: 0.2 },
    ],
    doors: [
      { x: 6, y: 0, width: 2, height: 0.2, type: 'single' },
      { x: 12, y: 3, width: 0.2, height: 2, type: 'single' },
    ],
    windows: [
      { x: 0, y: 0, width: 4, height: 0.2, type: 'standard' },
      { x: 8, y: 0, width: 4, height: 0.2, type: 'egress' },
    ],
  };
}

export async function analyzeWABOCompliance(floorPlan: FloorPlanData): Promise<any> {
  // Mock compliance analysis
  return {
    isCompliant: true,
    issues: [],
    recommendations: [
      "Ensure all doorways are at least 32 inches wide",
      "Verify bathroom accessibility requirements",
      "Check window egress requirements",
    ],
  };
}
