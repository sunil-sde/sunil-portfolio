import React from 'react';
import { Separator } from '@/components/ui/separator';
import Image from 'next/image';
import data from './JSON-store/portfolio.json'

const skills = data.skills;

  
  

function SkillsList({componentProps}) {
    const {getDetails} = componentProps;
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
    <div style={{marginTop: '5rem'}} >
    <ul style={{height: '100%', width: '100%'}} >
    {
        skills.map((skill, index) => {
            const skillStyle = cssStringToObject(skill.proficiencyLevel);
            const iconStyle = cssStringToObject(skill.icon);
            return (
            <div key={index}>
        <li className='skillsList-item' id={`${skill.name}`} onClick={(e)=>getDetails(skill)} key={skill.name}  style={{ minHeight: '150px', width: '100%', cursor: 'pointer', textAlign: 'left', whiteSpace: 'normal',  padding: '15px 25px 15px 25px'}}>

            <div>
                <a style={{height: '100%'}}>
                    <div style={{float: 'right', width: '95px'}}>
                    <span className='skill-icon' style={{...iconStyle, border: '1px solid #7777773b'}} > </ span>
                    </div>
                    <b>{skill.name}</b> <br />
                    <span>4.4 </span> <span className='star-rating' style={skillStyle} > </ span> (89) <br/>
                    {skill.description.substring(0, 70)}...<br/>

                    Experience: {skill.experience.years}yrs <br/><br/>
                    <span className='text-xs' >{skill.technologies.map(tech=><span key={tech}>{tech}  &nbsp;</span>)}</span><br/>
                </a>

            </div>
            
        </li>
            <Separator style={{backgroundColor:'#dadce0'}}  /> 
        </div>)
        }
        )
    }
    </ul>
    
    </div>
    </>
  )
}

export default SkillsList
