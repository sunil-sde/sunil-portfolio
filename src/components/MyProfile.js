import React, { useState } from 'react'
import Image from 'next/image'
import ContactProfile from './ContactProfile'

function MyProfile() {
  const [toggleContacts, setToggleContacts] = useState(false);
  const closeContactsPopup = ()=>{
    setToggleContacts(!toggleContacts);
  }
  return (
    <>
       <div className='profile-icon' onClick={(e)=>setToggleContacts(!toggleContacts)} style={{overflow: 'hidden', position: 'absolute', zIndex: 1000, backgroundColor: 'rgba(255, 255, 255, 0)', height: '35px', width: '35px', borderRadius: '50%', right: '20px', top: '20px'}} >
          <Image
            src="/static/Others/other_comp/sunilpic.jpeg"
            width={50}
            height={50}
            alt="Sunil"
            style={{ borderRadius: '50%', width: 'auto', height: 'auto'}}
          />
      </div>
      {toggleContacts && <ContactProfile  closeContactsPopup={closeContactsPopup}/>}
    </>
  )
}

export default MyProfile
