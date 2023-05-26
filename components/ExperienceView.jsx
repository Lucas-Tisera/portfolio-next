"use client"
import Aos from 'aos'
import Image from 'next/image'
import Link from 'next/link'
import styles from './styles/ExperienceView.module.css'
import "aos/dist/aos.css"
import { useEffect } from 'react'

export function ExperienceTimeLine(){
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])
    

    return (
        <section style={{ display:"flex", flexDirection:"column"}}>
            <div data-aos="zoom-in" className={styles.title}>
                <h1>
                    Experience
                </h1>
            </div>
            <div data-aos="fade-right" className={`${styles.container} ${styles.containerLeft}`}>
                <div className={styles.imageContainer}>
                    <Image src="/static/bdtLogo.png" alt="BDT Global" width={40} height={40} />
                </div>
                <div className={styles.textBox} >
                    <h2>BDT Global <small>- Full Stack Developer</small> </h2>
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
                    <p>As a self-taught developer, I kept learning new languages and skills that could help me face projects where I applied the acquired knowledge and best practices. Currently, after a long training process, I am carrying out a project that has always motivated me, my own portfolio, which are you watching right now.</p>
                    <p>During the course I managed to create good code habits and practices applicable to any type of work as a developer.</p>
                    <p>The principal tech stack that i used was: </p>
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
                    <h2>BDT Global <small>- Full Stack Developer (internships)</small></h2>
                    <small>Jul 2021 - Dec 2021</small>
                    <p>During the internships, I was part of a development team where we were able to carry out several project proposals, allowing us to learn and demonstrate the previously acquired knowledge.</p>
                    <p>Primarily, the tasks were carried out in React.js, and the use of Node.js was implemented.</p>
                    <span className={styles.containerLeftArrow}></span>

                </div>
            </div>
        </section>
    )
}