import React from 'react'
import { Link } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu'

import styles from './NavMenu.module.css'

export default function NavMenu() {

  const navItems = [
    {
      name: 'About',
      link: '/about'
    },
    {
      name: 'Photography',
      link: '/photography',
    },
    {
      name: 'Art',
      link: '/art'
    }
  ]

  return (
    <div className={styles.menu_container}>
        <MenuIcon className={styles.menu_icon} />
        <ul className={styles.menu_dropdown + " " + styles.menu_active}>
          {navItems.map((item, index) => {
            return(
              <li key={index}><Link to={item.link}>{item.name}</Link></li>
            )
          })}
        </ul>
    </div>
  )
}
