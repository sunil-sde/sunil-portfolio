import React from 'react'

function SkillsMenu({componentProps}) {
  const {toggleLeft, flipToggleMode, toggleRouteModal} = componentProps;
    const downloadResume = ()=>{
    }
    
  return (
    <>
    <div className='menu-buttons' style={{display: 'flex', left: toggleLeft? '1%': '427px', top: '15px', display: toggleRouteModal? 'none': 'block', height: '42px'}}> 
        <button id='home-page' className="button button1" onClick={(e)=>flipToggleMode(e)} >Home</button>
        <button id='about-page' className="button button1" onClick={(e)=>flipToggleMode(e)} >About</button>
        <button id='projects-page' className="button button1" onClick={(e)=>flipToggleMode(e)} >Projects</button>
        <button id='skills-page' className="button button1" onClick={(e)=>flipToggleMode(e)} >Skills</button>
        <button id='experience-page' className="button button1" onClick={(e)=>flipToggleMode(e)} >Experience</button>
        <button id='education-page' className="button button1" onClick={(e)=>flipToggleMode(e)} >Education</button>
        <button id='download-resume' className="button button1"  onClick={downloadResume}>
          <a href="static/resume/SDE-Sunil.pdf" download="static/resume/SDE-Sunil.pdf">Resume</a>
        </button>
        <button id='contact-page' className="button button1" onClick={(e)=>flipToggleMode(e)} >Contact</button>
    </div>
    </>
  )
}








export default SkillsMenu
