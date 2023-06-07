"use client"
import Aos from 'aos'
import Image from 'next/image'
import "aos/dist/aos.css"
import { useContext, useEffect } from 'react'
import styles from './styles/SkillsView.module.css'
import LangContext from '../context/LangContext'
import NavbarContext from '../context/NavbarContext'

export function SkillsResume(){
    const {texts} = useContext(LangContext)
    const {section, setSection} = useContext(NavbarContext)
    const scrollable = document.getElementById(section)

    useEffect(() => {
        if(scrollable) {
            scrollable.scrollIntoView({behavior: "smooth"})
            setSection("null")
        }
    }, [section])

    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])
    
    return (
        <section style={{marginTop:"100px", width:"100%"}}>
            <div className={styles.title}>
                <h1 id="skills" >
                    {texts.skillsTitle}
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
                            <p>{texts.skillsHtml}</p>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.front}>
                            <div className='bx bxl-css3' style={{color:"#2071F2"}}></div>

                        </div>
                        <div className={styles.back} >
                            <h3>CSS</h3>
                            <p>{texts.skillsCss}</p>

                        </div>
                    </div>
                    <div className={`${styles.card} ${styles.main}`}>
                        <div className={styles.front} >
                            <div className='bx bxl-javascript' style={{color:"#EAD41C"}}></div>

                        </div>
                        <div className={styles.back} >
                            <h3>JAVASCRIPT</h3>
                            <p>{texts.skillsJs}</p>

                        </div>
                    </div>
                    <div className={`${styles.card}`}>
                        <div className={styles.front} >
                            <div className='bx bxl-php' style={{color:"#818CB7"}}></div>

                        </div>
                        <div className={styles.back} >
                            <h3>PHP</h3>
                            <p>{texts.skillsPhp}</p>

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
                            <p>{texts.skillsNext}</p>
                        </div>
                    </div>
                    <div className={`${styles.card} ${styles.main}`}>
                        <div className={styles.front} >
                            <div className='bx bxl-react' style={{color:"#46CAF2"}}></div>
                        </div>
                        <div className={styles.back} >
                            <h3>REACT.JS</h3>
                            <p>{texts.skillsReact}</p>

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
                            <p>{texts.skillsLaravel}</p>

                        </div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.front} >
                            <div className='bx bxl-nodejs' style={{color:"#89BB3C"}}></div>

                        </div>
                        <div className={styles.back} >
                            <h3>NODE.JS</h3>
                            <p>{texts.skillsNode}</p>

                        </div>
                    </div>
                    <div className={`${styles.card}`}>
                        <div className={styles.front} >
                            <div className='bx bxl-react' style={{color:"#46CAF2"}}></div>
                            <h1>React Native</h1>
                        </div>
                        <div className={styles.back} >
                            <h3>REACT NATIVE</h3>
                            <p>{texts.skillsReactNative}</p>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}