import React from 'react'

function ModalSkill({modalData, closeModal, setCarouselHere, style}) {
  let messageWithTabsAndNewlines =
//    modalData.examplesOrSamples
  ['JavaScript'].includes(modalData.name)? modalData.examplesOrSamples 
  .replace(/\t/g, '&nbsp;')
  .replace(/\n/g, '<br>')
:
modalData.examplesOrSamples.split('\n').map(item=><>{item}<br /></>)
// .replace(/\t/g, '&nbsp;')
// .replace(/\n/g, '<br>');
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
    <div className='modal'  id='modal' style={style} >
        <div className='overflow-y-scroll' id='skill-modal-a'> 
          <div className='modal-header text-gray-300'  onClick={()=>{setCarouselHere(true)}} style={{background: `${modalData.backgroundImage}`, borderRadius: '0px 0px 0 0'}} > 
            <button className='close-button' onClick={(e)=>{ e.stopPropagation(); closeModal()}} style={{float:'right', margin: '6px 6px 0 0'}} >
              <div style={{ borderRadius: '100%', height: '36px', width: '36px', padding: '6px', margin: '6px', background: 'gray', border: '0', boxShadow: '0 1px 2px rgba(60,64,67,0.3), 0 1px 3px 1px rgba(60,64,67,0.15)'}} >
                <svg focusable="false" width="24" height="24" viewBox="0 0 24 24" class=" NMm5M"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"></path></svg>
              </div>
            </button>
          </div>
          <div className='modal-body text-gray-500'>
            
            <h1 className='font-semibold text-gray-700'>{modalData.name}</h1>
            <span>4.4 </span> <span className='star-rating' style={skillStyle} > </ span> (89) <br/>
            <p className='text-sm'>{modalData.description}</p> 
            <br/>

            <h1 className='font-semibold text-gray-700'>Related technologies experience</h1>
            <p className='text-xs mt-4' >{modalData.technologies.map(tech=><><span style={{backgroundColor: 'white', padding: '6px', borderRadius: '16px', border: '1px solid #7777774b', boxShadow: 'rgba(0, 0, 0, 0) 0px .5px 2px', fontSize: '12px'}} >{tech}</span> &nbsp;</>)}</p>
            <br/>

            <h1 className='font-semibold text-gray-700 mb-1.5' >Training/certifications</h1>
            <p className='text-xs' >{modalData.trainingOrCertifications.map((item, index)=>
              <p className='mb-2 flex flex-row' key={index}> 
                <img
                  src="/static/Skills/green-circle-tick-bullet.png"
                  alt="Place blue icon"
                  style={{  width: '20px', height: '20px', padding: '3px', marginRight: '8px'}}
                />
                <span > { item.split(':').length > 1? <b> {item.split(':')[0]}: </b>: item.split(':')[0] } {item.split(':')[1] } </span><br/>
              </p>)}
            </p>
            <br/>

            <h1 className='font-semibold text-gray-700'>Experience({modalData.experience?.years}yrs)</h1>
            <p className='text-sm'>{modalData.experience?.details}</p> 
            <br/>

            <h1 className='font-semibold text-gray-700'>Examples</h1>
            <p className='text-xs  rounded-lg p-4' style={{border: '1px solid #7777774b', boxShadow: 'rgba(0, 0, 0, 0) 0px .5px 2px'}}> 
            {
                ['JavaScript'].includes(modalData.name)?
                <code dangerouslySetInnerHTML={{ __html: messageWithTabsAndNewlines }} /> 
                : <code> {messageWithTabsAndNewlines} </code>
            }
            </p> 
            <br/>
            
            <h1 className='font-semibold text-gray-700'>Continuous learning</h1>
            <p className='text-sm'>{modalData.continuousLearning}</p> 
            <br/>        
            <br/>        

          </div>
        </div>
    </div>
    </>
  )
}

export default ModalSkill
