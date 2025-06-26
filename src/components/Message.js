import React from 'react';

const Message = ({ text, isUser, timestamp }) => (
  <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-2`}>
    <div className={`max-w-xs p-2 rounded-lg ${isUser ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}>
      {text}
      <div className="text-xs opacity-70">{timestamp}</div>
    </div>
  </div>
);

export default Message;