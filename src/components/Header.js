import React from 'react';

const Header = () => {
  return (
    <div className="w-full h-[68px] bg-darkBlack grid grid-cols-12 px-6 bg-lightBlack">
      <p className="text-white text-lg font-semibold col-span-4">Deploy AI</p>
      <div className='flex col-span-8'>
      <div className="flex-1 mx-4">
        <input
          type="text"
          placeholder="Search..."
          className="w-full p-2 rounded-lg text-black"
        />
      </div>
      <div className="flex space-x-2">
        <button className="p-2 rounded-full bg-gray-700 text-white hover:bg-gray-600">
          +
        </button>
        <div className="w-8 h-8 bg-gray-600 rounded-full"></div>
      </div>
      </div>
    </div>
  );
};

export default Header;