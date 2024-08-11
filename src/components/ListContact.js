import React from 'react';
import { Separator } from '@/components/ui/separator';
import Image from 'next/image';
import data from './JSON-store/portfolio.json'

const contacts = data.contacts;

  
  

function ListContact({componentProps}) {
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
        contacts.map((contact, index) => {
            const contactStyle = cssStringToObject(contact.proficiencyLevel);
            const iconStyle = cssStringToObject(contact.icon);
            return (
            <div key={index}>
        <li className='ListContact-item' id={`${contact.title}`} href={contact.url} target="_blank" rel="noopener noreferrer" onClick={(e)=>{window.open(contact.url, '_blank')}} key={contact.title}  style={{ minHeight: '150px', width: '100%', cursor: 'pointer', textAlign: 'left', whiteSpace: 'normal',  padding: '15px 25px 15px 25px'}}>

            <div>
                <a style={{height: '100%'}}
                    
                >
                    <div style={{float: 'right', width: '95px'}}>
                    <span className='skill-icon' style={{
                        ...iconStyle, 
                        border: '1px solid #7777773b'}} > </ span>
                    </div>
                    <span className='font-sans font-semibold'>{contact.title}</span> 
                    <br />
                    <span className='text-sm' > 
                        <span> {contact.starsCount} </span> 
                        <span className='star-rating text-sm' style={contactStyle} > </ span> (89x) 
                    </span>
                    <br/> 
                    <span className='text-sm' > User ID: {contact.userid} </span><br/>

                    <span  className=' text-green-600 font-mono text-sm' > Open 24 hours </span>
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

export default ListContact
