import Link from "next/link";
import styles from './styles/Redes.module.css'
export function RedesLink () {
    return (
        <div className={styles.redesContainer}>
            <Link target={"_blank"} href="https://www.linkedin.com/in/lucas-tisera/" className={styles.redesIcon}>
                <div className="bx bxl-linkedin"/>
            </Link>
            <Link target={"_blank"} href="https://github.com/Lucas-Tisera" className={styles.redesIcon}>
                <div className="bx bxl-github"/>
            </Link>
        </div>
    )
}