"use client"
import Link from "next/link"
import { useContext, useState } from "react"
import LangContext from "../context/LangContext"
import styles from './styles/Navigation.module.css'

export function MainHeader(){
  const [showNavbar, setShowNavbar] = useState(false)
  const {texts, handleLang, lang} = useContext(LangContext)
  const [selected, setSelected] = useState("es")
  const handleChange = (e) => {
    setSelected(e.target.checked ? "en" : "es")
    handleLang(e.target.checked ? "en" : "es")
  }
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
                <div className={styles.langContainer}>
                  <p className={`esp`}>
                    {lang === "es" ? "Español" : "English"}
                  </p>
                  <label className={styles.switch}>
                    <input type="checkbox" onChange={handleChange} checked={lang === "en" ? true : false} />
                    <span className={`${styles.slider} ${styles.round}`}></span>
                  </label>
                </div>
            </ul>

          </nav>
        </header>
      </>
    )
}