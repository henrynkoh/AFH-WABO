import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export interface FloorPlanData {
  rooms: Room[];
  walls: Wall[];
  doors: Door[];
  windows: Window[];
  dimensions: {
    width: number;
    height: number;
  };
}

export interface Room {
  id: string;
  name: string;
  type: 'bedroom' | 'living' | 'kitchen' | 'bathroom' | 'hallway' | 'other';
  x: number;
  y: number;
  width: number;
  height: number;
  area: number;
}

export interface Wall {
  id: string;
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  thickness: number;
}

export interface Door {
  id: string;
  x: number;
  y: number;
  width: number;
  height: number;
  type: 'standard' | 'accessible';
}

export interface Window {
  id: string;
  x: number;
  y: number;
  width: number;
  height: number;
  sillHeight: number;
}

export async function generateFloorPlanFromDescription(description: string): Promise<FloorPlanData> {
  const prompt = `
You are an expert architect specializing in residential floor plans and WABO/AFH compliance. 
Generate a detailed floor plan from the following description:

"${description}"

Please return a JSON object with the following structure:
{
  "rooms": [
    {
      "id": "room_1",
      "name": "Living Room",
      "type": "living",
      "x": 0,
      "y": 0,
      "width": 12,
      "height": 10,
      "area": 120
    }
  ],
  "walls": [
    {
      "id": "wall_1",
      "x1": 0,
      "y1": 0,
      "x2": 12,
      "y2": 0,
      "thickness": 0.5
    }
  ],
  "doors": [
    {
      "id": "door_1",
      "x": 6,
      "y": 0,
      "width": 3,
      "height": 7,
      "type": "standard"
    }
  ],
  "windows": [
    {
      "id": "window_1",
      "x": 2,
      "y": 0,
      "width": 4,
      "height": 3,
      "sillHeight": 2.5
    }
  ],
  "dimensions": {
    "width": 24,
    "height": 20
  }
}

Important WABO/AFH compliance requirements to consider:
- Accessible doors should be 32" wide minimum
- Bathroom doors should be 36" wide
- Windows should have sill height no more than 44" for egress
- Bathrooms need grab bar blocking
- Showers should be 30" x 48" minimum for accessibility
- All measurements should be in feet

Return only the JSON object, no additional text.
`;

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: "You are an expert architect who creates detailed, code-compliant floor plans. Always return valid JSON."
        },
        {
          role: "user",
          content: prompt
        }
      ],
      temperature: 0.3,
      max_tokens: 2000
    });

    const content = response.choices[0]?.message?.content;
    if (!content) {
      throw new Error('No response from OpenAI');
    }

    // Parse the JSON response
    const floorPlanData = JSON.parse(content);
    return floorPlanData;
  } catch (error) {
    console.error('Error generating floor plan:', error);
    throw new Error('Failed to generate floor plan from description');
  }
}

export async function analyzeWABOCompliance(floorPlan: FloorPlanData): Promise<{
  compliant: boolean;
  issues: string[];
  recommendations: string[];
}> {
  const issues: string[] = [];
  const recommendations: string[] = [];

  // Check door widths
  floorPlan.doors.forEach(door => {
    if (door.type === 'accessible' && door.width < 2.67) { // 32 inches
      issues.push(`Door ${door.id} is too narrow for accessibility (${door.width}ft, needs 2.67ft minimum)`);
    }
  });

  // Check window sill heights
  floorPlan.windows.forEach(window => {
    if (window.sillHeight > 3.67) { // 44 inches
      issues.push(`Window ${window.id} sill height too high for egress (${window.sillHeight}ft, max 3.67ft)`);
    }
  });

  // Check bathroom accessibility
  const bathrooms = floorPlan.rooms.filter(room => room.type === 'bathroom');
  bathrooms.forEach(bathroom => {
    if (bathroom.area < 30) { // Minimum bathroom area
      issues.push(`Bathroom ${bathroom.name} is too small (${bathroom.area} sq ft, needs 30 sq ft minimum)`);
    }
  });

  // Generate recommendations
  if (issues.length === 0) {
    recommendations.push('Floor plan appears to meet WABO/AFH compliance requirements');
  } else {
    recommendations.push('Consider consulting with a licensed architect for final compliance verification');
    recommendations.push('Review local building codes for additional requirements');
  }

  return {
    compliant: issues.length === 0,
    issues,
    recommendations
  };
}
