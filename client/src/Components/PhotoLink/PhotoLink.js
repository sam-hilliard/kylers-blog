import React from 'react'

import { Link } from 'react-router-dom'

import styles from './PhotoLink.module.css'

export default function PhotoLink(props) {
  return (
    <div className={styles.photo_link}>
        <img className={styles.bg_img} alt={props.title} src={props.img} />
        <div className={styles.link_title}>
          <Link to={props.link}>
            <h3>{props.title}</h3>
          </Link>
        </div>
    </div>
  )
}
