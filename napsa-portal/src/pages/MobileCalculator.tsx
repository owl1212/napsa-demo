import React, { useState } from 'react';

const MobileCalculator: React.FC = () => {
  const [amount, setAmount] = useState(25000);
  const [months, setMonths] = useState(12);

  // Simple calculation: assume 10% interest per year
  const monthlyInstallment = Math.round((amount * 1.1) / months);

  return (
    <div className="max-w-md mx-auto bg-white min-h-screen flex flex-col shadow-lg">
      <div className="bg-primary-blue text-white p-5 rounded-bl-2xl rounded-br-2xl">
        <h2 className="text-xl mb-1">Loan Calculator</h2>
        <p className="text-sm opacity-80 mb-0">Check your eligibility instantly.</p>
      </div>

      <div className="p-6 flex-1">
        {/* Product Selector */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-text-dark mb-1">Loan Product</label>
          <select className="w-full p-3 border border-gray-300 rounded text-sm bg-white">
            <option>Salary Backed Loan</option>
            <option>Auto Loan</option>
            <option>Business Loan</option>
          </select>
        </div>

        {/* Amount Slider */}
        <div className="mb-8">
          <div className="flex justify-between mb-2">
            <label className="block text-sm font-medium text-text-dark">I want to borrow</label>
            <span className="text-primary-blue font-bold">K {amount.toLocaleString()}</span>
          </div>
          <input
            type="range"
            min="1000"
            max="100000"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            className="w-full h-1.5 bg-gray-300 rounded outline-none appearance-none"
            style={{
              background: 'linear-gradient(to right, #004499 0%, #004499 ' + ((amount - 1000) / (100000 - 1000)) * 100 + '%, #E0E0E0 ' + ((amount - 1000) / (100000 - 1000)) * 100 + '%, #E0E0E0 100%)'
            }}
          />
          <style dangerouslySetInnerHTML={{
            __html: `
              input[type="range"]::-webkit-slider-thumb {
                appearance: none;
                width: 24px;
                height: 24px;
                border-radius: 50%;
                background: #004499;
                cursor: pointer;
                border: 2px solid white;
                box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
              }
            `
          }} />
          <div className="flex justify-between text-text-muted text-xs mt-1">
            <span>K 1k</span>
            <span>K 100k</span>
          </div>
        </div>

        {/* Tenure Slider */}
        <div className="mb-8">
          <div className="flex justify-between mb-2">
            <label className="block text-sm font-medium text-text-dark">Repayment Period</label>
            <span className="text-primary-blue font-bold">{months} Months</span>
          </div>
          <input
            type="range"
            min="3"
            max="60"
            value={months}
            onChange={(e) => setMonths(Number(e.target.value))}
            className="w-full h-1.5 bg-gray-300 rounded outline-none appearance-none"
            style={{
              background: 'linear-gradient(to right, #004499 0%, #004499 ' + ((months - 3) / (60 - 3)) * 100 + '%, #E0E0E0 ' + ((months - 3) / (60 - 3)) * 100 + '%, #E0E0E0 100%)'
            }}
          />
          <div className="flex justify-between text-text-muted text-xs mt-1">
            <span>3 M</span>
            <span>60 M</span>
          </div>
        </div>

        {/* Result */}
        <div className="bg-bg-dashboard rounded-lg p-5 text-center mt-5">
          <div className="text-text-muted text-xs uppercase mb-2">Estimated Monthly Installment</div>
          <div className="text-3xl font-bold text-primary-blue mb-1">K {monthlyInstallment.toLocaleString()}</div>
          <div className="text-sm text-success-green font-semibold">You are eligible!</div>
        </div>

        <button className="w-full bg-primary-blue text-white py-3 rounded-lg mt-8 text-base font-semibold">Apply Now</button>
      </div>

      {/* Bottom Nav */}
      <div className="mt-auto border-t border-gray-300 p-2.5 flex justify-around bg-white">
        <div className="text-2xl text-gray-400">🏠</div>
        <div className="text-2xl text-primary-blue">🔢</div>
        <div className="text-2xl text-gray-400">📄</div>
        <a href="/admin-dashboard" className="text-xl text-gray-400 no-underline flex items-center justify-center" title="Staff Login (Demo)">🔐</a>
      </div>
    </div>
  );
};

export default MobileCalculator;