import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close';

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

  const [menuActive, setMenuActive] = useState(false);

  function handleClick() {
    setMenuActive(prevVal => !prevVal)
  }

  return (
    <>
      <div className={`${styles.menu_icon} ${!menuActive ? styles.menu_icon_active : ''}`}>
        <MenuIcon onClick={handleClick} className={`${menuActive ? styles.menu_icon_active : ''}`} />
      </div>
      <div className={`${styles.menu_icon} ${menuActive ? styles.menu_icon_active : ''}`}>
        <CloseIcon onClick={handleClick} />
      </div>
      <ul className={`${styles.menu_dropdown} ${menuActive ? styles.menu_active : ''}`}>
        {navItems.map((item, index) => {
          return(
            <li key={index}><Link to={item.link}>{item.name}</Link></li>
          )
        })}
      </ul>
    </>
  )
}
