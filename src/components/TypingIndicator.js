import React from 'react';

const TypingIndicator = () => (
  <div className="flex justify-start mb-2">
    <div className="bg-gray-200 p-2 rounded-lg">
      <div className="flex space-x-1">
        <div className="w-1 h-1 bg-gray-500 rounded-full animate-bounce"></div>
        <div className="w-1 h-1 bg-gray-500 rounded-full animate-bounce delay-100"></div>
        <div className="w-1 h-1 bg-gray-500 rounded-full animate-bounce delay-200"></div>
      </div>
    </div>
  </div>
);

export default TypingIndicator;