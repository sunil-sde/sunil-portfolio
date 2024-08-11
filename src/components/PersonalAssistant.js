import React, {useEffect, useState, useRef} from 'react'
import Image from 'next/image';
import ChatBox from '../components/ChatBox'
import {motion, useDragControls } from 'framer-motion';

function PersonalAssistant() {
    const [cursorStyle, setCursorStyle] = useState('pointer');
    const [botDraggableArea, setBotDraggableArea] = useState({left:0, right:0, top:0, bottom:0});
    const [isScaled, setIsScaled] = useState(false);
    const [toggleChatBox, setToggleChatBox] = useState(false);
    const [startX, setStartX] = useState(undefined);
    const [startY, setStartY] = useState(undefined);
    const [startTime, setStartTime] = useState(undefined);


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
    

    const handleMouseDown = (e) => {
        setStartX(e.clientX);
        setStartY(e.clientY);
        setStartTime(new Date().getTime());

        if (e.button === 0) {
            setCursorStyle('grabbing');
        }
    };

    const handleMouseUp = (e) => {
      const endX = e.clientX;
      const endY = e.clientY;
      const endTime = new Date().getTime();
      const distance = Math.sqrt(Math.pow(endX - startX, 2) + Math.pow(endY - startY, 2));
      const timeElapsed = endTime - startTime;

      if (distance < 5 && timeElapsed < 200) {
          handleClickEvent()
      } else {
      }
      
      setCursorStyle('pointer');
    };

    const handleMouseOver = () => {
      setCursorStyle('pointer');
    };
    function handleClickEvent() {
        var image = window.document.querySelector('#assistant-for-sunil-icon');
        image.style.scale = 0.9; // Scale to 80% of original size
        setTimeout(function() {
            image.style.scale = 1; // Revert back to original size after 500 milliseconds
        }, 200);
        setToggleChatBox(!toggleChatBox);
    }
    const closeChatBox= ()=>{
        setToggleChatBox(!toggleChatBox);
    }

  return (
    <>
      {<ChatBox closeChatBox={closeChatBox} toggleChatBox={toggleChatBox}  />}
      <motion.div 
        drag  
        dragConstraints={{ ...botDraggableArea }}
        className='assistant-bot ' id='assistant-for-sunil'
        style={{ cursor:cursorStyle}} 
      >
        <div 
          id='bot-container'
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
        > 
        <Image
          id='assistant-for-sunil-icon'
          className={`pointer-events-none ${isScaled ? 'scaled' : ''} `}
          src="/static/Others/chatbot/assistant-bot-icon.png"
          width={80}
          height={80}
          alt="Sunil"
          style={{ paddingTop: '.6em', filter: 'drop-shadow(2px 3px 0.0px #555)', width: '80px', height: '80px', scale: 1, transition: 'scale .2s ease-in-out'}}
        />
        </div>
      </motion.div>
    </>
  )
}

export default PersonalAssistant
