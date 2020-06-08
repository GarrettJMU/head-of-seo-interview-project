import React, { useEffect, useState } from 'react'
import Desktop from "./desktop.js"
import Mobile from "./mobile.js"
import logo from './_DSC3369.jpg'
import './App.css'
import ReactGA from 'react-ga'
import Header from './header.js'

const trackingId = "UA-XXXX"

function AppPage() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    ReactGA.initialize(trackingId)
    
    window.addEventListener('load', () => {
      if (window.innerWidth < 600 || document.body.offsetWidth < 600) {
        setIsMobile(true)
      } else {
        setIsMobile(false)
      }
    })

    window.addEventListener('resize', () => {
      if (window.innerWidth < 600 || document.body.offsetWidth < 600) {
        setIsMobile(true)
      } else {
        setIsMobile(false)
      }
    })
  }, [])

  return (
    <React.Fragment>
      <Header />
      <div className="App">
        <header className="App-header">
          <img src={logo} style={{width: 1400}} />
          {isMobile ? <Mobile /> : <Desktop />}
          <video width="440px" loop={true} autoPlay="autoplay" controls muted>
            <source src="http://grochtdreis.de/fuer-jsfiddle/video/sintel_trailer-480.mp4"
                    type="video/mp4" />
          </video>
        </header>
      </div>
    </React.Fragment>
  )
}

export default AppPage
