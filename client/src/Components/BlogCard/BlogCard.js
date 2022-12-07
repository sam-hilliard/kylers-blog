import React from 'react'
import { Link } from 'react-router-dom'

import styles from './BlogCard.module.css'

export default function BlogCard(props) {
  return (
    <div className={styles.card}>
        <img className={styles.img} alt={props.title} src={props.img} />
        <Link className="title-link">{props.title}</Link>
    </div>
  )
}
