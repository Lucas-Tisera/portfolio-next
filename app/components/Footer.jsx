"use client"
import Link from "next/link"
import { useContext, useState } from "react"
import LangContext from "../context/LangContext"
import styles from './styles/Footer.module.css'

export const Footer = () =>{
  const [showNavbar, setShowNavbar] = useState(false)
  const {texts, lang} = useContext(LangContext)
  
  const links =[
      {
          label: texts.home,
          route: '#home'
      },{
          label: texts.experience,
          route: '#experience'
      },{
          label: texts.skills,
          route: '#skills'
      },{
          label: texts.contact,
          route: '#contact'
      }
  ]
    return(
      <>
        <footer className={styles.footer}>
            <div className={styles.navigationContainer}>
                <h1>
                Lucas.T - Portfolio
                </h1>
                <ul className={`${showNavbar ? styles.active : "none"} ${styles.navigation}`}>
                    {links.map(({label, route}) => (
                    <li key={label}>
                        <a href={route}>
                        {label}
                        </a>
                    </li>
                    ))}
                </ul>
            </div>
            <div className={styles.contact}>
                <h1>
                    Contact
                </h1>
                <div className={styles.link}>
                    <div className={`bx bxs-envelope`} style={{color:"", fontSize:14}}></div>

                    <p>
                        lucastisera02@gmail.com
                    </p>
                </div>
                <div className={styles.link}>
                    <div className={`bx bxs-phone`} style={{color:"", fontSize:14}}></div>
                    <p>
                        1123084456
                    </p>
                </div>
                <div className={styles.link}>

                <div className={`bx bxs-paper-plane`} style={{color:"", fontSize:14}}></div>

                <p>
                    Buenos Aires, Argentina
                </p>
                </div>  
                <Link target={"_blank"} href={"https://www.linkedin.com/in/lucas-tisera/"} className={styles.link}>
                    <div className={`bx bxl-linkedin`} style={{color:"", fontSize:14}}></div>
                    <p>Lucas Tisera</p>
                </Link>
            </div>
            <div className={styles.info}>
                <h1>
                    Development
                </h1>
                <li key={"1"}>
                    by Lucas Tisera
                </li>
                <li key={"2"}>
                    using Next.js
                </li>
                <li key={"3"}>
                    desktop version
                </li>
                <li key={"4"}>
                    relese in 2023
                </li>
            </div>
        </footer>
      </>
    )
}