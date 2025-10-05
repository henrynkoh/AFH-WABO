'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Wand2, Building, Home } from 'lucide-react';

const descriptionSchema = z.object({
  description: z.string().min(10, 'Description must be at least 10 characters'),
  planType: z.enum(['before', 'after'], {
    required_error: 'Please select a plan type'
  }),
  squareFootage: z.number().min(100, 'Square footage must be at least 100 sq ft').optional(),
  bedrooms: z.number().min(0).optional(),
  bathrooms: z.number().min(0).optional(),
});

type DescriptionFormData = z.infer<typeof descriptionSchema>;

interface DescriptionFormProps {
  onSubmit: (data: DescriptionFormData) => void;
  isLoading?: boolean;
}

const DescriptionForm: React.FC<DescriptionFormProps> = ({ onSubmit, isLoading }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue
  } = useForm<DescriptionFormData>({
    resolver: zodResolver(descriptionSchema)
  });

  const planType = watch('planType');

  const handleFormSubmit = (data: DescriptionFormData) => {
    onSubmit(data);
  };

  const generatePrompt = (type: 'before' | 'after') => {
    const basePrompt = type === 'before' 
      ? "Create a floor plan for an existing 1940s single-family home with the following features:"
      : "Create a WABO/AFH compliant floor plan with the following features:";
    
    setValue('description', basePrompt);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="flex items-center gap-2 mb-4">
        <Wand2 className="h-6 w-6 text-blue-600" />
        <h2 className="text-xl font-bold">AI Floor Plan Generator</h2>
      </div>

      <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Plan Type
          </label>
          <div className="flex gap-4">
            <label className="flex items-center">
              <input
                type="radio"
                value="before"
                {...register('planType')}
                className="mr-2"
              />
              <Building className="h-4 w-4 mr-1" />
              Before (Existing)
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                value="after"
                {...register('planType')}
                className="mr-2"
              />
              <Home className="h-4 w-4 mr-1" />
              After (WABO Compliant)
            </label>
          </div>
          {errors.planType && (
            <p className="text-red-500 text-sm mt-1">{errors.planType.message}</p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Square Footage
            </label>
            <input
              type="number"
              {...register('squareFootage', { valueAsNumber: true })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="e.g., 1500"
            />
            {errors.squareFootage && (
              <p className="text-red-500 text-sm mt-1">{errors.squareFootage.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Bedrooms
            </label>
            <input
              type="number"
              {...register('bedrooms', { valueAsNumber: true })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="e.g., 3"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Bathrooms
            </label>
            <input
              type="number"
              {...register('bathrooms', { valueAsNumber: true })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="e.g., 2"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Detailed Description
          </label>
          <textarea
            {...register('description')}
            rows={6}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Describe the floor plan in detail. Include room layouts, dimensions, door and window placements, and any specific requirements..."
          />
          {errors.description && (
            <p className="text-red-500 text-sm mt-1">{errors.description.message}</p>
          )}
        </div>

        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => generatePrompt('before')}
            className="px-4 py-2 text-sm bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors"
          >
            Generate Before Prompt
          </button>
          <button
            type="button"
            onClick={() => generatePrompt('after')}
            className="px-4 py-2 text-sm bg-blue-100 text-blue-700 rounded-md hover:bg-blue-200 transition-colors"
          >
            Generate After Prompt
          </button>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {isLoading ? (
            <div className="flex items-center justify-center gap-2">
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
              Generating Floor Plan...
            </div>
          ) : (
            'Generate Floor Plan'
          )}
        </button>
      </form>

      {planType && (
        <div className="mt-4 p-4 bg-blue-50 rounded-md">
          <h3 className="font-medium text-blue-900 mb-2">
            {planType === 'before' ? 'Before Plan Tips:' : 'After Plan Tips:'}
          </h3>
          <ul className="text-sm text-blue-800 space-y-1">
            {planType === 'before' ? (
              <>
                <li>• Describe the current layout and any existing issues</li>
                <li>• Include measurements if known</li>
                <li>• Note any non-compliant features</li>
              </>
            ) : (
              <>
                <li>• Focus on WABO/AFH compliance requirements</li>
                <li>• Include accessible door widths (32" minimum)</li>
                <li>• Specify accessible bathroom features</li>
                <li>• Mention egress window requirements</li>
              </>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DescriptionForm;
