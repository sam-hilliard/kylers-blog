import React from 'react'

import styles from './PhotoLink.module.css'

export default function PhotoLink(props) {
  return (
    <div className={styles.photo_link}>
        <img className={styles.bg_img} alt={props.title} src={props.img} />
        <div className={styles.link_title}>
          <a href={props.link}>
            <h2>{props.title}</h2>
          </a>
        </div>
    </div>
  )
}
