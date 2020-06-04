import React from 'react'
import { Helmet } from "react-helmet"

const Header = () => (
  <Helmet>
    <script type="application/ld+json">
      {`${{
        "@context": "https://schema.org",
        "@type": "Airline",
        "name": "HCP",
        "url": "houscall.com",
        "logo": "logo.com"
      }}`}
    </script>
    <meta property="og:description"
          content="Learn the story of how a plumbing company grew more revenue simply from giving customers more flexible payment options." />
    <meta property="og:image"
          content="http://images.ctfassets.net/990581qemznk/1rdMJSLIID4XCNRaOfqdGn/f558ad50ef355ac80d45340b6b9fc0f4/cowbell-handyman-200.jpg" />
    <meta property="og:title"
          content="How One Plumbing Company Increased Sales by $10K a Month with Consumer Financing | Housecall Pro" />
    <meta property="og:type" content="article" />
    <meta property="og:url" content="https://www.housecallpro.com/learn/consumer-financing-case-study/" />
    <meta name="description" content="Plumbing business" />
    <title>How To Start A Plumbing Business When You Have Little To No Money But Want To Make A Fortune In 2020 And
      Beyond | Housecall pro</title>
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:title" content="How to Start Offering Virtual Estimates | Housecall Pro" />
    <meta name="twitter:description" content="Many pros have been successfully conducting virtual estimates for years. It takes some practice to get used to and potentially some customer education. Here are some tips to get you
        started. | Housecall Pro" />
  </Helmet>
)

export default Header
