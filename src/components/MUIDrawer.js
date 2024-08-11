import React from 'react'
import { Separator } from '@/components/ui/separator';
import Drawer from '@mui/material/Drawer';

const iconColor = '#70757a';
const techs = [
  {
    tech: 'HTML',
    icon: <svg xmlns="http://www.w3.org/2000/svg" style={{display: 'inline', width: '24px', height: '24px'}} viewBox="0 0 384 512"><path fill={iconColor} d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z"/></svg> 
  },
  {
    tech: 'CSS',
    icon: <svg xmlns="http://www.w3.org/2000/svg" style={{display: 'inline', width: '24px', height: '24px'}} viewBox="0 0 384 512"><path fill={iconColor} d="M0 32l34.9 395.8L192 480l157.1-52.2L384 32H0zm313.1 80l-4.8 47.3L193 208.6l-.3 .1h111.5l-12.8 146.6-98.2 28.7-98.8-29.2-6.4-73.9h48.9l3.2 38.3 52.6 13.3 54.7-15.4 3.7-61.6-166.3-.5v-.1l-.2 .1-3.6-46.3L193.1 162l6.5-2.7H76.7L70.9 112h242.2z"/></svg>
  },
  {
    tech: 'Javascript',
    icon: 
    <svg xmlns="http://www.w3.org/2000/svg" style={{display: 'inline', width: '24px', height: '24px'}} viewBox="0 0 448 512"><path fill={iconColor} d="M448 96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96zM180.9 444.9c-33.7 0-53.2-17.4-63.2-38.5L152 385.7c6.6 11.7 12.6 21.6 27.1 21.6c13.8 0 22.6-5.4 22.6-26.5V237.7h42.1V381.4c0 43.6-25.6 63.5-62.9 63.5zm85.8-43L301 382.1c9 14.7 20.8 25.6 41.5 25.6c17.4 0 28.6-8.7 28.6-20.8c0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5c0-31.6 24.1-55.6 61.6-55.6c26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18c-12.3 0-20.1 7.8-20.1 18c0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2c0 37.8-29.8 58.6-69.7 58.6c-39.1 0-64.4-18.6-76.7-43z"/></svg>
  },
  {
    tech: 'Next.js',
    icon: <svg style={{display: 'inline', width: '24px', height: '24px'}} viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path fill={iconColor} d="m386.3985596 35.5079727c-169.3385315-99.5687332-384.5140285 22.0419274-386.3862926 218.3738175-1.8282685 191.716507 201.0625916 315.5454712 370.0206604 231.1632233l-184.4725331-271.408722.0000305 167.9969177c0 18.6138916-35.6191101 18.6138916-35.6191101 0v-225.2124176c0-14.7758484 27.4472504-15.9884033 35.2252045-3.1443481l210.2631683 317.2959595c157.9509888-101.737259 155.8170166-338.1359864-9.0311279-435.0644303zm-23.7556153 317.9385605-35.7316284-54.5765381v-149.4116669c0-13.9324646 35.7316284-13.9324646 35.7316284 0z"/></svg>
  },
  {
    tech: 'Tailwind CSS',
    icon: <svg style={{display: 'inline', width: '24px', height: '24px'}} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill={iconColor} d="m12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35.98 1 2.09 2.15 4.59 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.91-1.35-.98-1-2.09-2.15-4.59-2.15m-5 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.91 1.35.98 1 2.09 2.15 4.59 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.91-1.35-.98-1-2.09-2.15-4.59-2.15z"/></svg>
  },
  {
    tech: 'Leaflet.js',
    icon: <svg style={{display: 'inline', width: '24px', height: '24px'}} viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path fill={iconColor} d="m156.4829712 498.5690918c-28.1542206 26.4686279-77.2916718 11.4086609-108.5622101-24.1750488-41.5189867-47.2457276-56.5517225-136.7262879-43.1670928-216.5212403zm32.7320709-30.5106812c-18.2281799-7.7469482-91.4576569-45.5538025-62.4625854-179.7611389-46.4509507-30.5319214-113.1081372-53.4966736-117.3748827-58.4777374 0 0 .1739359 8.0732727-1.9611459 23.9019775l157.6364436 235.3505402c3.916214-7.7184143 14.2997589-13.8781433 24.1621704-21.0136414zm-49.7864227-79.5793457c15.5429382 51.181488 43.0429688 57.2320251 63.3149414 69.8901978l205.8414612-440.3770981h2.4346619l-191.1070405 455.002739c19.3815613 18.2740479 45.2353973 36.6472473 84.0380707 27.9019775 159.9569702-28.5730591 196.4768677-286.6468964 109.9515076-500.8968811-101.7549439 69.7935562-177.9046936 107.4278717-227.5820465 181.3138885-38.6379547 57.4669037-68.6120529 138.396103-46.8915558 207.1651764z"/></svg>
  },
  {
    tech: 'Material UI',
    icon: <svg style={{display: 'inline', width: '24px', height: '24px'}} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill={iconColor} d="m0 2.475v10.39l3 1.733v-6.928l6 3.465 6-3.465v3.465l-6 3.463v3.464l6 3.463 9-5.195v-6.928l-3 1.733v3.463l-6 3.464-3-1.732 6-3.465v-10.39l-9 5.195zm24 0-3 1.73v3.465l3-1.732v-3.464z"/></svg>  }
]

