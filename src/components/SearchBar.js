import React , {useEffect, useState} from 'react'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import Image from 'next/image';
import MyDrawer from './MyDrawer'
import MUIDrawer from './MUIDrawer'
import useAppState from '../context/useAppState';
const L = typeof window !== 'undefined' ? require('leaflet') : null;
  
let locIcon = <svg style={{color: 'gray', marginTop: '0.7em'}} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin "><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>; 


function SearchBar({componentProps}) {
    const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
    const [MUIDrawerComp, setMUIDrawerComp] = React.useState(null);
    const [locationSelected, setLocationSelected] = useState(null);
    const {state, dispatch} = useAppState();
    const [locItems, setLocItems] = useState(['HBSS, Gurugram, Hariyana', 'DTU, Rohini, Delhi', 'RPVV, Rohini Sector 11, Delhi'])
    const [locDrowpdownItems, setLocDropdownItems] = useState([])
    const [linseLayer, setLinesLayer] = useState(null);
    const [stopsLayer, setStopsLayer] = useState(null); 
    const [searchString, setSearchString] = useState('');
    useEffect(() => {
        if (L && locationSelected) {
            if(locationSelected.toLocaleLowerCase().includes('hbss')){
                fetchGeoJSON('HBSS');
            }
            else if(locationSelected.toLocaleLowerCase().includes('dtu')){
                fetchGeoJSON('DTU');
            }
            else if(locationSelected.toLocaleLowerCase().includes('rpvv')){
                fetchGeoJSON('RPVV');
            }
        }
    }, [locationSelected]);
    useEffect(()=>{
    }, [state])
    useEffect(()=>{
        let tempOptions = [];
        for(let i = 0; i < locItems.length; i++){
            tempOptions.push(<li className='loc-item flex' onClick={(e)=>onSelect(e)} data={locItems[i]} key={`${locItems[i]}`} > <span >{locIcon} </span> <span style={{marginLeft: '1.5em'}} >{locItems[i]}</span></li>)
        }
        setLocDropdownItems(tempOptions);
    }, [])
    useEffect(()=>{
        let myListener =  e => {
            const element = document.querySelector('.search-map') ;
            if (!element.contains(e.target)) {
                document.querySelector('.search-map').style.borderRadius = '25px';
                document.querySelector('.custom-loc-dropdown').style.display = 'none';
            }
            else{
                document.querySelector('.search-map').style.borderRadius = '16px 16px 0 0';
                document.querySelector('.custom-loc-dropdown').style.display = 'block';
            }
        };

        document.addEventListener('click', myListener);

        return ()=> document.removeEventListener('click', myListener);
    }, [])
    useEffect(()=>{
        document.querySelector('#search-placeholder').style.display = searchString === ''? 'block': 'none';
    }, [searchString])
    const onSelect = (e)=>{
        componentProps.updateToggleRouteModal(true);
        const value = e.currentTarget.getAttribute('data');
        setSearchString(value);
        setLocationSelected(value);
    }
    const getMoreDetails = (e)=>{
        componentProps.getMoreDetails(e);
    }
    const handleOnChange = (e)=>{
        const searchStr = e.target.value.toLowerCase();
        setSearchString(e.target.value);
        const filteredLocItems = locItems.filter(item => item.toLocaleLowerCase().includes(searchStr));
        let tempOptions = [];
        for(let i = 0; i < filteredLocItems.length; i++){
            tempOptions.push(<li className='loc-item flex' onClick={(e)=>onSelect(e)} data={filteredLocItems[i]} key={`${filteredLocItems[i]}`} > <span >{locIcon} </span> <span style={{marginLeft: '1.5em'}} >{filteredLocItems[i]}</span></li>)

        }
        setLocDropdownItems(tempOptions);
        if(tempOptions.length <= 0){  // nothing found
            document.querySelector('.search-map').style.borderRadius = '25px';
            document.querySelector('.custom-loc-dropdown').style.display = 'none';
        }
        else{
            document.querySelector('.search-map').style.borderRadius = '16px 16px 0 0';
            document.querySelector('.custom-loc-dropdown').style.display = 'block';
        }

    }
    function fetchGeoJSON(dest) {
        let lineJSON, stopsJSON;
        switch(dest){
            case 'HBSS': 
                lineJSON = require('./JSON-store/HOMETOHBSSline.geojson');
                stopsJSON = require('./JSON-store/HOMETOHBSSstops.geojson');
                break;
            case 'DTU':
                lineJSON = require('./JSON-store/HOMETODTUline.geojson');
                stopsJSON = require('./JSON-store/HOMETODTUstops.geojson');
                break;
            case 'RPVV':
                lineJSON = require('./JSON-store/HOMETORPVVline.geojson');
                stopsJSON = require('./JSON-store/HOMETORPVVstops.geojson');
                break;
        }
        if(lineJSON === undefined || stopsJSON === undefined) {alert('No Information Available') ; return ;}
        if(linseLayer){
            state.map.removeLayer(linseLayer); 
        }
        if(stopsLayer){
            state.map.removeLayer(stopsLayer);
        }
        let lines = L.geoJSON(lineJSON, {
            style: {
            weight: 8, // Set the line width to 5 pixels
            color: '#525564' // #525564, #2E8B57 // Optional: Set the line color
            },
            onEachFeature: function (feature, layer) {
                            let tooltip=null;
                            layer.on('mouseover', function (e) {
                            const latlng = e.latlng;
                            tooltip = L.tooltip({
                                permanent: true,
                                direction: 'auto', // 'auto' to automatically choose direction based on mouse position
                                className: 'custom-tooltip-class', // Optional: Add a custom CSS class to style the tooltip
                            })
                                .setContent(`${feature.properties.duration} journy`)
                                .setLatLng(latlng)
                                .addTo(state.map);
                            });

                            layer.on('mousemove', function (e) {
                                if (tooltip) {
                                tooltip.setLatLng(e.latlng);
                                }
                            });
                            layer.on('mouseout', function () {
                                if (tooltip) {
                                tooltip.removeFrom(state.map);
                                tooltip = null;
                                }
                            });
                            },
            pointToLayer: function (feature, latlng) {
                            layer.on('mouseover', function (){ layer.bindTooltip("hey")})
                            return L.circleMarker(latlng);
                        }
        }).addTo(state.map);
        setLinesLayer(lines);
        state.map.fitBounds(lines.getBounds());

        let stops = L.geoJSON(stopsJSON, {
            pointToLayer: function (feature, latlng){
                return new L.CircleMarker(latlng, {radius: 6, color: 'black', weight: 1.8,  fillOpacity:1, fillColor: 'white'});
            },
            onEachFeature: function (feature, layer){
                let isClicked = false;
                layer.
                bindPopup( `<div id='nice'><p>${feature.properties.id} ${feature.properties.name} <span style='color:blue;cursor:pointer;' onClick="(function(){ document.querySelector('#getMore').setAttribute('data', '${feature.properties.name}, ${feature.properties.category}') ; document.querySelector('#getMore').click();   return false; })();return false;" >more...</span></p></div>`, 
                {className: 'startStopStickyToolTipClass', autoClose: false, autoPan: false, permanent: true , offset: [0, 0], direction: 'auto'} )
                .on('mouseover', function (e) {
                    isClicked = false;
                    e.target.openPopup(); 
                })
                .on('click', function (e) {
                    isClicked = true;
                    e.target.openPopup();
                })
                .on('mouseout', function (e) {
                    if(isClicked) return;
                    e.target.closePopup(); 
                });

                if(['home', 'hbss', 'dtu', 'rpvv'].includes(feature.properties?.name?.toLowerCase()) ){
                    layer
                    .on('add', function (e) {
                        e.target.openPopup(); //openTooltip();
                    })
                }
            }
        }).addTo(state.map);
        setStopsLayer(stops);
        state.map.fitBounds(stops.getBounds());
    }

    
  return (
    <>
    <div className='search-bar' style={{ top: '-83px', left: componentProps.toggleLeft && !componentProps.toggleRouteModal? '-100%': '1%',  width: '403px'}}>
        <Image
            src="/static/Others/map/locationIcon.svg"
            width={22}
            height={22}
            alt="Sunil"
            style={{ paddingTop: '.6em'}}
        />
        <div className='search-map flex bg-white rounded-3xl px-5 mt-16'  style={{ width: '377px', height: '46px', paddingTop: '4px', backgroundColor: 'white', borderRadius: '25px', boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px'}} >
            
            <div>
            
            <TooltipProvider>
            <Tooltip>
                <TooltipTrigger> 
                <div style={{padding: '.25rem .25rem .25rem 0'}} className="p-1 focus:outline-none focus:shadow-outline " onClick={(e)=>componentProps.myToggleDrawer(true)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-align-justify mt-1.5 w-5 h-5 text-gray-500 "><line x1="3" x2="21" y1="6" y2="6"/><line x1="3" x2="21" y1="12" y2="12"/><line x1="3" x2="21" y1="18" y2="18"/></svg>
                </div>
                </TooltipTrigger>
                <TooltipContent>
                <div>Menu</div>
                </TooltipContent>
            </Tooltip>
            </TooltipProvider>
            </div>

            <div>
            <label id='search-placeholder' htmlFor='search-input' >Search Sunil Maps</label>
            <input id='search-input' className='search-map-dest-inp' onChange={handleOnChange} value={searchString} />
            </div>
            
            <div>
            <TooltipProvider>
            <Tooltip>
                <TooltipTrigger> 
                <div className="p-1 focus:outline-none focus:shadow-outline ml-3.5 hover:cursor-not-allowed ">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" className="mt-1.5 w-5 h-5 text-gray-600"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </div>
                </TooltipTrigger>
                <TooltipContent>
                <div>Search</div>
                </TooltipContent>
            </Tooltip>
            </TooltipProvider>

            </div>
            
            <div>
            <TooltipProvider>
            <Tooltip>
                <TooltipTrigger> 
                <div className="focus:outline-none focus:shadow-outline ml-3 -mt-0.5 hover:cursor">
                    {
                    searchString===''?
                    <Image
                    src="/static/Others/map/directions.svg"
                    width={22}
                    height={22}
                    alt="Sunil"
                    style={{ paddingTop: '.6em'}}
                    /> 
                     : 
                    <div onClick={()=>{setSearchString(''); setLocationSelected(null); componentProps.updateToggleRouteModal(false); state.map.removeLayer(linseLayer); state.map.removeLayer(stopsLayer); }} >
                        <svg width="24" height="24" style={{marginTop: '8.5px'}} version="1.1" viewBox="0 0 24 24" ><style type="text/css"></style><g id="grid_system"/><g id="_icons"><path fill='#70757a' d="M5.3,18.7C5.5,18.9,5.7,19,6,19s0.5-0.1,0.7-0.3l5.3-5.3l5.3,5.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3   c0.4-0.4,0.4-1,0-1.4L13.4,12l5.3-5.3c0.4-0.4,0.4-1,0-1.4s-1-0.4-1.4,0L12,10.6L6.7,5.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4   l5.3,5.3l-5.3,5.3C4.9,17.7,4.9,18.3,5.3,18.7z"/></g></svg>
                    </div>
                    
                    } 
                </div>
                </TooltipTrigger>
                <TooltipContent>
                <div>Directions</div>
                </TooltipContent>
            </Tooltip>
            </TooltipProvider>
            
            
            </div>

            
        </div>
        <div className='custom-loc-dropdown' style={{ display: 'none', width: '377px',}}>
            <div style={{  backgroundColor: 'white', borderRadius: '0px 0px 16px 16px',  boxShadow: 'rgba(0, 0, 0, 0.16) 0px 0px 4px'}} > 
                <ul >
                    {locDrowpdownItems}
                </ul>
            </div>
        </div>

    </div>
    <div id='getMore' onClick={(e) => getMoreDetails(e)}>
    </div>
    
    </>
  )
}

export default SearchBar
