"use client"
import React, { useState, useEffect } from 'react';
import MyApp from './MyApp'
import SearchBar from '../components/SearchBar'
import Image from 'next/image'
import { Input } from '@/components/ui/input';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import Map from '../components/Map';

import AppStateProvider from '../context/AppStateProvider';

import { makeZIndexes } from '@/lib/utils';

//Trigger Vercel Dep2.
export default function Home() {
  useEffect(()=>{

    const Z_INDEX_LAYERS = ['map', 'left-pane', 'features', 'menu', 'popup', 'bot-assistant', 'app-tour-overlay', 'app-tour-tooltip'];
  
    const zIndexes = makeZIndexes(Z_INDEX_LAYERS);
  
    // Format as CSS variables and inject to a top HTML element
    const styleString = Object.entries(zIndexes).map(([name, value]) => `--${name}: ${value}; `).join('')
  
    // document.querySelector('.app').setAttribute("style", styleString);
    const appElement = document.querySelector('.app');
    if (appElement) {
      appElement.setAttribute("style", styleString);
    }
   
  }, [])
 
  return (
    <AppStateProvider > 
    <main className='app' style={{height: '100vh', width: '100%' }} > 
      {<MyApp />}
    </main>
    </AppStateProvider>
  )
}