function MUIDrawer({componentProps}) {
  
  return (
    <>
    <Drawer
        anchor={'left'}
        open={componentProps.isDrawerOpen} // {false} // 
        className='left-drawer'
        sx={{zIndex: 4000}}
    >
        
        <div style={{width: '320px', zIndex: 2000, padding: '25px'}} >
        <div style={{width: '100%'}} >
            <div style={{float: 'left'}} >
              {/* Sunil Maps */}
              <div style={{ backgroundColor: 'white', fontWeight:600 }}>
                <div style={{ display: 'inline' }}>
                  <span style={{ marginRight: '1.5px', color: 'rgba(0, 136, 255, 0.944)' }}>S</span>
                  <span style={{ marginRight: '1.5px', color: 'rgba(255, 60, 0, 0.86)' }}>U</span>
                  <span style={{ marginRight: '1.5px', color: 'rgba(255, 200, 0, 0.951)' }}>N</span>
                  <span style={{ marginRight: '1.5px', color: 'rgba(0, 136, 255, 0.944)' }}>I</span>
                  <span style={{ marginRight: '1.5px', color: 'green' }}>L</span>
                </div>&nbsp;
                <div style={{ display: 'inline', color: 'gray' }}>
                  <span style={{ marginRight: '.75px' }}>S</span>
                  <span style={{ marginRight: '.75px' }}>D</span>
                  <span style={{ marginRight: '.75px' }}>E</span>
                </div>
              </div>
            </div>
            <div style={{float: 'right'}}  > 
              <button className='contact-close-button' onClick={(e)=>componentProps.myToggleDrawer(false)}  >
                  <svg focusable="false" width="24" height="24" viewBox="0 0 24 24" class=" NMm5M"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"></path></svg>
              </button>
            </div>
            <br/>            
        </div>
        <Separator style={{backgroundColor:'#dadce0', margin: '10px 0 10px 0'  }}  /> 
        <div>
        <h1 className="font-mono mb-2 text-gray-500 text-lg">Tech&apos;s used in this site</h1>
        <ul className='mx-0'>
          {
          techs.map(item => <li key={item.tech} className='py-1.5' >
            {item.icon} &nbsp;{item.tech}</li>)}
        </ul>
        <h1 className="font-mono mt-4 mb-2 text-gray-500 text-lg">Upcoming updates</h1>
        <div className='text-sm'>Chatbot to  be integrated with the website in the future. Here one can find details about Sunil and his work.</div><br/><br/>
        </div>
        </div>
        
    </Drawer>
    </>
  )
}

export default MUIDrawer
