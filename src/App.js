import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import Message from './components/Message';
import TypingIndicator from './components/TypingIndicator';
import Header from './components/Header';

function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatRef = useRef(null);

  const handleSend = (e) => {
    if ((e.type === 'click' || e.key === 'Enter') && input.trim()) {
      const userMessage = {
        text: input,
        isUser: true,
        timestamp: new Date().toLocaleTimeString()
      };
      setMessages([...messages, userMessage]);
      setInput('');
      setIsTyping(true);

      setTimeout(() => {
        const botMessage = {
          text: 'This is a demo response.',
          isUser: false,
          timestamp: new Date().toLocaleTimeString()
        };
        setMessages(prev => [...prev, botMessage]);
        setIsTyping(false);
      }, 3500);
    }
  };

  useEffect(() => {
    chatRef.current.scrollTop = chatRef.current.scrollHeight;
  }, [messages]);

  return (
    <>
      <Header />
    <div className="flex flex-col h-screen bg-gray-900 text-white p-4">
      <div ref={chatRef} className="flex-1 overflow-y-auto mb-4 space-y-2">
        {messages.map((msg, index) => (
          <Message key={index} {...msg} />
        ))}
        {isTyping && <TypingIndicator />}
      </div>
      <div className="flex">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleSend}
          className="flex-1 p-2 rounded-l-lg text-black"
          placeholder="Type a message..."
        />
        <button
          onClick={handleSend}
          className="bg-blue-500 text-white p-2 rounded-r-lg"
        >
          Send
        </button>
      </div>
    </div>
    </>
  );
}

export default App;
