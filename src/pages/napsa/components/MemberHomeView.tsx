const MemberHomeView = () => {
  return (
    <div className="p-8 max-w-7xl w-full">
      <div className="text-xs text-text-gray mb-2">Home &gt; Member</div>

      <div className="mb-6">
        <div className="text-text-gray text-sm">
          Social Security Number <strong className="text-text-dark">113292218</strong> <i className="fa-regular fa-copy ml-1"></i>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6 mb-8">
        {/* Contributions */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex gap-3 items-center mb-6">
            <div className="w-8 h-8 rounded-full bg-yellow-100 text-yellow-600 flex items-center justify-center text-sm">
              <i className="fa-solid fa-coins"></i>
            </div>
            <h3 className="text-lg font-semibold text-text-dark">Contributions</h3>
          </div>

          <div className="mb-4">
            <h4 className="text-accent-blue text-sm font-semibold">Formal Sector</h4>
            <div className="font-bold text-base">K 19,972.42</div>
            <div className="text-xs text-text-gray">Contributions: 44</div>
          </div>

          <div className="mb-6">
            <h4 className="text-accent-blue text-sm font-semibold">Informal Sector</h4>
            <div className="font-bold text-base">K 0</div>
            <div className="text-xs text-text-gray">Contributions: 0</div>
          </div>

          <button className="bg-accent-gold text-white w-full py-2 px-4 rounded-lg font-medium text-sm">
            <i className="fa-regular fa-file-lines mr-2"></i> View Statements
          </button>
        </div>

        {/* Middle Column Stack */}
        <div className="flex flex-col gap-6">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex-1 flex flex-col justify-center">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-base font-semibold text-text-dark">Flagged Items</h3>
              <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">0</span>
            </div>
            <div className="text-accent-blue text-xs font-medium cursor-pointer">Click here to view flagged issues</div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex-1 flex flex-col justify-center">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-base font-semibold text-text-dark">Member Eligible Claims</h3>
              <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">0</span>
            </div>
            <div className="text-accent-blue text-xs font-medium cursor-pointer">Click here to view Claims</div>
          </div>
        </div>

        {/* Claim Estimator */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-text-dark mb-6">Claim Estimator</h3>

          <div className="mb-4">
            <label className="block text-xs font-semibold text-gray-600 mb-1">Claim Type</label>
            <select className="w-full p-2 rounded-md border border-gray-300 text-sm">
              <option>Select the Type of Claim</option>
            </select>
          </div>

          <div className="mb-6">
            <label className="block text-xs font-semibold text-gray-600 mb-1">Current Gross Salary</label>
            <input type="text" className="w-full p-2 rounded-md border border-gray-300 text-sm" />
          </div>

          <div className="flex gap-3">
            <button className="flex-1 bg-accent-gold text-white py-2 px-3 rounded-md text-xs font-medium">
              <i className="fa-solid fa-calculator mr-1"></i> Calculate
            </button>
            <button className="flex-1 bg-primary-navy text-white py-2 px-3 rounded-md text-xs font-medium">
              <i className="fa-solid fa-rotate-right mr-1"></i> Reset
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {/* KYC Status Grid */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <i className="fa-regular fa-user text-lg"></i>
            <h2 className="text-lg font-semibold text-text-dark">KYC Status</h2>
          </div>

          <div className="flex flex-col gap-2">
            {[
              { label: 'Bank Details', status: 'Verify', arrow: true, bg: 'bg-yellow-100' },
              { label: 'Beneficiary Management', status: 'Verify', arrow: true, bg: 'bg-yellow-100' },
              { label: 'Date Of Birth', status: 'Check', icon: true, bg: 'bg-green-100' },
              { label: 'Employment History', status: 'Verify', arrow: true, bg: 'bg-yellow-100' },
              { label: 'Names', status: 'Check', icon: true, bg: 'bg-green-100' },
              { label: 'National Registration Card', status: 'Check', icon: true, bg: 'bg-green-100' },
              { label: 'Phone', status: 'Check', icon: true, bg: 'bg-green-100' },
            ].map((item, i) => (
              <div key={i} className={`p-3 ${item.bg} rounded-md flex justify-between items-center text-sm font-medium`}>
                <span>{item.label}</span>
                <div className="flex items-center gap-2">
                  {item.status === 'Verify' && <span>Verify</span>}
                  {item.arrow && <i className="fa-solid fa-arrow-right"></i>}
                  {item.icon && <i className="fa-regular fa-circle-check"></i>}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Retirement Tracker */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <i className="fa-solid fa-chart-line text-lg text-yellow-600"></i>
            <h2 className="text-lg font-semibold text-text-dark">Retirement Tracker</h2>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="text-xs text-text-gray mb-4">Date Joined NAPSA: 23 February 2017</div>

            <table className="w-full text-xs">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left p-2 text-text-gray font-semibold uppercase">CRITERIA</th>
                  <th className="text-left p-2 text-text-gray font-semibold uppercase">CURRENT AGE</th>
                  <th className="text-left p-2 text-text-gray font-semibold uppercase">REQUIRED AGE</th>
                  <th className="text-left p-2 text-text-gray font-semibold uppercase">REQUIRED CONTRIBUTIONS</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="p-2 text-yellow-600 font-medium">Early Retirement Pension</td>
                  <td className="p-2">30 years</td>
                  <td className="p-2">55 years</td>
                  <td className="p-2">180 and above</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="p-2 text-yellow-600 font-medium">Normal Retirement Pension</td>
                  <td className="p-2">30 years</td>
                  <td className="p-2">60 years</td>
                  <td className="p-2">180 and above</td>
                </tr>
                <tr>
                  <td className="p-2 text-yellow-600 font-medium">Retirement Lumpsum</td>
                  <td className="p-2">30 years</td>
                  <td className="p-2">60 years</td>
                  <td className="p-2">Less Than 180</td>
                </tr>
              </tbody>
            </table>

            <div className="mt-6 text-center text-sm text-gray-600">
              You have <strong className="text-text-dark">30 years</strong> until normal retirement age.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberHomeView;