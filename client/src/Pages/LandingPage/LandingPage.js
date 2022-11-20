import React from 'react'

import PhotoLink from '../../Components/PhotoLink/PhotoLink'

import photoSample from '../../assets/images/photo-sample.jpg'
import artSample from '../../assets/images/art-sample.jpg'

import styles from './LandingPage.module.css'

export default function LandingPage() {
  return (
    <div className={styles.container}>
      <h1>
        Kyler
        <br />
        Walsh
      </h1>
      <div className="separater"></div>
      <div className={styles.photo_container}>
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
    </div>
  )
}
