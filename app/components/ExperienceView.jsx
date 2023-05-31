"use client"
import Aos from 'aos'
import Image from 'next/image'
import styles from './styles/ExperienceView.module.css'
import "aos/dist/aos.css"
import { useContext, useEffect } from 'react'
import LangContext from '../context/LangContext'

export function ExperienceTimeLine(){
    const {texts} = useContext(LangContext)
    
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])
    
    return (
        <section style={{ display:"flex", flexDirection:"column"}}>
            <div data-aos="zoom-in" className={styles.title}>
                <h1>
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
                    <p>As a Full Stack Developer, I was able to perform my role alongside my teammates to carry out different types of projects, working on both mobile and web applications, contributing the necessary input to ensure smooth progress, while adhering to guidelines and delivery deadlines. This experience has been highly valuable in expanding my knowledge and honing my hard skills, as it involves working with various technologies such as React, React Native, Node, Php, Laravel, and JavaScript, constantly learning something new from them. It has also allowed me to develop soft skills through effective communication within the team and a constant willingness to help, thereby strengthening teamwork, communication, and collaborative problem-solving skills.</p>
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