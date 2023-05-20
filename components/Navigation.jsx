"use client"
import Link from "next/link"
import { useState } from "react"
import styles from './styles/Navigation.module.css'

const links =[
    {
        label: 'Home',
        route: '/'
    },{
        label: 'Experience',
        route: ''
    },{
        label: 'Education',
        route: ''
    },{
        label: 'Skills',
        route: ''
    },{
        label: 'Contact',
        route: ''
    }
]
export function MainHeader(){
  const [showNavbar, setShowNavbar] = useState(false)
    return(
      <>
        <header className={styles.header}>
          <nav className={styles.navigationContainer}>
            <Link href="/" className={styles.logo}>
              Lucas.T - Portfolio
            </Link>
            <div className="bx bx-menu" id={styles.menuIcon} onClick={()=>setShowNavbar(!showNavbar)}/>
            <ul className={`${showNavbar ? styles.active : "none"} ${styles.navigation}`}>
                {links.map(({label, route}) => (
                  <li key={route} className="active">
                    <Link href={route}>
                      {label}
                    </Link>
                  </li>
                ))}
            </ul>
          </nav>
        </header>
      </>
    )
}