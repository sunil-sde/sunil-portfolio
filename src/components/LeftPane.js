import React, { useState, useEffect } from 'react'
import Image from 'next/image';
import ActiveModal from './ActiveModal';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import MUIDrawer from './MUIDrawer'
import zIndex from '@mui/material/styles/zIndex';

function LeftPane({componentProps}) {
  const {toggleLeft, toggleAboutMe, activePage, modalData, closeModal, toggleRouteModal} = componentProps;
    const [isLeft, setIsLeft] = useState(false);
    const [handleRotation, setHandleRotation] = useState('0deg'); 
    const [tooltipText, setTooltipText] = useState('Collapse side panel'); 
    const [searchDest, setSearchDest] = useState('');
    useEffect(()=>{
      if(window.document.querySelector('.left-pane-root').style.left==='0px'){
        setHandleRotation('0deg');
        setTooltipText('Collapse side panel');
      }
      else{
        setHandleRotation('180deg');
        setTooltipText('Expand side panel');
      }
    }, [componentProps.toggleLeft])
   
  return (
    <>
    <div style={{position: 'absolute', zIndex: 20000, left: '-2rem'}}>
    </div>
    <div className='left-pane-wrapper' style={{display: !toggleRouteModal?'block':'none'}} >
      <div className='left-pane-root'   style={{ position: 'absolute', zIndex: 1000, width: '455px', left: componentProps.toggleLeft ?'-410px': '0',  display: 'flex', height: '100vh', alignItems: 'baseline', backgroundColor: 'rgba(255,0,0,0)', color: 'black', transition: 'left .08s linear'}}>
        <div className='left-pane' style={{ overflowY: 'auto', height: '100vh', width: '90%', backgroundColor: 'white'}} >
          {!toggleLeft && activePage}
         
        </div>
        <div className='toggle-left-pane' style={{height: '48px', width: '23px', backgroundColor: 'white', alignSelf: 'center', borderRadius: '0 8px 8px 0', boxShadow: '0 1px 2px rgba(60,64,67,0.3), 0 2px 6px 2px rgba(60,64,67,0.15)', cursor: 'pointer', paddingTop: '11.5px'}} >
        <TooltipProvider >
            <Tooltip >
                <TooltipTrigger > 
                  <Image
                    src="/static/Others/other_comp/arrow_left_2x.png"
                    width={500}
                    height={500}
                    alt="Picture of the author"
                    style={{rotate: handleRotation}}
                  />
                </TooltipTrigger>
                <TooltipContent side="right" >
                <div>{tooltipText}</div>
                </TooltipContent>
            </Tooltip>
            </TooltipProvider>
        </div>
      </div>
      {modalData && <ActiveModal modalData={modalData} closeModal={closeModal} />}
    </div>
    </>
  )
}

export default LeftPane
