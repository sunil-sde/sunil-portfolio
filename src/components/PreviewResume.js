import { Button } from '@mui/material'
import React, { useEffect } from 'react'

function PreviewResume() {
    
  return (
    <>
      <iframe id='pdfViewer' className="pdf resume" 
                src="/static/Resume/SDE-Sunil.pdf"
            width="800" height="500" >
        </iframe>
    </>
  )
}

export default PreviewResume
