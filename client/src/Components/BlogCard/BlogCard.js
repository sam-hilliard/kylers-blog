import React from 'react'
import { Link } from 'react-router-dom'

import styles from './BlogCard.module.css'

export default function BlogCard(props) {
  return (
    <div className={styles.card}>
        <img className={styles.img} alt={props.title} src={props.img} />
        <div className={`centered ${styles.viewLinkContainer}`}><Link className="title-link">View</Link></div>
        <h2>{props.title}</h2>
    </div>
  )
}
