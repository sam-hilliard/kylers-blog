import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';

import styles from './NavMenu.module.css';

export default function NavMenu() {
  return (
    <div className="nav-menu">
        <MenuIcon className={styles.menu_icon} />
    </div>
  )
}
