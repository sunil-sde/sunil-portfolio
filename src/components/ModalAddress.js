import React from 'react'
import Image from 'next/image';
function ModalAddress({modalData, closeModal, setCarouselHere, style}) {

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
            <h1 className='font-semibold text-gray-700'>Here is my {modalData.name.toLowerCase()}.</h1>

            <br/>
            <p className='text-sm'>
              <div>{modalData.overview}</div>
            </p> 
            <br/>

            <div className='flex flex-col space-y-2' >
              <div className='flex content-baseline'> 
                <img
                  src="/static/others/map/place_blue_icon.png"
                  alt="Place blue icon"
                  style={{  width: '30px', height: '30px', padding: '3px'}}
                />
                <div className='text-sm pt-0'>{modalData.address_line_1} {modalData.address_line_2}, {modalData.city}, {modalData.state}, {modalData.zip}, {modalData.country}</div>
              </div>
              
              <div className='flex content-baseline'> 
                <img
                  src="/static/addresses/home/residential.svg"
                  alt="landmark icon"
                  style={{  width: '30px', height: '30px', padding: '3px'}}
                />
                <div className='text-sm pt-1'>Landmark: {modalData.landmark}</div>
              </div>
              
              <div className='flex content-baseline'> 
                <img
                  src="/static/addresses/home/email.svg"
                  alt="landmark icon"
                  style={{  width: '30px', height: '30px', padding: '3px'}}
                />
                <div className='text-sm pt-1'> {modalData.contact}</div>
              </div>
            </div>
            <br/>
            </div>
           </div>
          </div>
    </>
  )
}

export default ModalAddress
