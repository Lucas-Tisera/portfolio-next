"use client"
import Aos from 'aos'
import Image from 'next/image'
import styles from './styles/ExperienceView.module.css'
import "aos/dist/aos.css"
import { useContext, useEffect } from 'react'
import LangContext from '../context/LangContext'
import NavbarContext from '../context/NavbarContext'

export function ExperienceTimeLine(){
    const {texts} = useContext(LangContext)
    const {section} = useContext(NavbarContext)
    
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])
    
    useEffect(() => {
            if (section === "experience"){
                const scrollable = document.getElementById(section)
                scrollable.scrollIntoView({behavior: "smooth"})
            } else {
                return
            }
    }, [section])
    

    return (
        <section style={{ display:"flex", flexDirection:"column"}}>
            <div data-aos="zoom-in" className={styles.title}>
                <h1 id='experience'>
                    {texts.experience}
                </h1>
            </div>
            <div data-aos="fade-right" className={`${styles.container} ${styles.containerLeft}`}>
                <div className={styles.imageContainer}>
                    <Image src="/static/bdtLogo.png" alt="BDT Global" width={40} height={40} />
                </div>
                <div className={styles.textBox} >
                    <h2>BDT Global <small>- {texts.experience}</small> </h2>
                    <small>Feb 2022 - Present</small>
                    <p>{texts.experienceBDT}</p>
                    <span className={styles.containerLeftArrow}></span>
                </div>
            </div>
            <div data-aos="fade-left" className={`${styles.container} ${styles.containerRight}`}>
                <div className={styles.imageContainer}>
                    <div className={`bx bxl-github`} style={{color:"#000", fontSize:40}}></div>
                </div>
                <div className={styles.textBox}>
                    <h2>Personal Projects <small>- Full Stack Developer</small></h2>
                    <small>Dec 2022 - Present</small>
                    <p>{texts.experiencePersonal1}</p>
                    <p>{texts.experiencePersonal2}</p>
                    <p>{texts.experiencePersonal3}</p>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>Next</li>
                        <li>Git</li>
                    
                    <span className={styles.containerRightArrow}></span>

                </div>
            </div>
            <div data-aos="fade-right" className={`${styles.container} ${styles.containerLeft}`}>
                <div className={styles.imageContainer}>
                    <Image src="/static/bdtLogo.png" alt="BDT Global" width={40} height={40} className={styles.logos} />
                </div>
                <div className={styles.textBox}>
                    <h2>BDT Global <small>- {texts.experienceInternTitle}</small></h2>
                    <small>Jul 2021 - Dec 2021</small>
                    <p>{texts.experienceIntern1}</p>
                    <p>{texts.experienceIntern2}</p>
                    <span className={styles.containerLeftArrow}></span>

                </div>
            </div>
        </section>
    )
}