'use client'

import { downloadCV } from "@/hooks/HandlePdf"
import styles from '../app/HomePage.module.css'

export function Pdf() {
  return(
    <a className={styles.btn} onClick={() => downloadCV("LucasTisera-Resume.pdf")}>Download CV</a>
  )
}