import React, { useState, useEffect } from 'react'
import SearchBar from '../components/SearchBar'
import LeftPane from '../components/LeftPane'
import MyProfile from '../components/MyProfile'
import SkillsMenu from '../components/SkillsMenu'
import Map from '../components/Map'
import TileLayers from '../components/TileLayers'
import { Separator } from '@/components/ui/separator';

import AboutMe from '../components/AboutMe';
import Home from '../components/Home'; 
import Contact from '../components/Contact';
import SkillsList from '../components/SkillsList';
import EducationList from '../components/EducationList';
import ListContact from '../components/ListContact';
import ProjectsList from '../components/ProjectsList';
import ExperienceList from '../components/ExperienceList';
import ContactProfile from '../components/ContactProfile'
import MUIDrawer from '../components/MUIDrawer' 
import PersonalAssistant from '../components/PersonalAssistant' 
import PreviewResume from '../components/PreviewResume' 
import ChatBox from '../components/ChatBox'
import {motion} from 'framer-motion';
import useAppState from '../context/useAppState'
const L = typeof window !== 'undefined' ? require('leaflet') : null;
import data from '../components/JSON-store/portfolio.json';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import Image from 'next/image'
import ActiveModal from '@/components/ActiveModal';
// import Joyride from 'react-joyride';
import dynamic from 'next/dynamic';
const Joyride = dynamic(() => import('react-joyride'), { ssr: false });



