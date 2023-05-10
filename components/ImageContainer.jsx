import styles from './styles/ImageContainer.module.css'
import Image from 'next/image'
import mypic from '../public/static/myPictureFocusedAgain2.png'
export function WindowsImageViewer(){
    return(
        <section className={styles.pictureContainer}>
            <div className={styles.navContainer}>
                <ul className={styles.nav}>
                    <li className={styles.navItemMenu}>
                        <div class='bx bx-images'></div>
                    </li>
                    <li className={styles.navItemName}>
                        <p>PictureUsedInMyPort...</p>
                    </li>
                    <li className={styles.navItemControls}>
                        <div> ...</div>
                    </li>
                    <li className={styles.navItemControls}>
                        <div class='bx bx-zoom-out'></div>
                    </li>
                    <li className={styles.navItemControls}>
                        <div class='bx bx-zoom-in'></div>
                    </li>
                    <li className={styles.navItemPorcent}>
                        <p>45 %</p>
                    </li>
                    <div className={styles.functionControllers}>
                        <li className={styles.navItemFunction}>
                        <div class='bx bx-minus'></div>

                        </li>
                        <li className={styles.navItemFunction}>
                            <div class='bx bx-checkbox'></div>
                        </li>
                        <li className={styles.navItemFunctionX}>
                            <div class='bx bx-x'></div>
                        </li>
                    </div>
                </ul>
            </div>
            <Image src={mypic} alt="Me" className={styles.picture} />
        </section>
    )
}