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
        <section style={{marginTop:"100px"}}>
            <div className={styles.title}>

                <h1 >
                    Tech Skills
                </h1>
            </div>
            <div className={styles.skillsContainer}>
                <div className={styles.row}>
                    <div className={styles.itemContent} style={{borderBottom: "2px solid #F25320"}}>
                        <div className='bx bxl-html5' style={{color:"#F25320"}}></div>
                        <h3>HTML5</h3>
                    </div>
                    <div className={styles.itemContent} style={{borderBottom: "2px solid #2071F2"}}>
                        <div className='bx bxl-css3' style={{color:"#2071F2"}}></div>
                        <h3>CSS3</h3>
                    </div>
                    <div className={styles.itemContent} style={{borderBottom: "2px solid #EAD41C"}}>
                        <div className='bx bxl-javascript' style={{color:"#EAD41C"}}></div>
                        <h3>JavaScript</h3>
                    </div>
                </div>
                <div className={styles.row}>
                    <div className={styles.itemContent} style={{borderBottom: "2px solid #46CAF2"}}>
                        <div className='bx bxl-react' style={{color:"#46CAF2"}}></div>
                        <h3>React.js</h3>
                    </div>
                    <div className={styles.itemContent} style={{borderBottom: "2px solid #fff"}}>
                        <div>
                            <Image src='/static/next.svg' width={70} height={70} alt='nextjs' className={styles.nextIcon}/>
                        </div>
                        <h3>Next.js</h3>
                    </div>
                    <div className={styles.itemContent} style={{borderBottom: "2px solid #89BB3C"}}>
                        <div className='bx bxl-nodejs' style={{color:"#89BB3C"}}></div>
                        <h3>NodeJS</h3>
                    </div>
                </div>
            </div>
        </section>
    )
}