import React, { useState } from 'react';
import { Separator } from '@/components/ui/separator';
import Image from 'next/image';
import skillsJson from './JSON-store/SkillsJson'
import data from './JSON-store/portfolio.json'
import useAppState from '../context/useAppState'
const L = typeof window !== 'undefined' ? require('leaflet') : null;

const educationList = data.education;

const skills = skillsJson;

  


function EducationList({componentProps}) {
    const {getDetails} = componentProps;
    const {state, dispatch} = useAppState();
    const [locMarker, setLocMarker] = useState(null);
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
    const customIcon = window.L.icon({
        iconUrl: '../../static/others/map/pin-map.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
    });
    const locateOnMap = (name, latlng)=>{
        // Add a marker to the map with the custom icon
        const thisLocate = L.marker(latlng.split(',').map(coord => parseFloat(coord)) /*[lat, long]*/, { icon: customIcon }).addTo(state.map)
            .bindPopup(name)
            .openPopup();
        
        if(locMarker === null){
            setLocMarker(thisLocate);
            state.map.addLayer(thisLocate);
            const markerLatLng = thisLocate.getLatLng(); // Get marker's coordinates
            const newCenterLatLng = L.latLng(markerLatLng.lat, markerLatLng.lng + -0.03); // Adjust lng to position towards right
            state.map.setView(newCenterLatLng, 14);
            return;
        }
        state.map.removeLayer(locMarker);
        state.map.addLayer(thisLocate);
        setLocMarker(thisLocate);
        // state.map.fitBounds(thisLocate.getBounds());
        const markerLatLng = thisLocate.getLatLng(); // Get marker's coordinates

        // Calculate the new center coordinates
        const newCenterLatLng = L.latLng(markerLatLng.lat, markerLatLng.lng + -0.03); // Adjust lng to position towards right

        // Set the new center and zoom level
        state.map.setView(newCenterLatLng, 14);
    }
  return (
    <>
    <div style={{marginTop: '5rem'}} >
    <ul style={{height: '100%', width: '100%'}} >
    {
        educationList.map((education, index) => {
            const starRatingStyle = cssStringToObject(education.proficiencyLevel);
            const iconStyle = cssStringToObject(education.icon);
            return (
            <div key={index}>
        <li className='EducationList-item' id={`${education.degree}`} onClick={(e)=>{getDetails(education); locateOnMap(education.acronym, education.latlng);}} key={education.degree}  style={{ minHeight: '150px', width: '100%', cursor: 'pointer', textAlign: 'left', whiteSpace: 'normal',  padding: '15px 25px 15px 25px'}}>
            <div>
                <a style={{height: '100%'}}>
                    <div style={{float: 'right', width: '95px'}}>
                    <span className='skill-icon' style={{ ...iconStyle, border: '1px solid #7777773b'}} > 
                    
                    </ span>
                    </div>
                    <b>{education.degree}</b> <br />
                    <span>{education.rating}</span> <span className='star-rating'
                     style={starRatingStyle} 
                    > </ span> (89) <br/>
                   Institution: <i> {education.institution}</i> <br/>
                    Result: {education.result} <br/>
                    <br/>
                    <span className='text-xs' >Duration: {education.dates} </span><br/>
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

export default EducationList
