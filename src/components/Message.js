import React from 'react';

const Message = ({ text, isUser, timestamp }) => (
  <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-2`}>
    <div className={`max-w-xs p-2 rounded-lg ${isUser ? 'bg-blue-500 text-white m-2' : 'bg-gray-200 text-black'}`}>
      {text}
      <div className="text-xs opacity-70">{timestamp}</div>
    </div>
    {isUser ? <button className="mt-3 mr-3 w-9 h-9 bg-gray-600 rounded-full flex items-center justify-center text-white text-sm focus:outline-none">
      MZ
    </button> : ''}
  </div>
);

export default Message;