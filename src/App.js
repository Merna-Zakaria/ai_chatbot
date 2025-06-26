import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import Message from './components/Message';
import TypingIndicator from './components/TypingIndicator';
import Header from './components/Header';
import SideMenu from './components/SideMenu';
import { IoSend } from "react-icons/io5";
import { IoIosAttach } from "react-icons/io";
import { GiFlowerEmblem } from "react-icons/gi";
import { FaPause } from "react-icons/fa6";

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
      <div className='flex'>
        <SideMenu />
        <div className="flex flex-col h-screen bg-gray-900 text-white p-4 w-full">
          <div ref={chatRef} className="flex-1 overflow-y-auto mb-4 space-y-2">
            {messages.map((msg, index) => (
              <Message key={index} {...msg} />
            ))}
            {isTyping && <TypingIndicator />}
          </div>
            <div className='flex justify-between items-center mx-4 px-4 h-[30px] bg-purple'>
            <div className='flex items-center'>
                <GiFlowerEmblem className="text-purple-500"/>
              <span className='px-2 lightGray'>Agent is waiting for your input....</span>
            </div>
            <p className='flex items-center lightGray'> <FaPause className='lightGray'/> Pause</p>
            </div>
          <div className="bg-lightBlack mb-4">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleSend}
              className="flex-1 p-2 text-white w-full bg-lightBlack"
              placeholder="Type a message..."
            />
            <div className='flex justify-between'>
              <div className='nav-btn' >
                <IoIosAttach className='lightGray'/>
              </div>
              <div className='flex items-center'>
              <p className='lightGray'>Have feedback?</p>
              <div className='nav-btn' onClick={handleSend}>
                <IoSend className='lightGray'/>
              </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}

export default App;
