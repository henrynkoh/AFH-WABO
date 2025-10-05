import { NextRequest, NextResponse } from 'next/server';
import { generateFloorPlanFromDescription, analyzeWABOCompliance } from '@/lib/openai-mock';

export async function POST(request: NextRequest) {
  try {
    const { description } = await request.json();

    if (!description) {
      return NextResponse.json(
        { error: 'Description is required' },
        { status: 400 }
      );
    }

    // Generate floor plan
    const floorPlan = await generateFloorPlanFromDescription(description);
    
    // Analyze compliance
    const compliance = await analyzeWABOCompliance(floorPlan);

    return NextResponse.json({
      floorPlan,
      compliance
    });

  } catch (error) {
    console.error('Error in generate-floor-plan API:', error);
    return NextResponse.json(
      { error: 'Failed to generate floor plan' },
      { status: 500 }
    );
  }
}
