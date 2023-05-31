"use client"
import Link from "next/link"
import { useContext, useState } from "react"
import LangContext from "../context/LangContext"
import styles from './styles/Navigation.module.css'

export function MainHeader(){
  const [showNavbar, setShowNavbar] = useState(false)
  const {texts, handleLang} = useContext(LangContext)

  const links =[
      {
          label: texts.home,
          route: '/'
      },{
          label: texts.experience,
          route: 'experience'
      },{
          label: texts.education,
          route: 'education'
      },{
          label: texts.skills,
          route: 'skills'
      },{
          label: texts.contact,
          route: 'contact'
      }
  ]
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
            <div className={styles.lang}>
              <select onChange={handleLang}>
                <option value="en" >EN</option>
                <option value="es" >ES</option>
              </select>
            </div>
            </ul>

          </nav>
        </header>
      </>
    )
}