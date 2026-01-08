const BenefitsView = () => {
  return (
    <div className="p-8 max-w-7xl w-full">
      <div className="text-xs text-text-gray mb-6">Home &gt; Member &gt; Benefits</div>

      <h1 className="text-2xl font-bold text-text-dark mb-8">Claims & Benefits</h1>

      {/* Logged Claims */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 mb-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-text-dark">Logged Claims</h2>
          <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">0</span>
        </div>
        <button className="bg-accent-gold text-white px-6 py-2.5 rounded-full font-medium text-sm">
          <i className="fa-solid fa-eye mr-2"></i> View Logged Claims
        </button>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {/* Formal Sector Benefits */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
              <i className="fa-solid fa-landmark"></i>
            </div>
            <h3 className="text-lg font-semibold text-text-dark">Formal Sector</h3>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4">
            <div className="flex items-start gap-2">
              <i className="fa-solid fa-triangle-exclamation text-yellow-600 mt-1"></i>
              <div>
                <p className="text-sm text-text-dark mb-2">
                  Your employment history is incomplete. Please update it to ensure accurate benefit calculations.
                </p>
              </div>
            </div>
          </div>

          <button className="bg-accent-blue text-white px-6 py-2.5 rounded-full font-medium text-sm w-full">
            <i className="fa-solid fa-arrow-right mr-2"></i> Resolve Employment History
          </button>
        </div>

        {/* Informal Sector Benefits */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-yellow-100 text-yellow-600 flex items-center justify-center">
              <i className="fa-solid fa-hand-holding-dollar"></i>
            </div>
            <h3 className="text-lg font-semibold text-text-dark">Informal Sector</h3>
          </div>

          <div className="text-center py-12">
            <i className="fa-regular fa-circle-xmark text-5xl text-gray-300 mb-4"></i>
            <p className="text-gray-500 text-sm">
              You are not currently eligible for informal sector benefits.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BenefitsView;