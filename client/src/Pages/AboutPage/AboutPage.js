import React from 'react'

import Header from '../../Components/Header/Header'

import aboutInfo from '../../assets/content/aboutme.json'
import profilePic from '../../assets/images/profile-pic.jpg'

import styles from './AboutPage.module.css'

export default function AboutPage() {
  return (
    <div className="container">
        <Header title="About" />
        <div className="split">
          <div className={`centered ${styles.imgContainer}`}><img src={profilePic} alt="What Kyler looks like." /></div>
          <p>{aboutInfo.about}</p>
        </div>
    </div>
  )
}
