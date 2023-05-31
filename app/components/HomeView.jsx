'use client'

import { useContext, useEffect, useState } from 'react'
import LangContext from '../context/LangContext'
import styles from '../HomePage.module.css'
import { WindowsImageViewer } from './ImageContainer'
import { Pdf } from './PDF'
import { RedesLink } from './Redes'


export const HomeView = () => {
    const {texts} = useContext(LangContext) 
    
return (
    <section className={styles.home}>
        <div className={styles.contentContainer}>
        <div className={styles.homeContent}>
            <h1>{texts.title}</h1>
            <div className={styles.textAnimate}>
            <h3>{texts.subtitle}</h3>
            </div>
            <p>{texts.description}</p>
            <div className={styles.btnContainer}>
            <a href="#" className={styles.btn}>{texts.btn}</a>
            <Pdf langText = {texts.btn2}/>
            </div>
            <RedesLink/>
        </div>
        <WindowsImageViewer/>
        </div>
    </section>
)}