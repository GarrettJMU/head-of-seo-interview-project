import React, {useEffect} from 'react'
import logo from './logo.svg'
import './App.css'
import ReactGA from 'react-ga'
import Helmet from 'react-helmet'

const trackingId = "UA-XXXX"

function App() {

  useEffect(() => {
    ReactGA.initialize(trackingId)
  });

  return (
    <React.Fragment>
      <Helmet>
        <script type="application/ld+json">
          {{
            "@context": "https://schema.org",
            "@type": "Airline",
            "name": "HCP",
            "url": "houscall.com",
            "logo": "logo.com"
          }}
        </script>
      </Helmet>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </React.Fragment>
  )
}

export default App
