'use client';

import React, { useState } from 'react';
import { Building, Home as HomeIcon, Wand2, FileText, Download } from 'lucide-react';
import DescriptionForm from '@/components/DescriptionForm';
import FloorPlanCanvas from '@/components/FloorPlanCanvas';
import BeforeAfterComparison from '@/components/BeforeAfterComparison';
import { generateFloorPlanFromDescription, analyzeWABOCompliance, FloorPlanData } from '@/lib/openai';

export default function Home() {
  const [beforePlan, setBeforePlan] = useState<FloorPlanData | null>(null);
  const [afterPlan, setAfterPlan] = useState<FloorPlanData | null>(null);
  const [beforeCompliance, setBeforeCompliance] = useState<any>(null);
  const [afterCompliance, setAfterCompliance] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [currentStep, setCurrentStep] = useState<'description' | 'comparison'>('description');

  const handleGeneratePlan = async (data: any) => {
    setIsLoading(true);
    try {
      const floorPlan = await generateFloorPlanFromDescription(data.description);
      const compliance = await analyzeWABOCompliance(floorPlan);

      if (data.planType === 'before') {
        setBeforePlan(floorPlan);
        setBeforeCompliance(compliance);
      } else {
        setAfterPlan(floorPlan);
        setAfterCompliance(compliance);
      }

      // If we have both plans, show comparison
      if ((data.planType === 'after' && beforePlan) || (data.planType === 'before' && afterPlan)) {
        setCurrentStep('comparison');
      }
    } catch (error) {
      console.error('Error generating floor plan:', error);
      alert('Failed to generate floor plan. Please check your OpenAI API key and try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const resetPlans = () => {
    setBeforePlan(null);
    setAfterPlan(null);
    setBeforeCompliance(null);
    setAfterCompliance(null);
    setCurrentStep('description');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Building className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">AFH WABO Floor Plan AI</h1>
                <p className="text-sm text-gray-600">AI-Powered Floor Plan Generator</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button
                onClick={resetPlans}
                className="flex items-center gap-2 px-4 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-md transition-colors"
              >
                <Wand2 className="h-4 w-4" />
                New Project
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {currentStep === 'description' && (
          <div className="space-y-8">
            {/* Welcome Section */}
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Generate WABO-Compliant Floor Plans with AI
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Describe your existing home or desired layout, and our AI will generate detailed floor plans 
                with WABO/AFH compliance checking. Perfect for Adult Family Home conversions and permit applications.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <Building className="h-5 w-5 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900">Before & After Plans</h3>
                </div>
                <p className="text-sm text-gray-600">
                  Generate both existing and WABO-compliant floor plans for easy comparison and permit applications.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Wand2 className="h-5 w-5 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900">AI-Powered Generation</h3>
                </div>
                <p className="text-sm text-gray-600">
                  Simply describe your layout verbally and let AI create detailed, dimensioned floor plans.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-purple-100 rounded-lg">
                    <FileText className="h-5 w-5 text-purple-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900">Compliance Checking</h3>
                </div>
                <p className="text-sm text-gray-600">
                  Automatic WABO/AFH compliance verification with detailed issue identification and recommendations.
                </p>
              </div>
            </div>

            {/* Description Form */}
            <DescriptionForm onSubmit={handleGeneratePlan} isLoading={isLoading} />

            {/* Progress Indicator */}
            {(beforePlan || afterPlan) && (
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="font-semibold text-gray-900 mb-4">Project Progress</h3>
                <div className="flex items-center gap-4">
                  <div className={`flex items-center gap-2 px-3 py-2 rounded-md ${
                    beforePlan ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-600'
                  }`}>
                    <Building className="h-4 w-4" />
                    Before Plan {beforePlan ? '✓' : ''}
                  </div>
                  <div className={`flex items-center gap-2 px-3 py-2 rounded-md ${
                    afterPlan ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-600'
                  }`}>
                    <HomeIcon className="h-4 w-4" />
                    After Plan {afterPlan ? '✓' : ''}
                  </div>
                  {beforePlan && afterPlan && (
                    <button
                      onClick={() => setCurrentStep('comparison')}
                      className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                    >
                      View Comparison
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>
        )}

        {currentStep === 'comparison' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900">Floor Plan Comparison</h2>
              <button
                onClick={() => setCurrentStep('description')}
                className="flex items-center gap-2 px-4 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-md transition-colors"
              >
                ← Back to Generator
              </button>
            </div>

            <BeforeAfterComparison
              beforePlan={beforePlan}
              afterPlan={afterPlan}
              beforeCompliance={beforeCompliance}
              afterCompliance={afterCompliance}
            />
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-sm text-gray-600">
            <p className="mb-2">
              AFH WABO Floor Plan AI - AI-Powered Floor Plan Generation for Adult Family Home Conversions
            </p>
            <p>
              Note: This tool generates conceptual floor plans. For permit applications, 
              consult with a licensed architect for final verification and professional drawings.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}