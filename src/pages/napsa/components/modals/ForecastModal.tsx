import React, { useState } from 'react';
import { X, TrendingUp, Calendar, BarChart3, Save } from 'lucide-react';

interface ForecastModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: any) => void;
}

const ForecastModal: React.FC<ForecastModalProps> = ({ isOpen, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    forecastPeriod: 'Q1-Q4 2026',
    baseYear: '2025',
    growthRate: 5,
    inflationRate: 8,
    methodology: 'Linear Regression',
    assumptions: '',
  });

  const [forecastData, setForecastData] = useState([
    { period: 'Q1 2026', revenue: 58000000, expenses: 32000000, netIncome: 26000000 },
    { period: 'Q2 2026', revenue: 62000000, expenses: 34000000, netIncome: 28000000 },
    { period: 'Q3 2026', revenue: 65000000, expenses: 35000000, netIncome: 30000000 },
    { period: 'Q4 2026', revenue: 68000000, expenses: 36000000, netIncome: 32000000 },
  ]);

  if (!isOpen) return null;

  const methodologies = [
    'Linear Regression',
    'Moving Average',
    'Exponential Smoothing',
    'ARIMA Model',
    'Manual Adjustment'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      ...formData,
      forecastData,
      generatedAt: new Date().toISOString(),
    });
    onClose();
  };

  const updateGrowthRate = (rate: number) => {
    setFormData({ ...formData, growthRate: rate });
    // Recalculate forecast data based on new growth rate
    const baseRevenue = 55000000;
    const baseExpenses = 31000000;
    const newData = forecastData.map((item, index) => {
      const growth = Math.pow(1 + rate / 100, (index + 1) / 4);
      const revenue = Math.round(baseRevenue * growth);
      const expenses = Math.round(baseExpenses * growth * 1.02); // Expenses grow slightly faster
      return {
        ...item,
        revenue,
        expenses,
        netIncome: revenue - expenses,
      };
    });
    setForecastData(newData);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-2xl max-w-4xl w-full mx-4 max-h-[90vh] overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
            <TrendingUp size={20} />
            Generate Financial Forecast
          </h2>
          <button onClick={onClose} className="p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded">
            <X size={18} />
          </button>
        </div>

        <div className="p-6 overflow-auto max-h-[70vh]">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Forecast Period</label>
                <select
                  value={formData.forecastPeriod}
                  onChange={(e) => setFormData({ ...formData, forecastPeriod: e.target.value })}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-accent-blue focus:border-transparent"
                >
                  <option>Q1-Q4 2026</option>
                  <option>Fiscal Year 2026</option>
                  <option>Q1-Q2 2026</option>
                  <option>Monthly 2026</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Base Year</label>
                <select
                  value={formData.baseYear}
                  onChange={(e) => setFormData({ ...formData, baseYear: e.target.value })}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-accent-blue focus:border-transparent"
                >
                  <option>2025</option>
                  <option>2024</option>
                  <option>2023</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Expected Growth Rate (%)</label>
                <input
                  type="number"
                  value={formData.growthRate}
                  onChange={(e) => updateGrowthRate(Number(e.target.value))}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-accent-blue focus:border-transparent"
                  min="0"
                  max="50"
                  step="0.5"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Inflation Rate (%)</label>
                <input
                  type="number"
                  value={formData.inflationRate}
                  onChange={(e) => setFormData({ ...formData, inflationRate: Number(e.target.value) })}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-accent-blue focus:border-transparent"
                  min="0"
                  max="20"
                  step="0.1"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-2">Forecasting Methodology</label>
                <select
                  value={formData.methodology}
                  onChange={(e) => setFormData({ ...formData, methodology: e.target.value })}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-accent-blue focus:border-transparent"
                >
                  {methodologies.map(method => (
                    <option key={method} value={method}>{method}</option>
                  ))}
                </select>
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-2">Key Assumptions</label>
                <textarea
                  value={formData.assumptions}
                  onChange={(e) => setFormData({ ...formData, assumptions: e.target.value })}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-accent-blue focus:border-transparent"
                  rows={3}
                  placeholder="Enter key assumptions for this forecast..."
                />
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="text-md font-semibold mb-4 flex items-center gap-2">
                <BarChart3 size={18} />
                Forecast Results Preview
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-300">
                      <th className="text-left py-2">Period</th>
                      <th className="text-right py-2">Revenue (K)</th>
                      <th className="text-right py-2">Expenses (K)</th>
                      <th className="text-right py-2">Net Income (K)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {forecastData.map((item, index) => (
                      <tr key={index} className="border-b border-gray-200">
                        <td className="py-2 font-medium">{item.period}</td>
                        <td className="text-right py-2">{item.revenue.toLocaleString()}</td>
                        <td className="text-right py-2">{item.expenses.toLocaleString()}</td>
                        <td className="text-right py-2 font-semibold text-green-600">{item.netIncome.toLocaleString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="flex justify-end gap-3 pt-4 border-t border-gray-200">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2 bg-primary-navy text-white rounded-lg hover:bg-accent-gold hover:text-primary-navy transition-colors flex items-center gap-2"
              >
                <Save size={18} />
                Generate Forecast
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForecastModal;