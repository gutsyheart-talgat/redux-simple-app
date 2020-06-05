import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './nav.module.css'

function Nav() {
  const links = [
    { href: '/', text: 'Change name page' },
    { href: '/job', text: 'Change job page' },
    { href: '/age', text: 'Change age page' },
  ]
  return (
    <div className={styles.wrapper}>
      {
        links.map((link) => (
          <NavLink
            exact
            key={link.text}
            to={link.href}
            className={styles.link}
            activeClassName={styles.active}
          >{link.text}
          </NavLink>
        ))
      }
    </div>
  )
}

export default Nav
