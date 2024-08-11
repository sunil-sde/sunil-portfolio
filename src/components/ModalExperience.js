import React from 'react'

function ModalExperience({modalData, closeModal, setCarouselHere, style}) {

  return (
    <>
      <div className='modal' id='modal' style={style}>
      <div className='overflow-y-scroll' id='skill-modal-a'> 
          <div className='modal-header'  onClick={()=>{setCarouselHere(true)}} style={{background: `${modalData.backgroundImage}`, borderRadius: '16px 16px 0 0'}} > 
            <button className='close-button' onClick={(e)=>{ e.stopPropagation(); closeModal()}} style={{float:'right', margin: '6px 6px 0 0'}} >
              <div style={{ borderRadius: '100%', height: '36px', width: '36px', padding: '6px', margin: '6px', background: 'gray', border: '0', boxShadow: '0 1px 2px rgba(60,64,67,0.3), 0 1px 3px 1px rgba(60,64,67,0.15)'}} >
                <svg focusable="false" width="24" height="24" viewBox="0 0 24 24" class=" NMm5M"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"></path></svg>
              </div>
            </button>
          </div>
          <div className='modal-body text-gray-500'>
            <h1 className='font-semibold text-gray-700'>{modalData.name}</h1>
            <p className='text-xs' >At {modalData.company} Company, during my tenure from {modalData.dates}, I spearheaded the &apos;{modalData.name}&apos; initiative, achieving significant milestones and delivering impactful results.</p>
            <br/>

            <h1 className='font-semibold text-gray-700' >Description</h1>
            <p className='text-xs' >{modalData.description}</p>
            <br/>
            
            <h1 className='font-semibold text-gray-700' >Achievements</h1>
            <p className='text-xs' >{modalData.achievements.map((tech, index)=>
            <p className='mb-2 flex flex-row' key={index}> 
              <img
                src="/static/Skills/green-circle-tick-bullet.png"
                alt="Place blue icon"
                style={{  width: '20px', height: '20px', padding: '3px', marginRight: '8px'}}
              />
              <span >{tech}</span><br/>
            </p>)}</p>
            <br/>
            

            <h1 className='font-semibold text-gray-700' >Technologies used</h1>
            <div className='text-xs mt-4 leading-9' >{modalData.technologies_used.map(tech=><><span style={{backgroundColor: 'white', padding: '6px', borderRadius: '16px', border: '1px solid #7777774b', boxShadow: 'rgba(0, 0, 0, 0) 0px .5px 2px', fontSize: '12px'}} >{tech}</span> &nbsp;</>)}</div>
            <br/>
            <br/>
          </div>
        </div>
        </div>
    </>
  )
}

export default ModalExperience
