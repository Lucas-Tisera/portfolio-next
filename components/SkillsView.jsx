"use client"
import Aos from 'aos'
import Image from 'next/image'
import "aos/dist/aos.css"
import { useEffect } from 'react'
import styles from './styles/SkillsView.module.css'

export function SkillsResume(){
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])
    

    return (
        <section style={{marginTop:"100px", width:"100%"}}>
            <div className={styles.title}>
                <h1 >
                    Tech Skills
                </h1>
            </div>

            <div className={styles.skillsContainer}>
                
                <div className={styles.row}>
                    <div className={styles.card}>
                        <div className={styles.front} >
                            <div className='bx bxl-html5' style={{color:"#F25320"}}></div>
                        </div>
                        <div className={styles.back} >
                            <h3>HTML</h3>
                            <p>High technical skill using it for 3 - 4 years at work and high school</p>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.front}>
                            <div className='bx bxl-css3' style={{color:"#2071F2"}}></div>

                        </div>
                        <div className={styles.back} >
                            <h3>CSS</h3>
                            <p>High technical skill using it for 3 - 4 years at work, high school, personal projects and web challenges</p>

                        </div>
                    </div>
                    <div className={`${styles.card} ${styles.main}`}>
                        <div className={styles.front} >
                            <div className='bx bxl-javascript' style={{color:"#EAD41C"}}></div>

                        </div>
                        <div className={styles.back} >
                            <h3>JAVASCRIPT</h3>
                            <p>High skill level using it for 3 - 4 years at work and personal projects</p>

                        </div>
                    </div>
                    <div className={`${styles.card}`}>
                        <div className={styles.front} >
                            <div className='bx bxl-php' style={{color:"#818CB7"}}></div>

                        </div>
                        <div className={styles.back} >
                            <h3>PHP</h3>
                            <p>Medium skill level using it for 2 years at work and high school</p>

                        </div>
                    </div>
                    
                </div>
                <div className={styles.row}>
                    <div className={styles.card}>
                        <div className={styles.front} >
                            <div>
                                <Image src='/static/next.svg' width={70} height={70} alt='nextjs' className={styles.nextIcon}/>
                            </div>

                        </div>
                        <div className={styles.back} >
                            <h3>NEXT.JS</h3>
                            <p>Moderated technical skill using it for 1 year in personal projects</p>
                        </div>
                    </div>
                    <div className={`${styles.card} ${styles.main}`}>
                        <div className={styles.front} >
                            <div className='bx bxl-react' style={{color:"#46CAF2"}}></div>
                        </div>
                        <div className={styles.back} >
                            <h3>REACT.JS</h3>
                            <p>Advanced skills using it for 2 - 3 years at work, high school and personal projects</p>

                        </div>
                    </div>
                    <div className={`${styles.card}`}>
                        <div className={styles.front} >
                            <div>
                                <Image src='/static/laravel.svg' width={60} height={60} alt='nextjs' className={styles.nextIcon}/>
                            </div>
                        </div>
                        <div className={styles.back} >
                            <h3>LARAVEL</h3>
                            <p>Basic skill level using it for 1 year at work</p>

                        </div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.front} >
                            <div className='bx bxl-nodejs' style={{color:"#89BB3C"}}></div>

                        </div>
                        <div className={styles.back} >
                            <h3>NODE.JS</h3>
                            <p>Medium technical skill using it for 1 year combining it with React at work and high school</p>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}