
import React, { useEffect, useRef, useContext} from 'react';
import 'leaflet/dist/leaflet.css';
import styles from './page.module.css'
import './styles.css'
import useAppState from '../context/useAppState'
import appContext from '@/context/appContext';



const L = typeof window !== 'undefined' ? require('leaflet') : null;

function Map() {
    const mapRef = useRef(null);
    const xRef = useRef(null);
    const {state, dispatch} = useAppState();
    let map ;
    let customIcon ;

    useEffect(() => {

        if (L && !mapRef.current) {
            xRef.current = window.document.getElementById("demo");
            // Create a Leaflet map instance
            map = L.map('map', {editable: true, zoomControl: false, attributionControl: false, minZoom: 10, maxZoom: 15 }).setView([28.644800, 77.216721], 13);
            map.boxZoom.disable();
            // map.locate({setView: true,});
            // Add a tile layer (OpenStreetMap)
            window.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy, <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(map);

            // Define a custom marker icon (adjust the path to your marker icon image)
            customIcon = window.L.icon({
                iconUrl: '../../static/others/map/pin-map.png',
                iconSize: [25, 41],
                iconAnchor: [12, 41],
                popupAnchor: [1, -34],
            });

            // Add a marker to the map with the custom icon
            L.marker([28.644800, 77.216721], { icon: customIcon }).addTo(map)
                .bindPopup('Welocome!')
                .openPopup();

            // Store the map instance in the ref

            // var Stadia_StamenTerrain = L.tileLayer('https://tiles.stadiamaps.com/tiles/stamen_terrain/{z}/{x}/{y}{r}.{ext}', {
            //     minZoom: 0,
            //     maxZoom: 18,
            //     attribution: '&copy, <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy, <a href="https://www.stamen.com/" target="_blank">Stamen Design</a> &copy, <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy, <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            //     ext: 'png'
            // });
            // Stadia_StamenTerrain.addTo(map);


            mapRef.current = map;

            L.control.zoom({
                position: 'bottomright'
            }).addTo(map);

            dispatch({type: 'init_map', payload: map})
        }
    }, []);

    function getLocation() {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(showPosition);
        } else {
          x.innerHTML = "Geolocation is not supported by this browser.";
        }
      }
      
      function showPosition(position) {
        customIcon = window.L.icon({
            iconUrl: '../../static/others/map/pin-map.png',
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
        });

        window.L.marker([position.coords.latitude, position.coords.longitude], { icon: customIcon }).addTo(state.map);
      }

    return <>
   
    
    <div className='sunil-map' style={{display: 'flex', height: '100vh', width: '100%'}}>

        <div id='map' style={{height: '100vh', width: '100%', padding: '0px', margin: '0px'}}>
          
        </div>

     </div>
    </>;
}

export default Map;
