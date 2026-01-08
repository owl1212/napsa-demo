import React from 'react';

const Header: React.FC = () => {
  return (
    <div className="h-16 bg-white border-b border-border-color px-6 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <button className="p-2 border-none bg-transparent cursor-pointer">
          <i className="fa-solid fa-bars"></i>
        </button>
        <div className="w-8 h-8 bg-primary-navy rounded"></div>
        <div className="flex gap-4">
          <div className="flex items-center gap-2 cursor-pointer">
            <i className="fa-solid fa-link"></i>
            <span>Quick Links</span>
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <i className="fa-solid fa-bullhorn"></i>
            <span>Announcements</span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="text-sm">Kebbie Hamalala</div>
        <button className="p-2 border border-border-color rounded cursor-pointer">
          <i className="fa-regular fa-envelope"></i>
        </button>
        <button className="p-2 border border-border-color rounded cursor-pointer">
          <i className="fa-regular fa-sun"></i>
        </button>
        <div className="w-8 h-8 bg-bg-gray rounded-full flex items-center justify-center font-bold text-primary-navy">
          <img src="https://i.pravatar.cc/150?u=kebbie" alt="User" className="w-full h-full rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default Header;