import React from 'react'
import Image from 'next/image';

function ModalEducation({modalData, closeModal, setCarouselHere, style}) {

  function cssStringToObject(cssString) {
    // Remove curly braces and split by semicolons
    var cssArray = cssString.slice(1, -1).split(';');
    var cssObject = {};
    
    // Iterate over each CSS property
    for (var i = 0; i < cssArray.length; i++) {
        var propertyValuePair = cssArray[i].trim().split(':');
        var property = propertyValuePair[0].trim();
        var value = propertyValuePair[1].trim();
        
        // Add property-value pairs to object
        cssObject[property] = value;
    }
    
    return cssObject;
  }
  const skillStyle = cssStringToObject(modalData.proficiencyLevel);

  return (
    <>
      <div className='modal' id='modal' style={style}>
      <div className='overflow-y-scroll' id='skill-modal-a'>
          <div className='modal-header' onClick={()=>{setCarouselHere(true)}} style={{background: `${modalData.backgroundImage}`, borderRadius: '16px 16px 0 0'}} > 
            <button className='close-button' onClick={(e)=>{ e.stopPropagation(); closeModal()}} style={{float:'right', margin: '6px 6px 0 0'}} >
              <div style={{ borderRadius: '100%', height: '36px', width: '36px', padding: '6px', margin: '6px', background: 'gray', border: '0', boxShadow: '0 1px 2px rgba(60,64,67,0.3), 0 1px 3px 1px rgba(60,64,67,0.15)'}} >
                <svg focusable="false" width="24" height="24" viewBox="0 0 24 24" class=" NMm5M"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"></path></svg>
              </div>
            </button>
          </div>
          <div className='modal-body'> 
            <h1 className='font-semibold text-gray-700'>{modalData.degree}</h1>
            <span>{modalData.rating} </span> <span className='star-rating' style={skillStyle} > </ span> (89) <br/>
            <br/>
            <p className='text-sm'>
            I completed my <b>{modalData.degree}</b> at <b>{modalData.institution} ({modalData.acronym})</b> from <b>{modalData.dates}</b>, achieving a <b>{modalData.result}</b>.
            </p> 
            <br/>

            <div className='flex content-baseline'> 
              <img
                src="/static/others/map/place_blue_icon.png"
                alt="Place blue icon"
                style={{  width: '30px', height: '30px', padding: '3px'}}
              />
              <div className='text-sm '>{modalData.location}</div> 
            </div>
            <br/>
            <br/>
            </div>
           </div>
          </div>
    </>
  )
}

export default ModalEducation
