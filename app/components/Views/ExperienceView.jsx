"use client"
import Aos from 'aos'
import Image from 'next/image'
import styles from '../styles/ExperienceView.module.css'
import "aos/dist/aos.css"
import { useContext, useEffect } from 'react'
import LangContext from '../../context/LangContext'

export function ExperienceTimeLine(){
    const {texts} = useContext(LangContext)
    
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])
    

    return (
        <section id='experience' style={{ display:"flex", flexDirection:"column"}}>
            <div data-aos="zoom-in" className={styles.title}>
                <h1 >
                    {texts.experience}
                </h1>
            </div>
            <div data-aos="fade-right" className={`${styles.container} ${styles.containerLeft}`}>
                <div className={styles.imageContainer}>
                    <Image src="/static/coderhouse.png" alt="CoderHouse" width={40} height={40} />
                </div>
                <div className={styles.textBox} >
                    <h2>CoderHouse <small>- Profesor React.js</small> </h2>
                    <small>Jul 2023 - Present</small>
                    <p>{texts.experienceCoder}</p>
                    <p>{texts.experienceCoder2}</p>
                    <span className={styles.containerLeftArrow}></span>
                </div>
            </div>
            <div data-aos="fade-left" className={`${styles.container} ${styles.containerRight}`}>
                <div className={styles.imageContainer}>
                    <Image src="/static/bdtLogo.png" alt="BDT Global" width={40} height={40} />
                </div>
                <div className={styles.textBox} >
                    <h2>BDT Global <small>- {texts.experienceTitle}</small> </h2>
                    <small>Feb 2022 - Present</small>
                    <p>{texts.experienceBDT}</p>
                    <span className={styles.containerRightArrow}></span>
                </div>
            </div>
            <div data-aos="fade-right" className={`${styles.container} ${styles.containerLeft}`}>
                <div className={styles.imageContainer}>
                    <div className={`bx bxl-github`} style={{color:"#000", fontSize:40}}></div>
                </div>
                <div className={styles.textBox}>
                    <h2>Personal Projects <small>- {texts.experienceTitle}</small></h2>
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
                    
                    <span className={styles.containerLeftArrow}></span>

                </div>
            </div>
            <div data-aos="fade-left" className={`${styles.container} ${styles.containerRight}`}>
                <div className={styles.imageContainer}>
                    <Image src="/static/bdtLogo.png" alt="BDT Global" width={40} height={40} className={styles.logos} />
                </div>
                <div className={styles.textBox}>
                    <h2>BDT Global <small>- {texts.experienceInternTitle}</small></h2>
                    <small>Jul 2021 - Dec 2021</small>
                    <p>{texts.experienceIntern1}</p>
                    <p>{texts.experienceIntern2}</p>
                    <span className={styles.containerRightArrow}></span>

                </div>
            </div>
        </section>
    )
}