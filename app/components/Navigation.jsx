"use client"
import Link from "next/link"
import { useContext, useState } from "react"
import LangContext from "../context/LangContext"
import NavbarContext from "../context/NavbarContext"
import styles from './styles/Navigation.module.css'

export function MainHeader(){
  const [showNavbar, setShowNavbar] = useState(false)
  const {texts, handleLang, lang} = useContext(LangContext)
  const [selected, setSelected] = useState("es")
  const {setSection} = useContext(NavbarContext)
  
  // This code changes the language from English to Spanish
  const handleChange = (e) => {
    if (e.target.checked) {
      setSelected("en")
      handleLang("en")
    } else {
      setSelected("es")
      handleLang("es")
    }
  }
  
  const links =[
      {
          label: texts.home,
          route: 'home'
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
                  <li key={route}>
                    <Link href={""}  onClick={()=> setSection(route)}>
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