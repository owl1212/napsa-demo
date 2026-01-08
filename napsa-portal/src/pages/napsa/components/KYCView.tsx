const KYCView = () => {
  return (
    <div className="p-8 max-w-7xl w-full">
      <div className="text-xs text-text-gray mb-6">Home &gt; Member &gt; Manage Account</div>

      <h1 className="text-2xl font-bold text-text-dark mb-8">Manage Your Account</h1>

      {/* KYC Status List */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <i className="fa-regular fa-user text-lg"></i>
          <h2 className="text-lg font-semibold text-text-dark">KYC Status</h2>
        </div>

        <div className="flex flex-col gap-2">
          {[
            { label: 'Bank Details', status: 'Verify', arrow: true, bg: 'bg-yellow-100', textColor: 'text-yellow-800' },
            { label: 'Beneficiary Management', status: 'Verify', arrow: true, bg: 'bg-yellow-100', textColor: 'text-yellow-800' },
            { label: 'Date Of Birth', status: 'Check', icon: true, bg: 'bg-green-100', textColor: 'text-green-800' },
            { label: 'Employment History', status: 'Verify', arrow: true, bg: 'bg-yellow-100', textColor: 'text-yellow-800' },
            { label: 'Names', status: 'Check', icon: true, bg: 'bg-green-100', textColor: 'text-green-800' },
            { label: 'National Registration Card', status: 'Check', icon: true, bg: 'bg-green-100', textColor: 'text-green-800' },
            { label: 'Phone', status: 'Check', icon: true, bg: 'bg-green-100', textColor: 'text-green-800' },
          ].map((item, i) => (
            <div
              key={i}
              className={`p-4 ${item.bg} rounded-lg flex justify-between items-center text-sm font-medium ${item.textColor} cursor-pointer hover:opacity-90`}
            >
              <span>{item.label}</span>
              <div className="flex items-center gap-2">
                {item.status === 'Verify' && <span>Verify</span>}
                {item.arrow && <i className="fa-solid fa-arrow-right"></i>}
                {item.icon && <i className="fa-regular fa-circle-check text-lg"></i>}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Management Cards */}
      <div className="grid grid-cols-2 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 cursor-pointer hover:shadow-md transition-shadow">
          <div className="flex items-center gap-4 mb-3">
            <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
              <i className="fa-solid fa-briefcase text-xl"></i>
            </div>
            <h3 className="text-lg font-semibold text-text-dark">Employment History</h3>
          </div>
          <p className="text-sm text-text-gray mb-4">
            View and update your employment records to ensure accurate contributions.
          </p>
          <button className="text-accent-blue font-medium text-sm flex items-center gap-2">
            Manage <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 cursor-pointer hover:shadow-md transition-shadow">
          <div className="flex items-center gap-4 mb-3">
            <div className="w-12 h-12 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center">
              <i className="fa-solid fa-users text-xl"></i>
            </div>
            <h3 className="text-lg font-semibold text-text-dark">Beneficiaries</h3>
          </div>
          <p className="text-sm text-text-gray mb-4">
            Add or update your beneficiaries to ensure your benefits reach the right people.
          </p>
          <button className="text-accent-blue font-medium text-sm flex items-center gap-2">
            Manage <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 cursor-pointer hover:shadow-md transition-shadow">
          <div className="flex items-center gap-4 mb-3">
            <div className="w-12 h-12 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
              <i className="fa-solid fa-building-columns text-xl"></i>
            </div>
            <h3 className="text-lg font-semibold text-text-dark">Payment Methods</h3>
          </div>
          <p className="text-sm text-text-gray mb-4">
            Add or update your bank details for benefit payments and refunds.
          </p>
          <button className="text-accent-blue font-medium text-sm flex items-center gap-2">
            Manage <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 cursor-pointer hover:shadow-md transition-shadow">
          <div className="flex items-center gap-4 mb-3">
            <div className="w-12 h-12 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center">
              <i className="fa-solid fa-user-group text-xl"></i>
            </div>
            <h3 className="text-lg font-semibold text-text-dark">Parent Details</h3>
          </div>
          <p className="text-sm text-text-gray mb-4">
            Update your parent information for survivor benefit eligibility.
          </p>
          <button className="text-accent-blue font-medium text-sm flex items-center gap-2">
            Manage <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default KYCView;