import React from 'react';
import { Loader2, AlertCircle } from 'lucide-react';

interface PlaceholderViewProps {
  title: string;
  description?: string;
  showLoader?: boolean;
}

const PlaceholderView: React.FC<PlaceholderViewProps> = ({
  title,
  description = "This module is currently under development and will be available soon.",
  showLoader = false
}) => {
  return (
    <div className="min-h-screen bg-bg-gray p-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-12 text-center">
          <div className="mb-6">
            {showLoader ? (
              <Loader2 className="w-16 h-16 text-accent-blue animate-spin mx-auto" />
            ) : (
              <AlertCircle className="w-16 h-16 text-accent-gold mx-auto" />
            )}
          </div>
          <h1 className="text-2xl font-bold text-primary-navy mb-4">{title}</h1>
          <p className="text-gray-600 text-lg mb-8">{description}</p>

          {showLoader && (
            <div className="flex justify-center">
              <div className="animate-pulse bg-gray-200 rounded-lg h-4 w-48"></div>
            </div>
          )}

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="w-12 h-12 bg-accent-blue/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <AlertCircle className="w-6 h-6 text-accent-blue" />
              </div>
              <h3 className="font-semibold text-primary-navy mb-2">Coming Soon</h3>
              <p className="text-sm text-gray-600">This feature is in active development</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="w-12 h-12 bg-accent-gold/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <AlertCircle className="w-6 h-6 text-accent-gold" />
              </div>
              <h3 className="font-semibold text-primary-navy mb-2">Professional Implementation</h3>
              <p className="text-sm text-gray-600">Built to enterprise standards</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="w-12 h-12 bg-primary-navy/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <AlertCircle className="w-6 h-6 text-primary-navy" />
              </div>
              <h3 className="font-semibold text-primary-navy mb-2">NAPSA Integration</h3>
              <p className="text-sm text-gray-600">Seamlessly integrated with pension systems</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceholderView;