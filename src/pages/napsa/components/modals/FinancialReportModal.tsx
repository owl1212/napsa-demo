import React from 'react';
import { X, Download, Printer, Share2 } from 'lucide-react';

interface FinancialReportModalProps {
  isOpen: boolean;
  onClose: () => void;
  reportType: string;
}

const FinancialReportModal: React.FC<FinancialReportModalProps> = ({ isOpen, onClose, reportType }) => {
  if (!isOpen) return null;

  const renderBalanceSheet = () => (
    <div className="bg-white p-8 max-w-4xl mx-auto font-mono text-sm" style={{ fontFamily: 'Courier New, monospace' }}>
      {/* PDF Header */}
      <div className="text-center mb-8 border-b-2 border-gray-800 pb-4">
        <h1 className="text-2xl font-bold text-gray-800">NATIONAL PENSION SCHEME AUTHORITY</h1>
        <h2 className="text-xl font-semibold text-gray-700 mt-2">BALANCE SHEET</h2>
        <p className="text-gray-600 mt-1">As at December 31, 2025</p>
        <p className="text-xs text-gray-500 mt-2">All amounts in Zambian Kwacha (K)</p>
      </div>

      {/* Assets Section */}
      <div className="mb-8">
        <h3 className="text-lg font-bold text-gray-800 mb-4 border-b border-gray-400 pb-1">ASSETS</h3>
        
        <div className="mb-4">
          <h4 className="font-semibold text-gray-700 mb-2">CURRENT ASSETS</h4>
          <div className="ml-4 space-y-1">
            <div className="flex justify-between">
              <span>Cash and Cash Equivalents</span>
              <span className="font-mono">86,000,000</span>
            </div>
            <div className="flex justify-between">
              <span>Short-term Investments</span>
              <span className="font-mono">45,200,000</span>
            </div>
            <div className="flex justify-between">
              <span>Accounts Receivable</span>
              <span className="font-mono">12,300,000</span>
            </div>
            <div className="flex justify-between">
              <span>Prepaid Expenses</span>
              <span className="font-mono">3,500,000</span>
            </div>
            <div className="flex justify-between font-semibold border-t border-gray-300 pt-1 mt-2">
              <span>Total Current Assets</span>
              <span className="font-mono">147,000,000</span>
            </div>
          </div>
        </div>

        <div className="mb-4">
          <h4 className="font-semibold text-gray-700 mb-2">NON-CURRENT ASSETS</h4>
          <div className="ml-4 space-y-1">
            <div className="flex justify-between">
              <span>Property and Equipment (Net)</span>
              <span className="font-mono">282,000,000</span>
            </div>
            <div className="flex justify-between">
              <span>Investment Properties</span>
              <span className="font-mono">156,800,000</span>
            </div>
            <div className="flex justify-between">
              <span>Long-term Investments</span>
              <span className="font-mono">1,245,200,000</span>
            </div>
            <div className="flex justify-between">
              <span>Intangible Assets</span>
              <span className="font-mono">23,400,000</span>
            </div>
            <div className="flex justify-between font-semibold border-t border-gray-300 pt-1 mt-2">
              <span>Total Non-Current Assets</span>
              <span className="font-mono">1,707,400,000</span>
            </div>
          </div>
        </div>

        <div className="flex justify-between font-bold text-lg border-t-2 border-gray-800 pt-2 mt-4">
          <span>TOTAL ASSETS</span>
          <span className="font-mono">1,854,400,000</span>
        </div>
      </div>

      {/* Liabilities and Equity Section */}
      <div className="mb-8">
        <h3 className="text-lg font-bold text-gray-800 mb-4 border-b border-gray-400 pb-1">LIABILITIES AND EQUITY</h3>
        
        <div className="mb-4">
          <h4 className="font-semibold text-gray-700 mb-2">CURRENT LIABILITIES</h4>
          <div className="ml-4 space-y-1">
            <div className="flex justify-between">
              <span>Accounts Payable</span>
              <span className="font-mono">18,000,000</span>
            </div>
            <div className="flex justify-between">
              <span>Accrued Liabilities</span>
              <span className="font-mono">7,200,000</span>
            </div>
            <div className="flex justify-between">
              <span>Short-term Debt</span>
              <span className="font-mono">25,600,000</span>
            </div>
            <div className="flex justify-between">
              <span>Pension Benefit Obligations (Current)</span>
              <span className="font-mono">45,800,000</span>
            </div>
            <div className="flex justify-between font-semibold border-t border-gray-300 pt-1 mt-2">
              <span>Total Current Liabilities</span>
              <span className="font-mono">96,600,000</span>
            </div>
          </div>
        </div>

        <div className="mb-4">
          <h4 className="font-semibold text-gray-700 mb-2">NON-CURRENT LIABILITIES</h4>
          <div className="ml-4 space-y-1">
            <div className="flex justify-between">
              <span>Long-term Debt</span>
              <span className="font-mono">234,500,000</span>
            </div>
            <div className="flex justify-between">
              <span>Pension Benefit Obligations (Non-current)</span>
              <span className="font-mono">1,023,400,000</span>
            </div>
            <div className="flex justify-between">
              <span>Other Long-term Liabilities</span>
              <span className="font-mono">67,200,000</span>
            </div>
            <div className="flex justify-between font-semibold border-t border-gray-300 pt-1 mt-2">
              <span>Total Non-Current Liabilities</span>
              <span className="font-mono">1,325,100,000</span>
            </div>
          </div>
        </div>

        <div className="mb-4">
          <h4 className="font-semibold text-gray-700 mb-2">EQUITY</h4>
          <div className="ml-4 space-y-1">
            <div className="flex justify-between">
              <span>Contributed Capital</span>
              <span className="font-mono">200,000,000</span>
            </div>
            <div className="flex justify-between">
              <span>Retained Earnings</span>
              <span className="font-mono">156,700,000</span>
            </div>
            <div className="flex justify-between">
              <span>Accumulated Other Comprehensive Income</span>
              <span className="font-mono">76,000,000</span>
            </div>
            <div className="flex justify-between font-semibold border-t border-gray-300 pt-1 mt-2">
              <span>Total Equity</span>
              <span className="font-mono">432,700,000</span>
            </div>
          </div>
        </div>

        <div className="flex justify-between font-bold text-lg border-t-2 border-gray-800 pt-2 mt-4">
          <span>TOTAL LIABILITIES AND EQUITY</span>
          <span className="font-mono">1,854,400,000</span>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center text-xs text-gray-500 mt-8 pt-4 border-t border-gray-300">
        <p>This financial statement has been prepared in accordance with International Financial Reporting Standards (IFRS)</p>
        <p>Prepared by: Finance Department | Date: January 15, 2026 | Page 1 of 1</p>
      </div>
    </div>
  );

  const renderIncomeStatement = () => (
    <div className="bg-white p-8 max-w-4xl mx-auto font-mono text-sm">
      <div className="text-center mb-8 border-b-2 border-gray-800 pb-4">
        <h1 className="text-2xl font-bold text-gray-800">NATIONAL PENSION SCHEME AUTHORITY</h1>
        <h2 className="text-xl font-semibold text-gray-700 mt-2">INCOME STATEMENT</h2>
        <p className="text-gray-600 mt-1">For the Quarter Ended December 31, 2025</p>
        <p className="text-xs text-gray-500 mt-2">All amounts in Zambian Kwacha (K)</p>
      </div>

      <div className="space-y-4">
        <div className="flex justify-between">
          <span className="font-semibold">Investment Income</span>
          <span className="font-mono">145,200,000</span>
        </div>
        <div className="flex justify-between">
          <span className="font-semibold">Contributions Received</span>
          <span className="font-mono">89,600,000</span>
        </div>
        <div className="flex justify-between font-bold border-t border-gray-400 pt-2">
          <span>TOTAL REVENUE</span>
          <span className="font-mono">234,800,000</span>
        </div>

        <div className="mt-6">
          <div className="flex justify-between">
            <span>Operating Expenses</span>
            <span className="font-mono">45,300,000</span>
          </div>
          <div className="flex justify-between">
            <span>Administrative Expenses</span>
            <span className="font-mono">23,400,000</span>
          </div>
          <div className="flex justify-between">
            <span>Pension Benefit Payments</span>
            <span className="font-mono">67,800,000</span>
          </div>
          <div className="flex justify-between font-bold border-t border-gray-400 pt-2">
            <span>TOTAL EXPENSES</span>
            <span className="font-mono">136,500,000</span>
          </div>
        </div>

        <div className="flex justify-between font-bold text-lg border-t-2 border-gray-800 pt-4 mt-4">
          <span>NET INCOME</span>
          <span className="font-mono">98,300,000</span>
        </div>
      </div>

      <div className="text-center text-xs text-gray-500 mt-8 pt-4 border-t border-gray-300">
        <p>This financial statement has been prepared in accordance with International Financial Reporting Standards (IFRS)</p>
        <p>Prepared by: Finance Department | Date: January 15, 2026 | Page 1 of 1</p>
      </div>
    </div>
  );

  const renderReport = () => {
    switch (reportType) {
      case 'Balance Sheet':
        return renderBalanceSheet();
      case 'Income Statement':
        return renderIncomeStatement();
      default:
        return renderBalanceSheet();
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-gray-100 rounded-lg shadow-2xl max-w-6xl w-full mx-4 max-h-[90vh] overflow-hidden">
        {/* Modal Header */}
        <div className="bg-white px-6 py-4 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-lg font-semibold text-gray-800">{reportType} - PDF Preview</h2>
          <div className="flex items-center gap-2">
            <button className="p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded">
              <Download size={18} />
            </button>
            <button className="p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded">
              <Printer size={18} />
            </button>
            <button className="p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded">
              <Share2 size={18} />
            </button>
            <button onClick={onClose} className="p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded">
              <X size={18} />
            </button>
          </div>
        </div>

        {/* PDF Content */}
        <div className="overflow-auto max-h-[80vh] bg-gray-100 p-4">
          {renderReport()}
        </div>

        {/* Modal Footer */}
        <div className="bg-white px-6 py-4 border-t border-gray-200 flex justify-end gap-3">
          <button onClick={onClose} className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            Close
          </button>
          <button className="px-4 py-2 bg-primary-navy text-white rounded-lg hover:bg-accent-gold hover:text-primary-navy transition-colors">
            Download PDF
          </button>
        </div>
      </div>
    </div>
  );
};

export default FinancialReportModal;