// Mock OpenAI functions for testing without API key
export interface FloorPlanData {
  rooms: Array<{
    name: string;
    width: number;
    height: number;
    x: number;
    y: number;
  }>;
  doors: Array<{
    x: number;
    y: number;
    width: number;
    height: number;
  }>;
  windows: Array<{
    x: number;
    y: number;
    width: number;
    height: number;
  }>;
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
    doors: [
      { x: 6, y: 0, width: 2, height: 0.2 },
      { x: 12, y: 3, width: 0.2, height: 2 },
    ],
    windows: [
      { x: 0, y: 0, width: 4, height: 0.2 },
      { x: 8, y: 0, width: 4, height: 0.2 },
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
