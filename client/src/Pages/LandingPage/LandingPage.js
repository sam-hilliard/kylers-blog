import React from 'react'

import PhotoLink from '../../Components/PhotoLink/PhotoLink'
import Header from '../../Components/Header/Header'

import photoSample from '../../assets/images/photo-sample.jpg'
import artSample from '../../assets/images/art-sample.jpg'

import styles from './LandingPage.module.css'

export default function LandingPage() {
  return (
    <div className={styles.container}>
        <Header title={<>Kyler<br />Walsh</>} />
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
