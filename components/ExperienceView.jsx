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
        <section style={{"display":"flex", "flexDirection":"column"}}>
            <div data-aos="zoom-in" className={styles.title}>
                <h1>
                    Experience
                </h1>
            </div>
            <div data-aos="fade-right" className={`${styles.container} ${styles.containerLeft}`}>
                <div className={styles.imageContainer}>
                    <Image src="/static/bdtLogo.png" alt="BDT Global" width={40} height={40} className={styles.logos} />
                </div>
                <div className={styles.textBox} >
                    <h2>BDT Global</h2>
                    <small>2021 - Actuality</small>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque iusto alias pariatur blanditiis quisquam dicta voluptatum similique repellendus suscipit nesciunt commodi accusantium, assumenda voluptas perferendis numquam qui. Numquam, animi accusantium! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem nam totam necessitatibus perspiciatis vitae accusantium itaque ipsam, eligendi adipisci mollitia laudantium labore saepe minima iste qui eaque dolor enim at.</p>
                    <span className={styles.containerLeftArrow}></span>
                </div>
            </div>
            <div data-aos="fade-left" className={`${styles.container} ${styles.containerRight}`}>
                <div className={styles.imageContainer}>
                    <Image src="/static/bdtLogo.png" alt="BDT Global" width={40} height={40} className={styles.logos} />
                </div>
                <div className={styles.textBox}>
                    <h2>BDT Global</h2>
                    <small>2021 - Actuality</small>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque iusto alias pariatur blanditiis quisquam dicta voluptatum similique repellendus suscipit nesciunt commodi accusantium, assumenda voluptas perferendis numquam qui. Numquam, animi accusantium! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem nam totam necessitatibus perspiciatis vitae accusantium itaque ipsam, eligendi adipisci mollitia laudantium labore saepe minima iste qui eaque dolor enim at.</p>
                    <span className={styles.containerRightArrow}></span>

                </div>
            </div>
            <div data-aos="fade-right" className={`${styles.container} ${styles.containerLeft}`}>
                <div className={styles.imageContainer}>
                    <Image src="/static/bdtLogo.png" alt="BDT Global" width={40} height={40} className={styles.logos} />
                </div>
                <div className={styles.textBox}>
                    <h2>BDT Global</h2>
                    <small>2021 - Actuality</small>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque iusto alias pariatur blanditiis quisquam dicta voluptatum similique repellendus suscipit nesciunt commodi accusantium, assumenda voluptas perferendis numquam qui. Numquam, animi accusantium! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem nam totam necessitatibus perspiciatis vitae accusantium itaque ipsam, eligendi adipisci mollitia laudantium labore saepe minima iste qui eaque dolor enim at.</p>
                    <span className={styles.containerLeftArrow}></span>

                </div>
            </div>
            <div data-aos="fade-left" className={`${styles.container} ${styles.containerRight}`}>
                <div className={styles.imageContainer}>
                    <Image src="/static/bdtLogo.png" alt="BDT Global" width={40} height={40} className={styles.logos} />
                </div>
                <div className={styles.textBox}>
                
                    <h2>BDT Global</h2>
                    <small>2021 - Actuality</small>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque iusto alias pariatur blanditiis quisquam dicta voluptatum similique repellendus suscipit nesciunt commodi accusantium, assumenda voluptas perferendis numquam qui. Numquam, animi accusantium! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem nam totam necessitatibus perspiciatis vitae accusantium itaque ipsam, eligendi adipisci mollitia laudantium labore saepe minima iste qui eaque dolor enim at.</p>
                    <span className={styles.containerRightArrow}></span>

                </div>
            </div>
        </section>
    )
}