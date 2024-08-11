import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import {motion} from 'framer-motion';

function ChatBox({closeChatBox, toggleChatBox}) {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);
  const messagesContainerRef = useRef(null);
  const [botDraggableArea, setBotDraggableArea] = useState({left:0, right:0, top:0, bottom:0});
  const [cursorStyle, setCursorStyle] = useState('pointer');
  const [botRes, setBotRes] = useState(null);
  const [botReqProcessing, setBotReqProcessing] = useState(false);
  

  useEffect(() => {
    // Scroll to the bottom of the chat box when messages are updated
    scrollToBottom();
  }, [messages]);
  useEffect(()=>{
    if(botRes){
      const isSingleDigitMin = (new Date().getMinutes() - new Date().getMinutes()%10) === 0;
      setMessages([...messages, { text: botRes, sender: 'bot', time: +(new Date()).getHours() + ':' + (isSingleDigitMin? '0'+new Date().getMinutes():new Date().getMinutes()) }]);
      setBotRes(null);
    }
  }, [botRes])
  useEffect(() => {
      if (typeof window !== "undefined") {
          let elem = document.querySelector('#assistant-for-sunil-icon');
          const rect = elem.getBoundingClientRect();
          const distanceAbove = rect.top;
          const distanceBelow = window.innerHeight - rect.bottom;
          const distanceLeft = rect.left;
          const distanceRight = window.innerWidth - rect.right;
          let tempArea = {left:-distanceLeft, right:distanceRight, top:-distanceAbove, bottom:distanceBelow}
          setBotDraggableArea(tempArea);
      }
  }, []);
  const getBotResponse =  () => {
    return new Promise((resolve)=>{
      setTimeout(() => {
        resolve("Apologies for the inconvenience. We're currently working on bringing the feature back online and appreciate your patience." );
      }, 5000);
    })
  }
  const handleMessageSend = async () => {

    if (inputValue.trim() !== '') {
      const isSingleDigitMin = (new Date().getMinutes() - new Date().getMinutes()%10) === 0;

      setMessages([...messages, { text: inputValue, sender: 'user', time: +(new Date()).getHours() + ':' + (isSingleDigitMin? '0'+(new Date()).getMinutes():(new Date()).getMinutes()) }]);
      setInputValue('');
      inputRef.current.style.height = '2rem';
      // Add logic to send message to the chatbot and receive response
    }
    if (inputValue.trim() !== '') {
      setBotReqProcessing(true);
      const res = await getBotResponse();
      setBotRes(res);
      setBotReqProcessing(false);
    }
  };
  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      handleMessageSend();
    }
  };
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    // Automatically resize the input field
    inputRef.current.style.height = inputRef.current.scrollHeight + 'px';
  };
  const scrollToBottom = () => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
    }
  };
  function Loader() {
    return (
      <div className="loader-container">
        <div className="loader-text">
          <span>L</span>
          <span>o</span>
          <span>a</span>
          <span>d</span>
          <span>i</span>
          <span>n</span>
          <span>g</span>
          <span>.</span>
          <span>.</span>
          <span>.</span>
          <span>.</span>
          <span>.</span>
        </div>
      </div>
    );
  }
  
  
  
  
  return (
    <div className={`bot-chat-box flex flex-col h-96 bg-gray-100 rounded-lg shadow-lg w-80 text-xs ${toggleChatBox? 'visible': 'hidden' } `}>
      <div className='header  w-full h-10 rounded-t-lg flex justify-between pl-4 pt-3 pr-4 border-b-2' >
        <div className='' >
          Personal Assistant
        </div>
        <div>
        <button className='hover:scale-110' onClick={(e)=>closeChatBox()}  >
            <svg fill='' focusable="false" width="20" height="20" viewBox="0 0 24 24" className=" NMm5M"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"></path></svg>
        </button>
        </div>
      </div>
      <div className="flex-1 p-4 overflow-y-auto" ref={messagesContainerRef} >
        {messages.map((message, index) => (
          <div
            key={index}
            className={`message ${message.sender === 'user' ? 'self float-right' : 'other float-left'} w-60 pt-2  `}
          >
            {message.sender !== 'user'?  <div  style={{
                display: 'flex', justifyContent: 'flex-start', fontSize: '10px',  marginBottom: '-.7rem', marginLeft: '-8px', borderRadius: '0 3px 3px 0', 
              }} > 
                  <div className='w-5 h-5 bg-slate-300 rounded-xl flex justify-center leading-5 ' style={{fontSize: '9px'}}>
                  <Image
                    src="/static/Others/other_comp/sunilpic.jpeg"
                    width={20}
                    height={20}
                    alt="Sunil"
                    style={{ paddingTop: '0em', borderRadius: '50%'}}
                  />
                  </div>
            </div>
            :
            <div  style={{
              display: 'flex', justifyContent: 'flex-end', fontSize: '10px',  marginBottom: '-.7rem', marginRight: '-8px', borderRadius: '0 3px 3px 0', 
            }} > 
                <div className='w-5 h-5 bg-slate-300 rounded-xl flex justify-center leading-5 ' style={{fontSize: '9px'}}>
                You
                </div>
          </div>
          }
            <div
              className={`message-inner  p-2 rounded-md pb-5`} style={{backgroundColor: `${message.sender === 'user' ? '#18c139d1': '#70757a2b'}`}}
            >
              {message.text} 

              <div  style={{
                display: 'flex', justifyContent: 'flex-end', fontSize: '10px',  marginBottom: '-1.1rem', borderRadius: '0 3px 3px 0',
              }} > 
                <div style={{ textAlign: 'center', width: '50px', height: '14px', lineHeight: '14px',
                              backgroundImage: 'linear-gradient(to right , rgba(128,128,128,0), rgba(128,128,128,1))',
                              borderRadius: '0 0px 0px 0', marginRight: '-8px', marginBottom: '4px'
                }}>{message.time}</div>
              </div>
              
            </div>
            
              
          </div>
        ))}
        {botReqProcessing && 
        <div key={0} className={`message ${false? 'self float-right' : 'other float-left'} w-60 pt-2  `} >
          <div className={`message-inner  p-2 rounded-md`} style={{backgroundColor: `${false? '#18c139d1': '#70757a2b'}`}} >
            <Loader />
          </div>
        </div>}
        <div ref={messagesEndRef} />

      </div>
      <div className="p-4 border-t border-gray-200">
        <div className="flex">
        <textarea
          ref={inputRef}
          className={`${botReqProcessing? 'cursor-not-allowed': 'cursor-auto'} resize-none flex-1 mr-2 border rounded-lg px-3 py-2 h-8 overflow-hidden outline-none focus:bg-slate-100 focus:outline-1 focus:outline-slate-400`}
          placeholder="Ask more about Sunil..."
          disabled={botReqProcessing}
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />
          <div id='sent-btn' className='' onClick={handleMessageSend} >
          <Image
            id='sent-btn'
            className={` hover:cursor-pointer hover:scale-110`}
            src="/static/Others/chatbot/send-btn-icon.svg"
            width={30}
            height={5}
            alt="Send Button"
            style={{ marginTop: '3px', width: '25px', height: '25px', aspectRatio:'1/1'}}
            />
          </div>

        </div>
      </div>
    </div>
  );
}

export default ChatBox;
