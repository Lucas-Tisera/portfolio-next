'use client'

import styles from '../HomePage.module.css'
import { downloadCV } from '../hooks/usePdf'

export function Pdf({langText}) {
  return(
    <a className={styles.btn} onClick={() => downloadCV("LucasTisera-Resume.pdf")}>{langText}</a>
  )
}