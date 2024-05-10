import React from 'react'
import About from './about'

export default function Home() {

  return (
    <>
        <div className='wrapper'>
            <header>
                <img src="/Earth.jpeg" alt="earth" className="background" />
                <img src="/GPSIIIF_Sat.png" alt="satellite" className="foreground" style={{ width: '50%', height: 'auto' }}/>
                <h1 className='header-title'><img src="/CanyonTextLogo.png" alt="Canyon Logo with Text"/></h1>
                {/* <h1 className='header-title'>Canyon Consulting</h1> */}
                <img src="/Cloud.png" alt="cloud" className='cloud-foreground'/>
            </header>
            <About />
        </div>
    </>
    
  )
}
