import React from 'react'

function ModalProject({modalData, closeModal, setCarouselHere, style}) {


  return (
    <>
      <div className='modal' id='modal' style={style}>
      <div className='overflow-y-scroll' id='skill-modal-a'> 
          <div className='modal-header' onClick={()=>{setCarouselHere(true)}}  style={{background: `${modalData.backgroundImage}`}} > 
            <button className='close-button' onClick={(e)=>{ e.stopPropagation(); closeModal()}} style={{float:'right', margin: '6px 6px 0 0'}} >
              <div style={{ borderRadius: '100%', height: '36px', width: '36px', padding: '6px', margin: '6px', background: 'gray', border: '0', boxShadow: '0 1px 2px rgba(60,64,67,0.3), 0 1px 3px 1px rgba(60,64,67,0.15)'}} >
                <svg focusable="false" width="24" height="24" viewBox="0 0 24 24" class=" NMm5M"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"></path></svg>
              </div>
            </button>
          </div>

          <div className='modal-body'>
            
            <div  className='flex flex-row justify-start gap-x-2.5 pb-3 '>  
            {
              modalData.github !== 'N/A'?
              <>
              <div className='flex'> 
              <svg  xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 30 30">
                  <path fill="#70757a" d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
              </svg>
              </div>
              <br/>
              </>
              :''
            } 
            {
              modalData.npm !== 'N/A'?
              <>
              <div className='flex'> 
              <svg width="30px" height="30px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <g>
                      <path fill="none" d="M0 0H24V24H0z"/>
                      <path fill="#70757a" d="M20 3c.552 0 1 .448 1 1v16c0 .552-.448 1-1 1H4c-.552 0-1-.448-1-1V4c0-.552.448-1 1-1h16zm-3 4H7v10h5V9.5h2.5V17H17V7z"/>
                  </g>
              </svg>            
              </div>
              <br/>
              </>
              :''
            } 
            </div>

            <h1 className='font-semibold text-gray-700 '>
              {modalData.name}
              <a 
                href={
                  modalData.view_site!=='N/A'?
                  modalData.view_site:
                  (
                    modalData.demo!=='N/A'?
                    modalData.demo: 
                    (modalData.npm!=='N/A'?
                      modalData.npm:
                      modalData.github
                    )
                  )
                } 
                target='_blank'
              > 
              <svg
                className='inline-block ml-1 hover:scale-105 hover:cursor-pointer'
                width='20px'
                height='20px'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <g id='Interface / External_Link'>
                  <path
                    id='Vector'
                    d='M10.0002 5H8.2002C7.08009 5 6.51962 5 6.0918 5.21799C5.71547 5.40973 5.40973 5.71547 5.21799 6.0918C5 6.51962 5 7.08009 5 8.2002V15.8002C5 16.9203 5 17.4801 5.21799 17.9079C5.40973 18.2842 5.71547 18.5905 6.0918 18.7822C6.5192 19 7.07899 19 8.19691 19H15.8031C16.921 19 17.48 19 17.9074 18.7822C18.2837 18.5905 18.5905 18.2839 18.7822 17.9076C19 17.4802 19 16.921 19 15.8031V14M20 9V4M20 4H15M20 4L13 11'
                    stroke='#00688B'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </g>
              </svg>
              </a>
            </h1>

            
            <p className='text-xs' >{modalData.description}</p>
            <br/>

            <div className='text-xs italic'>{modalData.category}, {modalData.team}, {modalData.role}, {modalData.year}</div>
            <br/>

            <h1 className='font-semibold text-gray-700' >Technologies used</h1>
            <div className='text-xs mt-4 leading-9' >{modalData.technologies.map(tech=><><span style={{backgroundColor: 'white', padding: '6px', borderRadius: '16px', border: '1px solid #7777774b', boxShadow: 'rgba(0, 0, 0, 0) 0px .5px 2px', fontSize: '12px'}} >{tech}</span> &nbsp;</>)}</div>
            <br/>

            
            <h1 className='font-semibold text-gray-700 mb-1.5' >Responsibilities</h1>
            <p className='text-xs' >{modalData.responsibilities.map((item, index)=>
              <p className='mb-2 flex flex-row' key={index}> 
                <img
                  src="/static/skills/green-circle-tick-bullet.png"
                  alt="Place blue icon"
                  style={{  width: '20px', height: '20px', padding: '3px', marginRight: '8px'}}
                />
                <span > { item.split(':').length > 1? <b> {item.split(':')[0]}: </b>: item.split(':')[0] } {item.split(':')[1] } </span><br/>
              </p>)}
            </p>
            <br/>
            <h1 className='font-semibold text-gray-700 mb-1.5' >Achievements</h1>
            <p className='text-xs' >{modalData.achievements.map((item, index)=>
              <p className='mb-2 flex flex-row' key={index}> 
                <img
                  src="/static/skills/green-circle-tick-bullet.png"
                  alt="Place blue icon"
                  style={{  width: '20px', height: '20px', padding: '3px', marginRight: '8px'}}
                />
                <span > { item.split(':').length > 1? <b> {item.split(':')[0]}: </b>: item.split(':')[0] } {item.split(':')[1] } </span><br/>
              </p>)}
            </p>
            <br/>
          
            <h1 className='font-semibold text-gray-700' >Key features ?</h1>
            <p className='text-xs' >{modalData.key_features.map((item, index)=>
              <p className='mb-2 flex flex-row' key={index}> 
                <img
                  src="/static/skills/green-circle-tick-bullet.png"
                  alt="Place blue icon"
                  style={{  width: '20px', height: '20px', padding: '3px', marginRight: '8px'}}
                />
                <span > { item.split(':').length > 1? <b> {item.split(':')[0]}: </b>: item.split(':')[0] } {item.split(':')[1] } </span><br/>
              </p>)}
            </p>
            <br/>

            <h1 className='font-semibold text-gray-700' >Why ?</h1>
            <p className='text-xs' >{modalData.why.map((item, index)=>
            <p className='mb-2 flex flex-row' key={index}> 
              <img
                src="/static/skills/green-circle-tick-bullet.png"
                alt="Place blue icon"
                style={{  width: '20px', height: '20px', padding: '3px', marginRight: '8px'}}
              />
              <span > { item.split(':').length > 1? <b> {item.split(':')[0]}: </b>: item.split(':')[0] } {item.split(':')[1] }  </span><br/>
            </p>)}</p>
            <br/>
            <br/>

          </div>
      </div>
      </div>
    </>
  )
}

export default ModalProject
