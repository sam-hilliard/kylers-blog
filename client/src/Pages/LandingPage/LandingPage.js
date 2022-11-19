import React from 'react'

import PhotoLink from '../../Components/PhotoLink/PhotoLink'

import photoSample from '../../assets/images/photo-sample.jpg'
import artSample from '../../assets/images/art-sample.jpg'

export default function LandingPage() {
  return (
    <div className="landing-page">
      <h1>Kyler Walsh</h1>
      <PhotoLink 
        img={photoSample}
        link="" 
        title="Photographer"
      />
      <PhotoLink 
        img={artSample} 
        link="" 
        title="Artist"
      />
    </div>
  )
}
