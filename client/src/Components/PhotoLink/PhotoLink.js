import React from 'react'

import { Link } from 'react-router-dom'

import styles from './PhotoLink.module.css'

export default function PhotoLink(props) {
  return (
    <div className={styles.photo_link}>
        <img className={styles.bg_img} alt={props.title} src={props.img} />
        <Link className={styles.link_title} to={props.link}>{props.title}</Link>
    </div>
  )
}
