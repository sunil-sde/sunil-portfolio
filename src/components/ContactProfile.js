import React from 'react'
import Image from 'next/image';
import {motion} from 'framer-motion';
function ContactProfile({closeContactsPopup}) {

  return (
    <>
    
      <motion.div 
        drag  
        dragConstraints={{left: -650, right: 0, top: 0, bottom: 0}}
        className='contact-modal' id='modal'
      >
          <motion.div 
            className='contact-modal-header' 
          > 
            <button className='contact-close-button' onClick={(e)=>closeContactsPopup()}  style={{float:'right', margin: '6px 6px 0 0'}} >
              <div 
            >
                <svg focusable="false" width="24" height="24" viewBox="0 0 24 24" className=" NMm5M"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"></path></svg>
              </div>
            </button>
          </motion.div>
          <div className='contact-modal-body'>
          <div className='flex flex-col justify-items-center items-center gap-y-8 h-full'>
            <Image
                src="/static/others/other_comp/sunilpic.jpeg"
                width={95}
                height={50}
                alt="Sunil"
                style={{ paddingTop: '0em', borderRadius: '50%'}}
            />
             <h1>Hi, Sunil!</h1>
            <div  >
              <ul  >
                {/* {[1, 2, 3].map(e=> */}
                <li style={{margin: '5px', background: 'white', padding: '7px 8px', borderRadius: '32px'}} key={'e1'}  >
                  <a
                    href="mailto:sunilkumarsk20198@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"

                    // className=" text-blue-500 px-2 hover:scale-105 hover:filter hover:drop-shadow-lg transition duration-300"
                  >
                    <Image
                        src="/static/others/other_comp/gmail.png"
                        width={35}
                        height={35}
                        alt="Gmail Logo"
                        style={{ display: 'inline-block' }}
                    />
                    <span className='px-2'>  sunilkumarsk20198@gmail.com</span>
                  </a>
                  {/* <a href={`mailto:sundar.parashar@gmail.com?subject=Hello%20from%20your%20website.`}>Email me at sunil.parashar@gmail.com</a> */}
                </li>
                <li style={{margin: '5px', background: 'white', padding: '7px 8px', borderRadius: '32px'}} key={'e2'}  >
                  <a
                    href="https://www.linkedin.com/in/sunil-sde/"
                    target="_blank"
                    rel="noopener noreferrer"
                    // className=" text-blue-500 pr-2 hover:scale-105 hover:filter hover:drop-shadow-lg transition duration-300 "
                  >
                      <Image
                          src="/static/home/linkedin.png"
                          width={35}
                          height={35}
                          alt="LinkedIn Logo"
                          style={{ display: 'inline-block' }}
                      />
                      <span className='px-2'>sunil-sde</span>
                  </a>
                </li>
                {/* )} */}
                
              </ul>
            </div>
          </div>
          </div>
        </motion.div>
    </>
  )
}

export default ContactProfile
