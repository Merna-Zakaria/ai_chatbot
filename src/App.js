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
  const [enableSend, setEnableSend] = useState(true);
  const [isTyping, setIsTyping] = useState(false);
  const [openPreview, setOpenPreview] = useState(false);
  const chatRef = useRef(null);

  const handleSend = (e) => {
    if ((e.type === 'click' || e.key === 'Enter') && input.trim() && enableSend) {
      setEnableSend(false)
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
        setEnableSend(true);
        setOpenPreview(true)
      }, 3500);
    }
  };

  useEffect(() => {
    chatRef.current.scrollTop = chatRef.current.scrollHeight;
  }, [messages]);

  return (
    <>
      <Header />
      <div className='flex pt-[68px] bg-darkBlack h-screen '>
        <SideMenu />
        <div className='flex w-full bg-lightBlack'>
          <div className={`flex flex-col text-white p-4 mr-2 ${openPreview ? 'sm:w-1/2' : 'w-3/4'}`}>
            <div ref={chatRef} className="flex-1 h-[380px] overflow-y-auto mb-4 space-y-2 w-full">
              {messages.map((msg, index) => (
                <Message key={index} {...msg} />
              ))}
              {isTyping && <TypingIndicator />}
            </div>
            <div className='flex justify-between items-center mx-4 px-4 h-[30px] bg-purple'>
              <div className='flex items-center'>
                <GiFlowerEmblem className="text-purple-500" />
                <span className='px-2 lightGray'>Agent is waiting for your input....</span>
              </div>
              <p className='flex items-center lightGray'> <FaPause className='lightGray' /> Pause</p>
            </div>
            <div className="bg-[#2C3243] border-[#39395F] border mb-4">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleSend}
                className="flex-1 p-2 text-white w-full bg-[#2C3243]"
                placeholder="Type a message..."
              />
              <div className='flex justify-between'>
                <div className='nav-btn bg-[#2C3243]' >
                  <IoIosAttach className='lightGray' />
                </div>
                <div className='flex items-center'>
                  <p className='lightGray'>Have feedback?</p>
                  <div className='nav-btn bg-[#2C3243]' onClick={handleSend}>
                    <IoSend className='lightGray' />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {openPreview && <div className="flex items-center justify-center text-white p-4 sm:w-1/2 border-[#39395F] border">
           <div>
             <p className='text-white text-center'>This is a demo response.</p>
            <p className='text-white font-bold text-center'>In Progress</p>
            </div>
          </div>}
        </div>

      </div>
    </>
  );
}

export default App;
