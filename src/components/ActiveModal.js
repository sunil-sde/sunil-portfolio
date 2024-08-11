import React, { useEffect, useState } from 'react'
import ModalProject from './ModalProject';
import ModalEducation from './ModalEducation';
import ModalSkill from './ModalSkill';
import ModalExperience from './ModalExperience'; 
import ModalAddress from './ModalAddress'; 
import ImageGallaryCarousel from './ImageGallaryCarousel' 

function ActiveModal({modalData, closeModal, style}) {
  const [activeComponent, setActiveComponent] = useState(null);
  const [imagesDirectory, setImagesDirectory] = useState(null);
  const [displayCarousel, setDisplayCarousel] = useState(false);
  const [imagePaths, setImagePaths] = React.useState([]);

  React.useEffect(() => {
    // Fetch image paths from the API endpoint
    if(modalData?.imagesDirectory){
      fetchImagePaths(modalData.imagesDirectory);
    }
  }, [modalData]);
  useEffect(()=>{
    switch(modalData?.type){
      case "project": setActiveComponent(<ModalProject modalData={modalData} closeModal={closeModal} setCarouselHere={setCarouselHere} style={style} />); setDisplayCarousel(false);
      break;
      case "skill": setActiveComponent(<ModalSkill modalData={modalData} closeModal={closeModal} setCarouselHere={setCarouselHere} style={style} />); setDisplayCarousel(false);
      break;
      case "education": setActiveComponent(<ModalEducation modalData={modalData} closeModal={closeModal} setCarouselHere={setCarouselHere} style={style}  />); setDisplayCarousel(false);
      break;
      case "experience": setActiveComponent(<ModalExperience modalData={modalData} closeModal={closeModal} setCarouselHere={setCarouselHere} style={style} />); setDisplayCarousel(false);
      break;
      case "address": setActiveComponent(<ModalAddress modalData={modalData} closeModal={closeModal} setCarouselHere={setCarouselHere} style={style} />); setDisplayCarousel(false);
      break;
      default:

    }
    setImagePaths([]);
  }, [modalData]);

  const setCarouselHere = (bool)=>{
    setDisplayCarousel(bool)
  } 

  const fetchImagePaths = async (imagesDir) => {
    try {
      const response = await fetch('/api/image-paths', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ imagesDirectory:imagesDir }), // Send folder name in the body
      });
      if (response.ok) {
        const data = await response.json();
        setImagePaths(data.imagePaths);
      } else {
        console.error('Failed to fetch image paths:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching image paths:', error);
    }
  };

  return (
    <>
      {activeComponent}
      {
      displayCarousel && 
      imagePaths && imagePaths.length != 0 && <ImageGallaryCarousel imagesDir={imagesDirectory} imagePaths={imagePaths} />}
    </>
  )
}

export default ActiveModal
