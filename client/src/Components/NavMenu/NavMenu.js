import React from 'react'
import {useEffect, useRef } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

import styles from './NavMenu.module.css'

export default function NavMenu() {

  const navItems = [
    {
      name: 'Home',
      link: '/'
    },
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

  const dropDownMenu = useRef()
  const menuIcon = useRef()

  useEffect(() => {
    function handleClickOutsideMenu(e) {
      if (menuActive && dropDownMenu.current && !dropDownMenu.current.contains(e.target)) {
        if (menuIcon.current && !menuIcon.current.contains(e.target)) {
        setMenuActive(false)
        }
      }
    }

    document.addEventListener('mousedown', handleClickOutsideMenu)

    return () => {
      document.removeEventListener('mousedown', handleClickOutsideMenu)
    }
  }, [dropDownMenu, menuActive])

  function handleClick() {
    setMenuActive(prevVal => !prevVal)
  }

  return (
    <>
      <div className={`${styles.menuIcon} ${menuActive ? styles.closeIcon : ''}`}  onClick={handleClick} ref={menuIcon}>
        <div></div>
      </div>
      <ul className={`${styles.menu_dropdown} ${menuActive ? styles.menu_active : ''}`} ref={dropDownMenu}>
        {navItems.map((item, index) => {
          return(
            <li key={index}><Link onClick={handleClick} to={item.link}>{item.name}</Link></li>
          )
        })}
      </ul>
    </>
  )
}