function MyApp() {
  const {state, dispatch} = useAppState();
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  const [searchBarLeft, setSearchBarLeft] = useState(false);
  const [toggleLeft, setToggleLeft] = useState(false);
  const [toggleHomePage, setToggleHomePage] = useState(false);
  const [toggleAboutMe, setToggleAboutMe] = useState(false);
  const [toggleProjectsPage, setToggleProjectsPage] = useState(false);
  const [toggleSkillsPage, setToggleSkillsPage] = useState(false);
  const [toggleExperiencePage, setToggleExperiencePage] = useState(false);
  const [toggleEducationPage, setToggleEducationPage] = useState(false);
  const [toggleDownloadResume, setToggleDownloadResume] = useState(false);
  const [toggleContactPage, setToggleContactPage] = useState(false);
  const [activePage, setActivePage] = useState(<Home />); // useState(<SkillsList />); //
  const [modalData, setModalData] = useState(''); // useState(<SkillsList />); //
  const [cursorStyle, setCursorStyle] = useState('pointer');
  const [clickCount, setClickCount] = useState(0);
  const [firstTime, setFirstTime] = useState(null);
  const [secondTime, setSecondTime] = useState(null);
  const [windowWidth, setWindowWidth] = useState(null);
  const [windowHeight, setWindowHeight] = useState(null);
  const [botBottom, setBotBottom] = useState(null);
  const [botTop, setBotTop] = useState(null);
  const [botDraggableArea, setBotDraggableArea] = useState({left:0, right:0, top:0, bottom:0});
  const [isScaled, setIsScaled] = useState(false);
  const [locMarker, setLocMarker] = useState(null);
  const [toggleRouteModal, setToggleRouteModal] = useState(false);
  const [appTourSteps, setAppTourSteps] = useState([
    {
      target: '.menu-buttons',
      content: 'Explore the navigation bar to access detailed information about me!',
    },
    {
      target: '.search-bar',
      content: 'Use the route search feature to explore my journey from home to school, college, or office. Each stop on the map showcases a skill, project, or learning experience. Click on a stop for detailed information!',
    },
    {
      target: '.assistant-bot',
      content: 'Have a question? Ask our assistant bot for detailed information and assistance!',
    }
  ]);
  
  

  let customIcon = null;

  useEffect(() => {
    // Add the class to trigger the transition
    document.querySelector('.app').classList.add('change-to-white');
  }, []);
  useEffect(()=>{
    if (typeof window !== "undefined" && L && state.map) {
      customIcon = window.L.icon({
        iconUrl: '../../static/others/map/pin-map.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
      });
      document.querySelector('.mylocation').addEventListener('click', ()=>{
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
              var latitude = position.coords.latitude;
              var longitude = position.coords.longitude;
              const thisLocate = window.L.marker([latitude, longitude]
                , { icon: customIcon }
                )
                .bindPopup("Here you are!")
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

            const markerLatLng = thisLocate.getLatLng(); // Get marker's coordinates
    
            // Calculate the new center coordinates
            const newCenterLatLng = L.latLng(markerLatLng.lat, markerLatLng.lng + -0.03); // Adjust lng to position towards right
    
            // Set the new center and zoom level
            state.map.setView(newCenterLatLng, 14);
          }, function(error) {
              alert('Error getting your location: ' + error.message);
          });
        } else {
            alert('Geolocation is not supported by your browser.');
        }
      })
    }
  }, [state.map]);

  useEffect(() => {
    if (typeof window !== "undefined" && L ) {
      let elem = document.querySelector('#assistant-for-sunil-icon');
      const rect = elem.getBoundingClientRect();
      const distanceAbove = rect.top;
      const distanceBelow = window.innerHeight - rect.bottom;
      const distanceLeft = rect.left;
      const distanceRight = window.innerWidth - rect.right;
      let tempArea = {left:-distanceLeft, right:distanceRight, top:-distanceAbove, bottom:distanceBelow}
      setBotDraggableArea(tempArea);
      // setBotTop(distanceAbove);
      // setBotBottom(distanceBelow) ;
      // let aboveBot = window.screen.height-
      // setBotBottom(window.screen.height-Number(elem.style.height.slice(0, -2)))
      setWindowWidth(window.screen.width);
      setWindowHeight(window.screen.height);

      
    }
  }, []);
  useEffect(() => {
    const moveableDiv = document.querySelector('.toggle-left-pane');

    if (moveableDiv) {
      moveableDiv.addEventListener('click', startAni);

      return () => {
        moveableDiv.removeEventListener('click', startAni);
      };
    }
  }, []);
  useEffect(()=>{
    setSearchBarLeft(toggleLeft);
  }, [toggleLeft])

  const startAni = (value)=>{
    value === true? setToggleLeft(false): setToggleLeft(prevToggleLeft => !prevToggleLeft);
  }
 

  const flipToggleMode = (event) => {
    const id = event.currentTarget.id;
    switch(id){
      case 'home-page': 
        setModalData(null);
        setToggleHomePage(!toggleHomePage); 
        startAni(true);
        setActivePage(<Home />);
      break;
      case 'about-page': 
        setModalData(null);
        setToggleAboutMe(!toggleAboutMe); 
        startAni(true);
        setActivePage(<AboutMe />);
      break;
      case 'projects-page': 
        setModalData(null);
        setToggleProjectsPage(!toggleProjectsPage);
        startAni(true);
        setActivePage(<ProjectsList componentProps={{getDetails}} /> );
      break;
      case 'skills-page': 
        setModalData(null);
        setToggleSkillsPage(!toggleSkillsPage);
        startAni(true);
        setActivePage(<SkillsList componentProps={{getDetails}} />);
      break;
      case 'experience-page': 
        setModalData(null);
        setToggleExperiencePage(!toggleExperiencePage);
        startAni(true);
        setActivePage(<ExperienceList componentProps={{getDetails}} />);
      break;
      case 'education-page': 
        setModalData(null);
        setToggleEducationPage(!toggleEducationPage);
        startAni(true);
        setActivePage(<EducationList componentProps={{getDetails}} />);
      break;
      case 'download-resume': 
        setModalData(null);
        setToggleDownloadResume(!toggleDownloadResume);
        startAni(true);
        setActivePage(<div>download...</div>);
      break;
      case 'contact-page': 
        setModalData(null);
        setToggleContactPage(!toggleContactPage);
        startAni(true);
        setActivePage(<ListContact componentProps={{getDetails}} />);
      break;
      default: 
        setModalData(null);
        setToggleHomePage(!toggleHomePage); 
        startAni(true);
        setActivePage(<div>Home...</div>);
    }
  }
  const getMoreDetails = (e)=>{
    let aData = e.target.getAttribute('data');
    aData = aData.split(',').map(item=>item.trim());
    aData = {
      category: aData[1],
      name: aData[0]
    }
    const aModalData = data[`${aData.category}`].filter(item=>item.name === aData.name);
    setModalData(aModalData[0]);
    setToggleRouteModal(true);
  }
  const updateToggleRouteModal = (bool)=>{
    setToggleRouteModal(bool);
    setModalData(null);
  }
  const getDetails = (skill)=>{
    setModalData(skill);
  }
  const closeModal = ()=>{
    setModalData(null);
  }
  const handleLeftDistance = (toggleLeft)=>{
  }

  const handleOnChange = (e)=>{
    document.querySelector('#search-placeholder').style.display = e.target.value === ''? 'block': 'none';
  }

