import React, { useEffect, useState } from 'react'
import Desktop from "./desktop.js"
import Mobile from "./mobile.js"
import logo from './logo.svg'
import './App.css'
import ReactGA from 'react-ga'
import Header from './header.js'

const trackingId = "UA-XXXX"

function AppPage() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    ReactGA.initialize(trackingId)
    console.log("hitting here")
    window.addEventListener('resize', () => {
      console.log(window.innerWidth)
      if (window.innerWidth < 500) {
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
          <img src={logo} className="App-logo" alt="logo" />
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
