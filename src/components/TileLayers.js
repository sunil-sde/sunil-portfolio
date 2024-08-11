import React, {useState, useEffect } from 'react';
import Image from 'next/image';
const L = typeof window !== 'undefined' ? require('leaflet') : null;
import useAppState from '../context/useAppState';

const layersInfo = [
                    {name: 'Default', layerID: 'Stadia_StamenTerrain'}, 
                    {name: 'Dark', layerID: 'Stadia_AlidadeSmoothDark'}, 
                    {name: 'B&W', layerID: 'Stadia_StamenToner'}, 
                    {name: 'Wacolor', layerID: 'Stadia_StamenWatercolor'},
                    {name: 'Transit', layerID: 'OPNVKarte'}, 
                    // {name: 'Street', layerID: 'OpenTopoMap'}, 
                ];


function TileLayers({componentProps}) {
    const {toggleLeft, toggleRouteModal} = componentProps;
    const [layersCollection, setLayersCollection]=useState(null);
    const [tileLayer, setTileLayer] = useState(null);
    const {state, dispatch} = useAppState();
    const [layerThumbnail, setLayerThumbnail] = useState('/static/others/map/Default.png');
    useEffect(() => {

        if (L) {

            setLayersCollection([
                {
                  id: 'Stadia_StamenTerrain',
                  name: 'Default',
                  tileLayer: L.tileLayer('https://tiles.stadiamaps.com/tiles/stamen_terrain/{z}/{x}/{y}{r}.{ext}', {
                    minZoom: 0,
                    maxZoom: 18,
                    attribution: '&copy, <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy, <a href="https://www.stamen.com/" target="_blank">Stamen Design</a> &copy, <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy, <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
                    ext: 'png'
                  }),
                  icon: '/static/others/map/Default.png'
                },
                {
                  id: 'Stadia_AlidadeSmoothDark',
                  name: 'Dark',
                  tileLayer: L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.{ext}', {
                    minZoom: 0,
                    maxZoom: 20,
                    attribution: '&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
                    ext: 'png'
                  }),
                  icon: '/static/others/map/Dark.png'
                },
                {
                  id: 'OPNVKarte',
                  name: 'Transit',
                  tileLayer: L.tileLayer('https://tileserver.memomaps.de/tilegen/{z}/{x}/{y}.png', {
                    maxZoom: 18,
                    attribution: 'Map <a href="https://memomaps.de/">memomaps.de</a> <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  }),
                  icon: '/static/others/map/Transit.png'
                },
                {
                  id: 'Stadia_StamenWatercolor',
                  name: 'Wacolor',
                  tileLayer: L.tileLayer('https://tiles.stadiamaps.com/tiles/stamen_watercolor/{z}/{x}/{y}.{ext}', {
                    minZoom: 1,
                    maxZoom: 16,
                    attribution: '&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://www.stamen.com/" target="_blank">Stamen Design</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
                    ext: 'jpg'
                  }),
                  icon: '/static/others/map/Wacolor.png'
                },
                {
                  id: 'Stadia_StamenToner',
                  name: 'B&W',
                  tileLayer: L.tileLayer('https://tiles.stadiamaps.com/tiles/stamen_toner/{z}/{x}/{y}{r}.{ext}', {
                    minZoom: 0,
                    maxZoom: 20,
                    attribution: '&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://www.stamen.com/" target="_blank">Stamen Design</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
                    ext: 'png'
                  }),
                  icon: '/static/others/map/B&W.png'
                },
                // CartoDB_DarkMatterNoLabels : L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png', {
                //     attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
                //     subdomains: 'abcd',
                //     maxZoom: 20
                // })
                // {
                //   id: 'OpenTopoMap',
                //   name: 'Transit',
                //   tileLayer: L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
                //     maxZoom: 17,
                //     attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
                //   }),
                //   icon: '/static/others/map/Transit.png'
                // },
              ])
        }

    }, []);

    useEffect(()=>{
      if(layersCollection !== null){

        // let x = Object.keys(layersCollection); //, 
        // let y = Object.values(layersCollection);
      }
    }, [layersCollection])



    useEffect(()=>{
        document.querySelector('.tile-layers-btn')?.addEventListener('mouseover', (e)=>{
          document.querySelector('.tile-layers').style.visibility = 'visible';
        })
        document.querySelector('.tile-layers-feature')?.addEventListener('mouseleave', (e)=>{
          document.querySelector('.tile-layers').style.visibility = 'hidden';
        }) 
      }, [])

    const handleLayerClick = (e, layer)=>{
        // document.querySelector(`#layer-thumbnail`).setAttribute('src',  layer.icon)
        setLayerThumbnail(layer.icon);
        let aLayer = layersCollection.filter(layer=>layer.id === `${e.currentTarget.id?.split('-')[1]}`)[0];
        // let aLayer = layersCollection[`${e.currentTarget.id?.split('-')[1]}`];
        if(!aLayer && aLayer.length){
            window.alert("Not Available");
            return;
        }
        if(tileLayer === null){
            setTileLayer(aLayer.tileLayer);
            state.map.addLayer(aLayer.tileLayer);
            return;
        }
        state.map.removeLayer(tileLayer);
        state.map.addLayer(aLayer.tileLayer);
        setTileLayer(aLayer.tileLayer);
    }
  return (
    <>
      <div className='tile-layers-feature' style={{height: '79px', width: '427px', display: toggleRouteModal? 'none': 'flex', left: toggleLeft? '1%': '427px'}}>
          <div className='tile-layers-btn ' style={{width: '79px', height: '79px', backgroundColor: 'white', marginRight: '8px'}} >
              <div className='absolute z-50 bottom-1.5 left-4 text-sm '>Layers </div>
              
              <Image id='layer-thumbnail' src={layerThumbnail} alt="Icon" width={90} height={90}  style={{aspectRatio: 1, borderRadius: '5px'}} />
          </div>
          <div className='tile-layers' style={{width: '310px', height: '79px', borderRadius: '8px', backgroundColor: 'white'}}>
              <div className='btns-wrapper' style={{marginLeft: '10px'}}>
                <ul style={{display: 'flex'}} >
                  {//layersInfo layersCollection
                  layersCollection && layersCollection.map((layer, i)=>
                  <li key={i} >
                    <button className='hover:text-blue-500' id={`layer-${layer.id}`} onClick={(e)=>handleLayerClick(e, layer)} >
                      <div className='hover:border-2 hover:border-blue-500 hover:rounded-lg' style={{backgroundColor: 'blue', width: '48px', height: '48px', borderRadius: '8px', marginBottom: '4px', padding: '0px', overflow: 'hidden'}}>
                        <Image id={`tilelayer-thumbnail-${layer.id}`}  src={layer.icon} alt="Icon" width={48} height={48}  style={{aspectRatio: 1, borderRadius: '8px'}} />
                      </div>
                      <label style={{fontSize: '13px'}} >{layer.name}</label>
                    </button>
                  </li>
                  )}
                
                </ul>
              </div>
          </div>
        </div>
    </>
  )
}

export default TileLayers
