'use client';

import React from 'react';
import { CheckCircle, XCircle, AlertTriangle, Info } from 'lucide-react';
import { FloorPlanData } from '@/lib/openai-mock';

interface ComplianceCheckerProps {
  floorPlan: FloorPlanData;
  compliance: {
    compliant: boolean;
    issues: string[];
    recommendations: string[];
  };
}

const ComplianceChecker: React.FC<ComplianceCheckerProps> = ({ floorPlan, compliance }) => {
  const getIssueIcon = (issue: string) => {
    if (issue.includes('too narrow') || issue.includes('too small') || issue.includes('too high')) {
      return <XCircle className="h-4 w-4 text-red-500" />;
    }
    return <AlertTriangle className="h-4 w-4 text-yellow-500" />;
  };

  const getRecommendationIcon = (recommendation: string) => {
    if (recommendation.includes('meets') || recommendation.includes('compliant')) {
      return <CheckCircle className="h-4 w-4 text-green-500" />;
    }
    return <Info className="h-4 w-4 text-blue-500" />;
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="flex items-center gap-2 mb-4">
        <div className={`p-2 rounded-full ${compliance.compliant ? 'bg-green-100' : 'bg-red-100'}`}>
          {compliance.compliant ? (
            <CheckCircle className="h-6 w-6 text-green-600" />
          ) : (
            <XCircle className="h-6 w-6 text-red-600" />
          )}
        </div>
        <h2 className="text-xl font-bold">
          WABO/AFH Compliance Check
        </h2>
        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
          compliance.compliant 
            ? 'bg-green-100 text-green-800' 
            : 'bg-red-100 text-red-800'
        }`}>
          {compliance.compliant ? 'Compliant' : 'Issues Found'}
        </span>
      </div>

      <div className="space-y-6">
        {/* Floor Plan Summary */}
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-medium text-gray-900 mb-2">Floor Plan Summary</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div>
              <span className="text-gray-600">Total Area:</span>
              <div className="font-medium">
                {floorPlan.rooms.reduce((sum, room) => sum + room.area, 0)} sq ft
              </div>
            </div>
            <div>
              <span className="text-gray-600">Rooms:</span>
              <div className="font-medium">{floorPlan.rooms.length}</div>
            </div>
            <div>
              <span className="text-gray-600">Doors:</span>
              <div className="font-medium">{floorPlan.doors.length}</div>
            </div>
            <div>
              <span className="text-gray-600">Windows:</span>
              <div className="font-medium">{floorPlan.windows.length}</div>
            </div>
          </div>
        </div>

        {/* Compliance Issues */}
        {compliance.issues.length > 0 && (
          <div>
            <h3 className="font-medium text-red-900 mb-3 flex items-center gap-2">
              <XCircle className="h-5 w-5" />
              Compliance Issues ({compliance.issues.length})
            </h3>
            <div className="space-y-2">
              {compliance.issues.map((issue, index) => (
                <div key={index} className="flex items-start gap-2 p-3 bg-red-50 border border-red-200 rounded-md">
                  {getIssueIcon(issue)}
                  <span className="text-sm text-red-800">{issue}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Recommendations */}
        {compliance.recommendations.length > 0 && (
          <div>
            <h3 className="font-medium text-gray-900 mb-3 flex items-center gap-2">
              <Info className="h-5 w-5" />
              Recommendations
            </h3>
            <div className="space-y-2">
              {compliance.recommendations.map((recommendation, index) => (
                <div key={index} className="flex items-start gap-2 p-3 bg-blue-50 border border-blue-200 rounded-md">
                  {getRecommendationIcon(recommendation)}
                  <span className="text-sm text-blue-800">{recommendation}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* WABO Requirements Reference */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <h3 className="font-medium text-yellow-900 mb-2">Key WABO/AFH Requirements</h3>
          <ul className="text-sm text-yellow-800 space-y-1">
            <li>• Accessible doors: 32" minimum width</li>
            <li>• Bathroom doors: 36" minimum width</li>
            <li>• Window sill height: 44" maximum for egress</li>
            <li>• Bathroom area: 30 sq ft minimum</li>
            <li>• Accessible shower: 30" × 48" minimum</li>
            <li>• Grab bar blocking required in bathrooms</li>
            <li>• Interconnected smoke/CO alarms throughout</li>
          </ul>
        </div>

        {/* Action Items */}
        {!compliance.compliant && (
          <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
            <h3 className="font-medium text-orange-900 mb-2">Next Steps</h3>
            <ol className="text-sm text-orange-800 space-y-1 list-decimal list-inside">
              <li>Review and address all compliance issues listed above</li>
              <li>Consider consulting with a licensed architect for final verification</li>
              <li>Review local building codes for additional requirements</li>
              <li>Prepare detailed construction drawings for permit submission</li>
            </ol>
          </div>
        )}
      </div>
    </div>
  );
};

export default ComplianceChecker;