const myToggleDrawer = (open) => {
  setIsDrawerOpen(open);
};

const handleMouseDown = (event) => {
  if (event.button === 0) {
    setCursorStyle('grabbing');
  }
};

const handleMouseUp = () => {
  setCursorStyle('pointer');
};

const handleMouseOver = () => {
  setCursorStyle('pointer');
};
function scaleImage() {
  var image = window.document.querySelector('#assistant-for-sunil-icon');
  image.style.scale = 0.9; // Scale to 80% of original size
  setTimeout(function() {
    image.style.scale = 1; // Revert back to original size after 500 milliseconds
  }, 200);
  
}
const handleImageClick = () => {
  setIsScaled(true);
  setTimeout(() => {
    setIsScaled(false);
  }, 500);
};
const handleMapZoom = (e)=>{
  const classes = e.target.className;
  if(classes.includes("zoom-in")){
    state.map.setZoom(state.map.getZoom() + 1);
  } 
  else{
    state.map.setZoom(state.map.getZoom() - 1);
  }
}

const handleShowMyLocation = ()=>{
  
  if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
          var latitude = position.coords.latitude;
          var longitude = position.coords.longitude;
          
          const thisLocate = L.marker([latitude, longitude]
            , { icon: customIcon }
            ).addTo(state.map)
            .bindPopup("Here you are!")
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
        const markerLatLng = thisLocate.getLatLng(); // Get marker's coordinates

        // Calculate the new center coordinates
        const newCenterLatLng = L.latLng(markerLatLng.lat, markerLatLng.lng + -0.03); // Adjust lng to position towards right

        // Set the new center and zoom level
        state.map.setView(newCenterLatLng, 14);
      }, function(error) {
          alert('Error getting your location: ' + error.message);
      });
  } else {
      alert('Geolocation is not supported by your browser.');
  }
}
  return (
    <>
      <Joyride className='joyride-product-tour'  // https://docs.react-joyride.com/props
        steps={appTourSteps}
        continuous = {true}
        disableOverlayClose = {true}
        disableScrolling = {false}
        showProgress = {true}
        showSkipButton = {true}

      />
      <PreviewResume />
      <Map />
      <div className='ui-features' > 
      <div >
        {toggleRouteModal && modalData && <ActiveModal modalData={modalData} closeModal={closeModal} style={{marginLeft: '14px', top: '70px', height: 'calc(100% - 80px)'}} />}
      </div>
      <PersonalAssistant />

        <MUIDrawer componentProps={{isDrawerOpen, myToggleDrawer}} />
        {
        <LeftPane componentProps={{handleLeftDistance, toggleLeft, activePage, toggleAboutMe, modalData, closeModal, toggleRouteModal}} />}
        
        <MyProfile />
        <SearchBar componentProps={{toggleLeft, myToggleDrawer, getMoreDetails, toggleRouteModal, updateToggleRouteModal}} />
        <SkillsMenu componentProps={{toggleLeft, searchBarLeft, flipToggleMode, toggleRouteModal}} />
        <TileLayers componentProps={{toggleLeft, toggleRouteModal}} />
        <div className='map-bottom-right' style={{display: 'flex', flexDirection: 'column'}} data-intro='Hello step one!'>
          <div className='vertical-pane'>
            <div className='mylocation' >
              <div className='mylocation-icon'>

              </div>

            </div>
            <div className='zoomControls' style={{display: 'flex', flexDirection: 'column', height: '57px', backgroundColor: 'white', width: '29px', cursor: 'pointer', borderRadius: '8px', boxShadow: '0 1px 4px rgba(0,0,0,.3)'}} >
              <div className='map zoom-in' style={{width: '15px', height: '15px'}} onClick={(e)=>handleMapZoom(e)} ></div>
              <div className='zoom-controls-separator' > <Separator style={{backgroundColor:'#dadce0'}}  /> </div>
              <div className='map zoom-out' style={{width: '15px', height: '15px'}} onClick={(e)=>handleMapZoom(e)} ></div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MyApp
