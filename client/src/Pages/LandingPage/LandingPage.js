import React from 'react'
import { Link } from 'react-router-dom'

import styles from './LandingPage.module.css'

export default function LandingPage() {
  return (
    <div className={styles.container}>
        <div className={styles.header}>
          <div className="centered">
            <h1>Kyler<br />Walsh</h1>
            <div className={`separater ${styles.underline}`}></div>
          </div>
        </div>
        <div className={`bg-img-fill ${styles.photo_sample}`} />
        <Link className={`title-link ${styles.photo_link}`}>Photographer</Link>
        <div className={`bg-img-fill ${styles.art_sample}`} />
        <Link className={`title-link ${styles.art_link}`}>Artist</Link>
    </div>
  )
}
